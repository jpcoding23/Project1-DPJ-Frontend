import { IAccount } from "./IAccount";
import { IUserStatus } from "./IUserStatus";
import { IUserType } from "./IUserType";

export interface IUser{
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    password?:string,
    role:IUserType,
    userStatus:IUserStatus,
    accounts:IAccount[],
    checkingAccountNumber?:number,
    savingsAccountNumber?:number
}

