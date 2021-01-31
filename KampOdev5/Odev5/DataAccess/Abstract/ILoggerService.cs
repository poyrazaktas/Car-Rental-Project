using Odev5.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Odev5.DataAccess.Abstract
{
    interface ILoggerService
    {
        void Add(IEntity entity);
        void Update(IEntity entity);
        void Delete(IEntity entity);
    }
}
