using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using TokenLib.Model;

namespace TokenLib.Common
{
    internal class ConfigurationSingleton
    {
        private List<UserModel> _users = null;
        public List<UserModel> Users { get { return _users; } }

        private string _issuer = "";
        public string Issuer { get { return _issuer; } }

        private string _audience = "";
        public string Audience { get { return _audience; } }

        private ConfigurationSingleton()
        {
            string strExeFilePath = System.Reflection.Assembly.GetExecutingAssembly().Location;
            string strWorkPath = Path.GetDirectoryName(strExeFilePath);
            var builder = new ConfigurationBuilder()
                .AddJsonFile(Path.Combine(strWorkPath, $"appsettings.TokenInfo.json"), optional: false)
                .Build();

            _users = (List<UserModel>)builder.GetSection("Users").Get<List<UserModel>>();
            _issuer = builder.GetSection("Issuer").Value ?? "";
            _audience = builder.GetSection("Audience").Value ?? "";
        }

        private static readonly ConfigurationSingleton _configurationSingleton = new ConfigurationSingleton();

        public static ConfigurationSingleton GetInstance() => _configurationSingleton;
    }
}
