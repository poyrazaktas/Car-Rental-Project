using RecapDemo1.Business.Abstract;
using RecapDemo1.DataAccess.Abstract;
using RecapDemo1.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecapDemo1.Business.Concrete
{
    class GameManager : IEntityService
    {
        List<ILoggerService> _loggerServices;
        public GameManager(List<ILoggerService> loggerServices)
        {
            _loggerServices = loggerServices;
        }
        public void Add(IEntity game)
        {
            foreach (var logger in _loggerServices)
            {
                logger.Add(game);
            }
        }

        public void Delete(IEntity game)
        {
            foreach (var logger in _loggerServices)
            {
                logger.Delete(game);
            }
        }

        public void Update(IEntity game)
        {
            foreach (var logger in _loggerServices)
            {
                logger.Update(game);
            }
        }
    }
}
