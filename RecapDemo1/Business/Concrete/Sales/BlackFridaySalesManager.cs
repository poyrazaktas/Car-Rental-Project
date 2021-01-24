using RecapDemo1.Business.Abstract;
using RecapDemo1.Entities;
using System;

namespace RecapDemo1.Business.Concrete.Sales
{
    class BlackFridaySalesManager : ISalesService
    {
        public void Discount(IEntity game)
        {
            Console.WriteLine(game.Name+ " oyununa kara cuma indirimi yapıldı.");
        }
    }
}
