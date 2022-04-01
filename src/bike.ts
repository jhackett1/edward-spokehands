import { Bike, Cipher } from "../types"

/** read info from the bike */
export const read = async (
  bike: Bike,
  characteristicUuid: string
): Promise<string> => {
  const res = await bike.readHandleAsync(Buffer.from(characteristicUuid))
  return res.toString()
}

/** write new data to the bike */
export const write = async (
  bike: Bike,
  characteristicUuid: string,
  newValue: string,
  needsAuthentication?: boolean,
  cipher?: Cipher
): Promise<void> => {
  let digest
  if (needsAuthentication) digest = cipher.decrypt(Buffer.from(newValue))
  await bike.writeHandleAsync(
    Buffer.from(characteristicUuid),
    Buffer.from(digest || newValue),
    false
  )
}
