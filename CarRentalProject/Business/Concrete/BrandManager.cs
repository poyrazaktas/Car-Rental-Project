using Business.Abstract;
using Business.Constants;
using Core.Utils.Business;
using Core.Utils.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Business.Concrete
{
    public class BrandManager : IBrandService
    {
        private IBrandDal _brandDal;

        public BrandManager(IBrandDal brandDal)
        {
            _brandDal = brandDal;
        }

        public IResult Add(Brand brand)
        {
            var result = Rules.Run(CheckIfBrandExists(brand.Name));
            if (result != null)
            {
                return new ErrorResult(result.Message);
            }
            _brandDal.Add(brand);
            return new SuccessResult(Messages.BrandAdded);
        }

        public IResult Delete(Brand brand)
        {
            _brandDal.Delete(brand);
            return new SuccessResult(Messages.BrandDeleted);
        }

        public IResult Update(Brand brand)
        {
            _brandDal.Update(brand);
            return new SuccessResult(Messages.BrandUpdated);
        }

        public IDataResult<List<Brand>> GetAll()
        {
            return new SuccessDataResult<List<Brand>>(_brandDal.GetAll(), Messages.BrandsListed);
        }

        private IResult CheckIfBrandExists(string brandName)
        {
            var result = _brandDal.GetAll(b => b.Name == brandName).Any();
            if (result)
            {
                return new ErrorResult(Messages.ErrorBrandExists);
            }
            return new SuccessResult();
        }
    }
}