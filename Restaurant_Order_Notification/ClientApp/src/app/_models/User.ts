export interface IUser {
    username:string
    Role:Role
}

export enum Role {
    Admin = 0,
    Customer = 1
}
