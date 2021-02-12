using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.DTOs
{
    public class RentalDetailDto : IDto
    {
        public string CustomerFirstName { get; set; }
        public string CustomerLastName { get; set; }
        public string BrandName { get; set; }
        public string CarDescription { get; set; }
        public int CarDailyPrice { get; set; }
        public DateTime RentDate { get; set; }
        public DateTime? ReturnDate { get; set; }
    }
}