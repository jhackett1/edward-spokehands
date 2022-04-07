import { ByteSource } from "aes-js"
import aesJs from "aes-js"

export default class {
  _key: Uint8Array
  _passcode
  _aes

  constructor(encryptionKey: string, passcodeLength: number) {
    this._key = new Uint8Array(aesJs.utils.hex.toBytes(encryptionKey))
    if (this._key.length === 17) {
      this._key = this._key.subarray(1, this._key.length)
    } else if (this._key.length < 16) {
      const key = new Uint8Array(16)
      key.set(this._key, 16 - this._key.length)
      this._key = key
    }
    this._passcode = this._key.subarray(0, passcodeLength)
    this._aes = new aesJs.ModeOfOperation.ecb(this._key)
  }

  encrypt(bytes: ByteSource) {
    return this._aes.encrypt(bytes)
  }

  decrypt(bytes: ByteSource) {
    return this._aes.decrypt(bytes)
  }

  getKey() {
    return this._key
  }

  getPasscode() {
    return this._passcode
  }

  getUtils() {
    return aesJs.utils
  }
}
