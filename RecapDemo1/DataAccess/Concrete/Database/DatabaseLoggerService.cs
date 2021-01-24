using RecapDemo1.DataAccess.Abstract;
using RecapDemo1.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecapDemo1.DataAccess.Concrete.Database
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
