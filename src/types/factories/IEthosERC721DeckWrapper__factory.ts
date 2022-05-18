/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IEthosERC721DeckWrapper,
  IEthosERC721DeckWrapperInterface,
} from "../IEthosERC721DeckWrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "itemIdOf",
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
];

export class IEthosERC721DeckWrapper__factory {
  static readonly abi = _abi;
  static createInterface(): IEthosERC721DeckWrapperInterface {
    return new utils.Interface(_abi) as IEthosERC721DeckWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IEthosERC721DeckWrapper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IEthosERC721DeckWrapper;
  }
}