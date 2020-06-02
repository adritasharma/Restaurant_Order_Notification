using Restaurant_Order_Notification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurant_Order_Notification.Services
{
    public class MenuService : IMenuService
    {
        public List<Menu> menus = new List<Menu>();

        public MenuService()
        {
            menus.Add(new Menu { MenuId = 1, MenuName="Chicken Pizza" , Price = 150 });
            menus.Add(new Menu { MenuId = 2, MenuName = "Paneer Pizza", Price = 140 });
            menus.Add(new Menu { MenuId = 3, MenuName = "Onion capsicum Pizza", Price = 100 });
            menus.Add(new Menu { MenuId = 4, MenuName = "Double Cheese Pizza", Price = 130 });
            menus.Add(new Menu { MenuId = 5, MenuName = "Mushroom Pizza", Price = 120 });
        }

        public Menu Add(Menu menu)
        {
            int menuId = 0;

            if (menus.Count == 0)
            {
                menuId = 1;
            }
            else
            {
                menuId = menus.Last().MenuId + 1;
            }

            menu.MenuId = menuId;
            menus.Add(menu);
            return menu;
        }

        public IEnumerable<Menu> GetAll()
        {
            return menus;
        }
    }
}
