using RecapDemo1.Business.Abstract;
using RecapDemo1.Entities;
using System.Collections.Generic;
using System.Text;

namespace RecapDemo1.Business.Concrete.Sales
{
    class WeekendSalesManager : ISalesService
    {
        public void Discount(IEntity game)
        {
            System.Console.WriteLine(game.Name +" oyununa hafta sonu indirimi yapıldı.");
        }
    }
}
