﻿namespace TokenLib.Model
{
    public class TokenModel
    {
        public string access_token { get; set; }
        public int expires_in { get; set; }
        public string token_type { get; set; }
        public string username { get; set; }
    }
}
