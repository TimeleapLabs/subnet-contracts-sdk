/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common.js";

export interface IStakesInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getStakeAmount"
      | "getStakedNftId"
      | "getUnlockDate"
      | "stake"
      | "stakeWithNft"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getStakeAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakedNftId",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnlockDate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeWithNft",
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getStakeAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakedNftId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnlockDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeWithNft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export interface IStakes extends BaseContract {
  connect(runner?: ContractRunner | null): IStakes;
  waitForDeployment(): Promise<this>;

  interface: IStakesInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getStakeAmount: TypedContractMethod<[user: AddressLike], [bigint], "view">;

  getStakedNftId: TypedContractMethod<
    [user: AddressLike],
    [[boolean, bigint]],
    "view"
  >;

  getUnlockDate: TypedContractMethod<[user: AddressLike], [bigint], "view">;

  stake: TypedContractMethod<
    [user: AddressLike, amount: BigNumberish, duration: BigNumberish],
    [void],
    "nonpayable"
  >;

  stakeWithNft: TypedContractMethod<
    [
      user: AddressLike,
      amount: BigNumberish,
      duration: BigNumberish,
      nftId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<[user: AddressLike], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getStakeAmount"
  ): TypedContractMethod<[user: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getStakedNftId"
  ): TypedContractMethod<[user: AddressLike], [[boolean, bigint]], "view">;
  getFunction(
    nameOrSignature: "getUnlockDate"
  ): TypedContractMethod<[user: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "stake"
  ): TypedContractMethod<
    [user: AddressLike, amount: BigNumberish, duration: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stakeWithNft"
  ): TypedContractMethod<
    [
      user: AddressLike,
      amount: BigNumberish,
      duration: BigNumberish,
      nftId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[user: AddressLike], [void], "nonpayable">;

  filters: {};
}
