

export interface IAccount {
    id: number;
    accountType: string;
    accountNumber: number;
    accountOwner: string;
    balance: number;
    accountStatus: string;
    //accountTransactions: ITransaction[];
}