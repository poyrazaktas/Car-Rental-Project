using RecapDemo1.DataAccess.Abstract;
using RecapDemo1.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecapDemo1.DataAccess.Concrete.File
{
    class FileLoggerService : ILoggerService
    {
        public void Add(IEntity entity)
        {
            Console.WriteLine(entity.Name + " dosyaya eklendi.");
        }

        public void Delete(IEntity entity)
        {
            Console.WriteLine(entity.Name + " dosyadan kaldırıldı.");

        }

        public void Update(IEntity entity)
        {
            Console.WriteLine(entity.Name + " dosyada güncellendi.");
        }
    }
}
