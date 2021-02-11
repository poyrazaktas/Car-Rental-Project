using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utils.Results
{
    public class ErrorDataResult<T> : DataResult<T> 
    {
        public ErrorDataResult(T data, string message) : base(data,message,false)
        {

        }
        public ErrorDataResult(T data) : base(data,false)
        {

        }
    }

}
