﻿using Core.Utils.Results;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardInformationsController : ControllerBase
    {
        [HttpPost("check")]
        public IActionResult Check(CardInformation card)
        {
            if (card.CardId == MyCard.cardInformation.CardId && card.CardCvc == MyCard.cardInformation.CardCvc)
            {
                return Ok(new SuccessResult("Card accepted."));
            }
            return BadRequest(new ErrorResult("Card not accepted."));
        }

        [HttpGet("pay")]
        public IActionResult Pay(int price)
        {
            if (price < MyCard.Balance)
            {
                MyCard.Balance = MyCard.Balance - price;
                return Ok(new SuccessResult("Payment transaction successful."));
            }
            return BadRequest(new ErrorResult("Payment transaction failed."));
        }
    }

    public class CardInformation
    {
        public string CardId { get; set; }
        public string CardCvc { get; set; }
    }

    public class Card
    {
        public CardInformation cardInformation { get; set; }
        public int Balance { get; set; }
    }

    public class MyCard : Card
    {
        public static CardInformation cardInformation = new CardInformation() { CardId = "1234567890", CardCvc = "123" };
        public static int Balance = int.MaxValue;
    }
}