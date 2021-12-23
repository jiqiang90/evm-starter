"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestEntity = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class TestEntity {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save TestEntity entity without an ID");
        await store.set('TestEntity', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove TestEntity entity without an ID");
        await store.remove('TestEntity', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get TestEntity entity without an ID");
        const record = await store.get('TestEntity', id.toString());
        if (record) {
            return TestEntity.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        (0, assert_1.default)(typeof record.id === 'string', "id must be provided");
        let entity = new TestEntity(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.TestEntity = TestEntity;
