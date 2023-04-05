using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using TokenLib.Common;
using TokenLib.Model;

namespace TokenLib
{
    public class TokenManager
    {
        private const string _clientIdValue = "Id";
        private const string _bearerValue = "Bearer";
        private const string _basicValue = "Basic";
        private const string _authorizationValue = "Authorization";
        private const string _semiColonValue = ":";
        private const int _expiryDateInSeconds = 36000;

        public static TokenModel? GenerateJSONWebToken(TokenRequestModel userInfo, HttpRequest request)
        {
            var config = ConfigurationSingleton.GetInstance();

            UpdateClientDataFromRequest(userInfo, request);

            if (userInfo.client_id == null || userInfo.client_secret == null)
            {
                return null;
            }

            var user = config.Users.Where(u =>
                u.ClientId == userInfo.client_id &&
                u.ClientSecret == userInfo.client_secret &&
                u.Scope == userInfo.scope
                ).FirstOrDefault();

            if (user == null)
            {
                return null;
            }

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(user.ClientSecret));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
              config.Issuer,
              config.Audience,
              new[] {
                    new Claim(_clientIdValue, userInfo.client_id)
              },
              expires: DateTime.UtcNow.AddSeconds(_expiryDateInSeconds),
              signingCredentials: credentials);

            var access_token = new JwtSecurityTokenHandler().WriteToken(token);

            return new TokenModel
            {
                access_token = access_token,
                expires_in = _expiryDateInSeconds,
                token_type = _bearerValue,
                username = user.ClientId
            };
        }

        public static bool ValidateJSONWebToken(string authHeader)
        {

            if (authHeader == null)
                return false;

            try
            {
                var config = ConfigurationSingleton.GetInstance();

                var tokenHandler = new JwtSecurityTokenHandler();

                if (!authHeader.StartsWith(_bearerValue)) { return false; }

                authHeader = authHeader.Replace(_bearerValue, string.Empty).Trim();

                var jwtToken = (JwtSecurityToken)tokenHandler.ReadToken(authHeader);

                var idFromClaim = jwtToken.Claims.Where(c => c.Type == _clientIdValue).FirstOrDefault();

                if (idFromClaim == null) { return false; }

                var userModel = config.Users.Where(u => u.ClientId == idFromClaim.Value.ToString()).FirstOrDefault();

                if (userModel == null) { return false; }

                var key = Encoding.ASCII.GetBytes(userModel.ClientSecret);

                tokenHandler.ValidateToken(authHeader, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ClockSkew = TimeSpan.Zero,
                    ValidIssuer = config.Issuer,
                    ValidAudience= config.Audience,
                }, out SecurityToken validatedToken);

                var jwtValidatedToken = (JwtSecurityToken)validatedToken;
                return true;
            }
            catch
            {
                return false;
            }
        }

        private static void UpdateClientDataFromRequest(TokenRequestModel userInfo, HttpRequest request)
        {
            if (userInfo.client_id == null || userInfo.client_secret == null)
            {
                var authString = request.Headers[_authorizationValue].ToString();

                if (!authString.StartsWith(_basicValue)) { return; }

                authString = authString.Replace(_basicValue, string.Empty).Trim();

                var decodedString = DecodeBase64String(authString);

                var details = decodedString.Split(_semiColonValue);

                if (details != null && details.Count() == 2)
                {
                    userInfo.client_id = details[0];
                    userInfo.client_secret = details[1];
                }
            }
        }

        private static string DecodeBase64String(string encodedString)
        {
            byte[] data = Convert.FromBase64String(encodedString);
            return Encoding.UTF8.GetString(data);
        }
    }
}
