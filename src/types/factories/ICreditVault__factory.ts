/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICreditVault, ICreditVaultInterface } from "../ICreditVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approveOnCreditDelegation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_counter",
        type: "uint256",
      },
    ],
    name: "getPositionAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_counter",
        type: "uint256",
      },
    ],
    name: "getPositionCreditor",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_counter",
        type: "uint256",
      },
    ],
    name: "returnCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_debitor",
        type: "address",
      },
      {
        internalType: "address",
        name: "_creditor",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_collateral",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_month",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_year",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_interest",
        type: "uint256",
      },
    ],
    name: "saveData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICreditVault__factory {
  static readonly abi = _abi;
  static createInterface(): ICreditVaultInterface {
    return new utils.Interface(_abi) as ICreditVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICreditVault {
    return new Contract(address, _abi, signerOrProvider) as ICreditVault;
  }
}
