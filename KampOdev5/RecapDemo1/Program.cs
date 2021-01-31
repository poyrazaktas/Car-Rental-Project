using RecapDemo1.Business.Abstract;
using RecapDemo1.Business.Concrete;
using RecapDemo1.Business.Concrete.Platforms;
using RecapDemo1.Business.Concrete.Sales;
using RecapDemo1.Business.ValidationRules.Abstract;
using RecapDemo1.Business.ValidationRules.Concrete.Mernis;
using RecapDemo1.DataAccess.Abstract;
using RecapDemo1.DataAccess.Concrete.Database;
using RecapDemo1.DataAccess.Concrete.File;
using RecapDemo1.Entities;
using RecapDemo1.Entities.Concrete;
using System;
using System.Collections.Generic;

namespace RecapDemo1
{
    class Program
    {
        static void Main(string[] args)
        {
            ILoggerService fileLogger = new FileLoggerService();
            ILoggerService databaseLogger = new DatabaseLoggerService();
            IValidateService mernisValidateService = new MernisValidateService();

            IEntityService playerManager = new PlayerManager(new List<ILoggerService> { databaseLogger,fileLogger},
                new List<IValidateService> { mernisValidateService });
            Person enginHoca = new Player() { NationalityNumber = "00000000000", Name = "Engin", 
                LastName = "Demiroğ", YearOfBirth = 1985, Balance = 4000 };
            Person poyraz = new Player() { NationalityNumber = "11111111111", Name = "Poyraz",
                LastName = "Aktaş", YearOfBirth = 2000 , Balance = 1500};
            Person ayaz = new Player() { NationalityNumber = "22222222222", Name = "A",
                LastName = "Aktaş", YearOfBirth = 2003 , Balance= 99999};
            Person mert = new Player() { NationalityNumber = "33333333333", Name = "Mert",
                LastName = "Özcan", YearOfBirth = 2000 , Balance = 2200};
            
            playerManager.Add(enginHoca);
            playerManager.Add(poyraz);
            playerManager.Add(ayaz);
            playerManager.Add(mert);


            IEntity gta5 = new Game() { Id = 1, Name = "GTA 5", Publisher = "Rockstar Games", UnitPrice = 140.50 };
            IEntity wow = new Game() { Id = 2, Name = "World of Warcraft", Publisher = "Blizzard", UnitPrice = 2000};
            IEntity cyberpunk = new Game() { Id = 3, Name = "Cyberpunk 2077", Publisher = "CD Projekt Red ", UnitPrice = 239.99 };

            IEntityService gameManager = new GameManager(new List<ILoggerService> { databaseLogger });
            gameManager.Add(gta5);
            gameManager.Add(wow);
            gameManager.Add(cyberpunk);

            ISalesService yaz_indirimi = new SummerSalesManager();
            ISalesService karaCuma_indirimi = new BlackFridaySalesManager();
            ISalesService yilbasi_indirimi = new NewYearSalesManager();
            ISalesService haftasonu_indirimi = new WeekendSalesManager();

            IPlatformService steam = new SteamPlatformManager(new List<ISalesService> { });
            IPlatformService epic_games = 
                new EpicGamesPlatformManager(new List<ISalesService> {karaCuma_indirimi,haftasonu_indirimi });

            steam.BuyGame(poyraz,gta5);
            epic_games.BuyGame(enginHoca, cyberpunk);
            steam.ToRefund(poyraz, gta5);
            epic_games.BuyGame(poyraz, gta5);


        }
    }
}
