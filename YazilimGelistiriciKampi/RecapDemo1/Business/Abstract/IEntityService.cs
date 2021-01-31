using RecapDemo1.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecapDemo1.Business.Abstract
{
    interface IEntityService
    {
        void Add(IEntity entity);
        void Update(IEntity entity);
        void Delete(IEntity entity);

    }
}
