using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurant_Order_Notification.Notification
{
    public class NotificationHub:Hub
    {
        public NotificationHub()
        {

        }

        public async void OrderPlace(int orderId)
        {
            await Clients.All.SendAsync(WebSocketActions.NEW_ORDER_PLACED, orderId);
        }
    }
    public struct WebSocketActions
    {
        public static readonly string NEW_ORDER_PLACED = "newOrderPlaced";
        public static readonly string ORDER_STATUS_CHANGE = "orderStatusChange";
    }
}
