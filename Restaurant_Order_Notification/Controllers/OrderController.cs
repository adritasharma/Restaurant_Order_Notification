using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Restaurant_Order_Notification.Models;
using Restaurant_Order_Notification.Notification;
using Restaurant_Order_Notification.Services;

namespace Restaurant_Order_Notification.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _service;
        private readonly IHubContext<NotificationHub> _orderNotificationHub;


        public OrderController(IOrderService orderService, IHubContext<NotificationHub> orderNotificationHub)
        {
            _service = orderService ?? throw new ArgumentNullException(nameof(orderService));
            _orderNotificationHub = orderNotificationHub;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var res = _service.GetAll();
            return Ok(res);
        }

        [HttpPost]
        public async Task<IActionResult> AddAsync(Order order)
        {
            var res = _service.Add(order);


            //await _orderNotificationHub.Clients.All.SendAsync("NewMessage", 1);
           // await _orderNotificationHub.Groups.AddToGroupAsync(_orderNotificationHub.)

            await _orderNotificationHub.Clients.Group("admin").SendAsync("NewMessage", 1);


            return Ok(res);
        }
    }
}