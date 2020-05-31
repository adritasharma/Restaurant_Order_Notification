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

        public Task JoinGroup(string groupName)
        {
            return Groups.AddToGroupAsync(Context.ConnectionId, groupName);
        }
    }
    //public struct WebSocketActions
    //{
    //    public static readonly string NEW_ORDER_PLACED = "newOrderPlaced";
    //    public static readonly string ORDER_STATUS_CHANGE = "orderStatusChange";
    //}
}
