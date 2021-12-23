import { MoonbeamEvent, MoonbeamCall } from '@subql/contract-processors/dist/moonbeam';
import { BigNumber } from "ethers";
declare type TransferEventArgs = [string, string, BigNumber] & {
    from: string;
    to: string;
    value: BigNumber;
};
declare type ApproveCallArgs = [string, BigNumber] & {
    _spender: string;
    _value: BigNumber;
};
export declare function handleMoonriverEvent(event: MoonbeamEvent<TransferEventArgs>): Promise<void>;
export declare function handleMoonriverCall(event: MoonbeamCall<ApproveCallArgs>): Promise<void>;
export declare function handleEnumEvent(event: MoonbeamEvent<TransferEventArgs>): Promise<void>;
export {};
