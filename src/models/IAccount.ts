import { IAccountStatus } from "./IAccountStatus";
import { IAccountType } from "./IAccountType";
import { ITransaction } from "./ITransaction";
import { IUser } from "./IUser";

export interface IAccount{
    id: number,
    accountType:IAccountType,
    accountNumber:number,
    accountOwner: IUser,
    balance:number,
    accountStatus:IAccountStatus,
    accountTransactions ?:ITransaction[]
}

