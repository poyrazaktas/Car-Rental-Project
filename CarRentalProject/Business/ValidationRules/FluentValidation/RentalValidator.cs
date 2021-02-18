using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework;
using Entities.Concrete;
using FluentValidation;
using System;
using System.Linq;

namespace Business.ValidationRules.FluentValidation
{
    public class RentalValidator : AbstractValidator<Rental>
    {
        private IRentalDal _rentalDal;

        public RentalValidator()
        {
            _rentalDal = new EfRentalDal();
            // some rules for rentals
            RuleFor(rental => rental).Must(Returned).WithMessage("İstenilen araba henüz teslim edilmedi.");
        }

        private bool Returned(Rental arg)
        {
            var resultList = _rentalDal.GetAll(r => r.CarId == arg.CarId).ToList();
            var result = resultList.Last().ReturnDate != null ? true : false;
            return result;
        }
    }
}