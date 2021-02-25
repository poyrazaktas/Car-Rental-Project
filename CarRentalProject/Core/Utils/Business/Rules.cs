using Core.Utils.Results;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utils.Business
{
    public class Rules
    {
        public static IResult Run(params IResult[] results)
        {
            foreach (var result in results)
            {
                if (!result.Success)
                {
                    return result;
                }
            }
            return null;
        }
    }
}