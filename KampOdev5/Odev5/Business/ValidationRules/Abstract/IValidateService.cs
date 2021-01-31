using Odev5.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Odev5.Business.ValidationRules.Abstract
{
    interface IValidateService
    {
        void Validate(Person person);
    }
}
