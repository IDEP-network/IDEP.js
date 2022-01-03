import {KdfParams} from '../../types/types';
import isNode from '../../utils/is-node';
import {WebCrypto} from './browser.strategy';
import {NodeCrypto} from './node.strategy';

export interface CryptoStrategy {
  getRandomBytes(length: number): Promise<Buffer | Uint8Array>;
  kdfMethod(
    password: string,
    salt: string | any
  ): Promise<Buffer | ArrayBuffer>;
  encrypt(message: string, password: string): Promise<any>;
  decrypt(encryptedphrase: any, password: string): Promise<string>;
}

const encryptionToolFactory = () => {
  if (isNode) {
    const crypto = require('crypto') as typeof import('crypto');
    return new NodeCrypto(crypto);
  } else {
    const crypto = window.crypto.subtle;
    const getRandomBytes = window.crypto.getRandomValues;
    return new WebCrypto(crypto, getRandomBytes);
  }
};

export const EncryptionTool = encryptionToolFactory();

export class WalletEncrptor {
  strategy: CryptoStrategy;
  constructor(strategy: CryptoStrategy) {
    this.strategy = strategy;
  }
  async getRandomBytes(length: number): Promise<Buffer | Uint8Array> {
    const bytes = await this.strategy.getRandomBytes(length);
    return bytes;
  }

  async encrypt(message: string, password: string): Promise<any> {
    const encrypted = await this.strategy.encrypt(message, password);
    return encrypted;
  }
  async decrypt(encryptedphrase: any, password: string): Promise<string> {
    const decrypt = this.strategy.decrypt(encryptedphrase, password);
    return decrypt;
  }
}

export const getDefaultKdfParams = (): KdfParams => {
  const kdfParams: KdfParams = {
    keylen: 32,
    N: 16384,
    r: 8,
    p: 1,
  };
  return kdfParams;
};