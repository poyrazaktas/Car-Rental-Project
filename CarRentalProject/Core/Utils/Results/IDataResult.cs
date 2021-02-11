using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utils.Results
{
    public interface IDataResult<T> : IResult
    {
        T Data { get; }
    }
}
