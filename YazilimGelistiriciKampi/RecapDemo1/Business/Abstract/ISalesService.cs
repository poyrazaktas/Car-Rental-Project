using RecapDemo1.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecapDemo1.Business.Abstract
{
    interface ISalesService
    {
        void Discount(IEntity entitiy);
    }
}
