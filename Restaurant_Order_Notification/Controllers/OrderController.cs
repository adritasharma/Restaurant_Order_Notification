using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Restaurant_Order_Notification.Models;
using Restaurant_Order_Notification.Services;

namespace Restaurant_Order_Notification.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _service;

        public OrderController(IOrderService orderService)
        {
            _service = orderService ?? throw new ArgumentNullException(nameof(orderService));
        }
        [HttpGet]
        public IActionResult Get()
        {
            var res = _service.GetAll();
            return Ok(res);
        }

        [HttpPost]
        public IActionResult Add(Order order)
        {
            var res = _service.Add(order);
            return Ok(res);
        }
    }
}