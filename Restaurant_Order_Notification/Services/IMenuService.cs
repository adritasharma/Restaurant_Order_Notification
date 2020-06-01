using Restaurant_Order_Notification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurant_Order_Notification.Services
{
    public interface IMenuService
    {
        IEnumerable<Menu> GetAll();
    }
}
