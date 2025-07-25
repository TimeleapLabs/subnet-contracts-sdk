/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IRepository,
  IRepositoryInterface,
} from "../../Repository.sol/IRepository.js";

const _abi = [
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IRepository__factory {
  static readonly abi = _abi;
  static createInterface(): IRepositoryInterface {
    return new Interface(_abi) as IRepositoryInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IRepository {
    return new Contract(address, _abi, runner) as unknown as IRepository;
  }
}
