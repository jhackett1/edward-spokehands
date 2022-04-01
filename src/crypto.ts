import aes from "aes-js"

/** initialise an aes (ecb) cipher for encrypting and decryting stuff, passing in the encryption key */
export const cipher = (key: string) => {
  const kb = new Uint8Array(aes.utils.hex.toBytes(key))
  return new aes.ModeOfOperation.ecb(kb)
}
