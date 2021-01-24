using RecapDemo1.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecapDemo1.Business.Abstract
{
    interface IPlatformService
    {
        void BuyGame(IEntity person, IEntity game);
        void ToRefund(IEntity person, IEntity game);
    }
}
