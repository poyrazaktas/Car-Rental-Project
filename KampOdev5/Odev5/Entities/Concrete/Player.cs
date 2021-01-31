using System;
using System.Collections.Generic;
using System.Text;

namespace Odev5.Entities
{
    class Player : Person
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public double Balance { get; set; }
    }
}
