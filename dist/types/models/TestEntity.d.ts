import { Entity, FunctionPropertyNames } from "@subql/types";
import { TestEnum } from '../enums';
export declare class TestEntity implements Entity {
    constructor(id: string);
    id: string;
    field: TestEnum;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<TestEntity | undefined>;
    static create(record: Partial<Omit<TestEntity, FunctionPropertyNames<TestEntity>>> & Entity): TestEntity;
}
