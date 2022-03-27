export interface RegisterRequest {
    name: string;
    photo: string;
    email: string;
    password: string;
}

export type UserWithBalance = UserSchema & {
    balance: number
};

export interface Product {
    title: string,
    description: string,
    price: number,
    id: string;
    updatedAt: string;
    createdAt: string;
}

export interface TransferOperation {
    paymentType: 'transfer' | 'purchase' | 'present';
    updatedAt: string;
    createdAt: string;
    id: string;
    paymentAmount: number;
    incomingAccount: UserSchema;
    outgoingAccount: UserSchema;
}

export interface TransferOperationSuccess {
    userCurrentBalance: number;
    performedOperation: TransferOperation;
}

export interface UserSchema {
    name: string;
    photo: string;
    email: string;
    id: string;
    createdAt: string;
    updatedAt: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}
