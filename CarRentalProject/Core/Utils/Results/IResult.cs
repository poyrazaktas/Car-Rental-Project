using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utils.Results
{
    public interface IResult
    {
        string Message { get; }
        bool Success { get; }
    }
}
