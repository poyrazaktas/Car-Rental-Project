using System;
using System.Collections.Generic;
using System.Text;

namespace RecapDemo1.Entities.Concrete
{
    class Game : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Publisher { get; set; }
        public double UnitPrice { get; set; }
    }
}
