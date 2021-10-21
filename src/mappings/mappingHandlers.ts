import {Approval, Transaction} from "../types";
import { Interface } from '@ethersproject/abi';
const erc20abi = require('../../erc20.abi.json');
import { MoonbeamEvent, MoonbeamCall } from '@subql/contract-processors/dist/moonbeam';

export async function handleMoonriverEvent(event: MoonbeamEvent): Promise<void> {

    const record = new Transaction(event.transactionHash);

    const iface = new Interface(erc20abi);
    const parsedLog = iface.parseLog(event);

    record.value = parsedLog.args.value;
    record.from = parsedLog.args.from;
    record.to = parsedLog.args.to;
    record.contractAddress = event.address;

    await record.save();
}

export async function handleMoonriverCall(event: MoonbeamCall): Promise<void> {

    const record = new Approval(event.hash);

    const iface = new Interface(erc20abi);
    const parsed = iface.decodeFunctionData(`approve(address,uint256)`, event.data);

    record.owner = event.from;
    record.value = parsed._value;
    record.spender = parsed._spender;
    record.contractAddress = event.to;

    await record.save();
}
