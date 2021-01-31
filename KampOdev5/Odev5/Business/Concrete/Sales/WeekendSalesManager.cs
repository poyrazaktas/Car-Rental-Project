using Odev5.Business.Abstract;
using Odev5.Entities;
using System.Collections.Generic;
using System.Text;

namespace Odev5.Business.Concrete.Sales
{
    class WeekendSalesManager : ISalesService
    {
        public void Discount(IEntity game)
        {
            System.Console.WriteLine(game.Name +" oyununa hafta sonu indirimi yapıldı.");
        }
    }
}
