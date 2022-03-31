import fetch from "cross-fetch"
import dotenv from "dotenv"
import fs from "fs"
import noble from "@abandonware/noble"
import { AuthenticationData, CustomerData } from "./types"

dotenv.config()

const apiKey = "fcb38d47-f14b-30cf-843b-26283f6a5819" // universal vanmoof api key, from their app
const endpoint = "https://my.vanmoof.com/api/v8"
const { USERNAME, PASSWORD } = process.env

const main = async () => {
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

  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2))

  const { encryptionKey, passcode, userKeyId } =
    data?.data?.bikeDetails?.[0]?.key

  noble.on("stateChange", async state => {
    if (state === "poweredOn") {
      await noble.startScanningAsync()
    }
  })

  noble.on("discover", async peripheral => {
    await peripheral.connectAsync()
    const { characteristics } =
      await peripheral.discoverAllServicesAndCharacteristicsAsync()

    console.log(peripheral, characteristics)
  })
}

main()
