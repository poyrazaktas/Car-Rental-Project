using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utils.Results
{
    public class DataResult<T> : Result, IDataResult<T>
    {
        public DataResult(T data,string message, bool success) : base(success,message)
        {
            Data = data;
        }
        public DataResult(T data, bool success) : base(success)
        {
            Data = data;
        }
        public T Data { get; }
    }
}
