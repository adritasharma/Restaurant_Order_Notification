using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurant_Order_Notification.Models
{
    public class Order
    {
        public int? OrderId { get; set; }
        public int CustomerId { get; set; }
        public List<OrderItems> OrderItems { get; set; }
        public OrderStatus OrderStatus { get; set; }

    }
    public class OrderItems
    {
        public int MenuId { get; set; }
        public int Quantity { get; set; }
    }

    public enum OrderStatus
    {
        Placed = 0,
        Accepted = 1,
        Prepared = 2,
        Dispatched = 3,
        Delivered = 4
    }
}
