using Restaurant_Order_Notification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurant_Order_Notification.Services
{
    public class OrderService : IOrderService
    {
        public List<Order> orders = new List<Order>();

        public Order Add(Order order)
        {
            int orderId = 0;

            if(orders.Count == 0)
            {
                orderId = 1;
            } else
            {
                orderId = orders.Last().OrderId.Value + 1;
            }

            order.OrderId = orderId;
            orders.Add(order);
            return order;
        }

        public IEnumerable<Order> GetAll()
        {
            return orders;
        }
    }
}
