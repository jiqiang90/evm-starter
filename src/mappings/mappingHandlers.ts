import {Approval, TestEntity, TestEnum, Transaction} from "../types";
import { MoonbeamEvent, MoonbeamCall } from '@subql/contract-processors/dist/moonbeam';
import { BigNumber } from "ethers";

// TODO setup typegen from ABI using typechain/ethers
type TransferEventArgs = [string, string, BigNumber] & { from: string; to: string; value: BigNumber; };
type ApproveCallArgs = [string, BigNumber] & { _spender: string; _value: BigNumber; }

export async function handleMoonriverEvent(event: MoonbeamEvent<TransferEventArgs>): Promise<void> {
    const record = new Transaction(event.transactionHash);

    record.value = event.args.value.toBigInt();
    record.from = event.args.from;
    record.to = event.args.to;
    record.contractAddress = event.address;

    await record.save();
}

export async function handleMoonriverCall(event: MoonbeamCall<ApproveCallArgs>): Promise<void> {
    const record = new Approval(event.hash);

    record.owner = event.from;
    record.value = event.args._value.toBigInt();
    record.spender = event.args._spender;
    record.contractAddress = event.to;

    await record.save();
}

export async function handleEnumEvent(event: MoonbeamEvent<TransferEventArgs>): Promise<void> {
    const blockId = event.blockNumber;
    const eventIdx = event.transactionIndex;

    await TestEntity.create({
        id: `${blockId}/${eventIdx}`,
        field: blockId % 2 === 0 ? TestEnum.Foo : TestEnum.Bar,
    }).save();
}
