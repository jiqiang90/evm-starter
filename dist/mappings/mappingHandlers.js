"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleEnumEvent = exports.handleMoonriverCall = exports.handleMoonriverEvent = void 0;
const types_1 = require("../types");
async function handleMoonriverEvent(event) {
    const record = new types_1.Transaction(event.transactionHash);
    record.value = event.args.value.toBigInt();
    record.from = event.args.from;
    record.to = event.args.to;
    record.contractAddress = event.address;
    await record.save();
}
exports.handleMoonriverEvent = handleMoonriverEvent;
async function handleMoonriverCall(event) {
    const record = new types_1.Approval(event.hash);
    record.owner = event.from;
    record.value = event.args._value.toBigInt();
    record.spender = event.args._spender;
    record.contractAddress = event.to;
    await record.save();
}
exports.handleMoonriverCall = handleMoonriverCall;
async function handleEnumEvent(event) {
    const blockId = event.blockNumber;
    const eventIdx = event.transactionIndex;
    await types_1.TestEntity.create({
        id: `${blockId}/${eventIdx}`,
        field: blockId % 2 === 0 ? types_1.TestEnum.Foo : types_1.TestEnum.Bar,
    }).save();
}
exports.handleEnumEvent = handleEnumEvent;
