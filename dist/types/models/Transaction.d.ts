import { Entity, FunctionPropertyNames } from "@subql/types";
export declare class Transaction implements Entity {
    constructor(id: string);
    id: string;
    value: bigint;
    to: string;
    from: string;
    contractAddress: string;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Transaction | undefined>;
    static create(record: Partial<Omit<Transaction, FunctionPropertyNames<Transaction>>> & Entity): Transaction;
}
