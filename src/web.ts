import fetch from "cross-fetch"
import fs from "fs"
import { AuthenticationData, CustomerData } from "../types"
import { apiKey, endpoint } from "./config"

/** using the vanmoof username and password, return the first bike's encryption key */
export const getEncryptionKey = async (): Promise<string[]> => {
  const { USERNAME, PASSWORD } = process.env

  // get auth token
  const res = await fetch(`${endpoint}/authenticate`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa(USERNAME + ":" + PASSWORD)}`,
      "Api-Key": apiKey,
    },
  })
  const { token, refreshToken } = (await res.json()) as AuthenticationData

  // get key for bike
  const res2 = await fetch(`${endpoint}/getCustomerData?includeBikeDetails`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Api-Key": apiKey,
    },
  })
  const data = (await res2.json()) as CustomerData

  fs.writeFileSync("./web-data.json", JSON.stringify(data, null, 2))

  const { encryptionKey, passcode, userKeyId } =
    data?.data?.bikeDetails?.[0]?.key

  return [encryptionKey, userKeyId]
}
