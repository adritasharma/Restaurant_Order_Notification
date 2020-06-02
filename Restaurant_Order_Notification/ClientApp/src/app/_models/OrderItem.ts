export interface IOrderItem {
    menuId: string;
    menuName: string;
    price: number;
    quantity?: number;
    subTotal?: number;
}
