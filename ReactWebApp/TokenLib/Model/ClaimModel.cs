using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TokenLib.Model
{
    internal class ClaimModel
    {
        public string Id { get; set; }
        public int exp { get; set; }
        public string iss { get; set; }
        public string aud { get; set; }
    }
}
