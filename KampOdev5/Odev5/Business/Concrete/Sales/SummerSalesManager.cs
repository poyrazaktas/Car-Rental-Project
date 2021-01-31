using Odev5.Business.Abstract;
using Odev5.Entities;
using System;

namespace Odev5.Business.Concrete.Sales
{
    class SummerSalesManager : ISalesService
    {
        public void Discount(IEntity game)
        {
            Console.WriteLine(game.Name+" oyununa yaz indirimi yapıldı.");
        }
    }
}
