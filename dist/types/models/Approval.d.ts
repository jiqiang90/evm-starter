import { Entity, FunctionPropertyNames } from "@subql/types";
export declare class Approval implements Entity {
    constructor(id: string);
    id: string;
    value: bigint;
    owner: string;
    spender: string;
    contractAddress: string;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Approval | undefined>;
    static create(record: Partial<Omit<Approval, FunctionPropertyNames<Approval>>> & Entity): Approval;
}
