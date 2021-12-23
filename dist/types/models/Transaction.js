"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class Transaction {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save Transaction entity without an ID");
        await store.set('Transaction', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove Transaction entity without an ID");
        await store.remove('Transaction', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get Transaction entity without an ID");
        const record = await store.get('Transaction', id.toString());
        if (record) {
            return Transaction.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        (0, assert_1.default)(typeof record.id === 'string', "id must be provided");
        let entity = new Transaction(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.Transaction = Transaction;
