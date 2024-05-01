import { IAccount } from "./IAccount";
import { ITransactionType } from "./ITransactionType";
import { IUser } from "./IUser";

export interface ITransaction{
    id?:number,
    accountNumber?:number,
    total:number,
    date?: Date,
    time?:Date,
    transactionType ?: ITransactionType
    sender ?:IUser,
    senderAccountNumber?:number,
    receiver?:IUser,
    receiverAccountNumber?:number
}

