import aes from "aes-js"
import { Cipher } from "../types"

/** initialise an aes (ecb) cipher for encrypting and decryting stuff, passing in the encryption key */
export const initCipher = (key: string): Cipher => {
  const kb = new Uint8Array(aes.utils.hex.toBytes(key))
  return new aes.ModeOfOperation.ecb(kb)
}
