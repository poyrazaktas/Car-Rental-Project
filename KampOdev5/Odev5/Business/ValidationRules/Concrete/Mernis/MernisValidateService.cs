using Odev5.Business.ValidationRules.Abstract;
using Odev5.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Odev5.Business.ValidationRules.Concrete.Mernis
{
    class MernisValidateService : IValidateService
    {
        public void Validate(Person person)
        {
            if (person.Name.Length>1 && person.LastName.Length>1 && person.NationalityNumber.Length==11 && person.YearOfBirth>1800)
            {
                Console.WriteLine(person.Name +" "+person.LastName + " mernis doğrulamasından geçti.");
            }
            else
            {
                throw new Exception(person.Name + " " + person.LastName + " mernis doğrulamasından geçemedi.");

            }
        }
    }
}
