using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Restaurant_Order_Notification.Services;

namespace Restaurant_Menu_Notification.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private readonly IMenuService _service;


        public MenuController(IMenuService menuService)
        {
            _service = menuService ?? throw new ArgumentNullException(nameof(menuService));
        }
        [HttpGet]
        public IActionResult Get()
        {
            var res = _service.GetAll();
            return Ok(res);
        }
    }
}