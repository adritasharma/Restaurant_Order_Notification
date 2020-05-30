using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurant_Order_Notification.Models
{
    public class Order
    {
        public int? OrderId { get; set; }
        public string DishName { get; set; }
        public int Quantity { get; set; }

    }
}
