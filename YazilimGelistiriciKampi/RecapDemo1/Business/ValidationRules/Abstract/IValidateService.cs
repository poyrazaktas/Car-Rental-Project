using RecapDemo1.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecapDemo1.Business.ValidationRules.Abstract
{
    interface IValidateService
    {
        void Validate(Person person);
    }
}
