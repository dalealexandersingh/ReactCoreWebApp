using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TokenLib.Model
{
    internal class Config
    {
        public List<UserModel> Users { get; set; }
        public string Secret { get; set; }
    }
}
