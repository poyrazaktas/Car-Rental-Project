using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.DTOs
{
    public class CarDetailDto : IDto
    {
        public string BrandName { get; set; }
        public string CarDescription { get; set; }
        public string CarColor { get; set; }
        public int CarDailyPrice { get; set; }
   
    }
}
