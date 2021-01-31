using Odev5.DataAccess.Abstract;
using Odev5.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Odev5.DataAccess.Concrete.Database
{
    class DatabaseLoggerService : ILoggerService
    {
        public void Add(IEntity entity)
        {
            Console.WriteLine(entity.Name +" veritabanına eklendi.");
        }

        public void Delete(IEntity entity)
        {
            Console.WriteLine(entity.Name +" veritabanından kaldırıldı.");
         
        }

        public void Update(IEntity entity)
        {
            Console.WriteLine(entity.Name +" veritabanında güncellendi.");
        }
    }
}
