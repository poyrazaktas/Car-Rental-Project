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
    public class ColorManager : IColorService
    {
        private IColorDal _colorDal;

        public ColorManager(IColorDal colorDal)
        {
            _colorDal = colorDal;
        }

        public IResult Add(Color color)
        {
            var result = Rules.Run(CheckIfColorExists(color.Name));
            if (result != null)
            {
                return new ErrorResult(result.Message);
            }
            _colorDal.Add(color);
            return new SuccessResult(Messages.ColorAdded);
        }

        public IResult Delete(Color color)
        {
            _colorDal.Delete(color);
            return new SuccessResult(Messages.ColorDeleted);
        }

        public IResult Update(Color color)
        {
            _colorDal.Update(color);
            return new SuccessResult(Messages.ColorUpdated);
        }

        public IDataResult<List<Color>> GetAll()
        {
            return new SuccessDataResult<List<Color>>(_colorDal.GetAll(), Messages.ColorsListed);
        }

        private IResult CheckIfColorExists(string colorName)
        {
            var result = _colorDal.GetAll(c => c.Name == colorName).Any();
            if (result)
            {
                return new ErrorResult(Messages.ErrorColorExists);
            }
            return new SuccessResult();
        }
    }
}