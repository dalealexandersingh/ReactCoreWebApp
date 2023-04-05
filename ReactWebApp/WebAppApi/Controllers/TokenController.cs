using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TokenLib.Model;

namespace WebAppApi.Controllers
{
    [Route("api/[controller]")]
    public class TokenController : Controller
    {
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] TokenRequestModel tokenRequest)
        {
            var token = TokenLib.TokenManager.GenerateJSONWebToken(tokenRequest, Request);

            if (token != null)
            {
                return Ok(token);
            }

            return Unauthorized();
        }
    }
}
