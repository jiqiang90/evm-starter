"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Approval = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class Approval {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save Approval entity without an ID");
        await store.set('Approval', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove Approval entity without an ID");
        await store.remove('Approval', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get Approval entity without an ID");
        const record = await store.get('Approval', id.toString());
        if (record) {
            return Approval.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        (0, assert_1.default)(typeof record.id === 'string', "id must be provided");
        let entity = new Approval(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.Approval = Approval;
