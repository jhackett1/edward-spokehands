import dotenv from "dotenv"
import noble, { Characteristic } from "@abandonware/noble"
import { getEncryptionKey } from "./web"
import { sx3Uuid, x3Profile } from "./config"
import { initCipher } from "./crypto"
import { Bike } from "../types"

dotenv.config()

const getCharacteristic = (characteristics: Characteristic[], uuid: string) =>
  characteristics?.find(
    characteristic => characteristic.uuid === uuid?.replaceAll("-", "")
  )

const main = async () => {
  // const [key, userKeyId] = await getEncryptionKey()
  const key = "2da5441c8d39008f129d62104684d326"
  const userKeyId = 1

  const cipher = initCipher(key)
  console.log("🔑 0. got encryption key")

  noble.on("stateChange", async state => {
    if (state === "poweredOn") await noble.startScanningAsync([sx3Uuid])
    console.log("🔎 1. searching for bike...")
  })

  noble.on("discover", async bike => {
    console.log("💡 2. found bike")
    await bike.connectAsync()

    console.log("✅ 3. bike connected")
    const { characteristics } =
      await bike.discoverAllServicesAndCharacteristicsAsync()

    // AUTHENTICATE WITH BIKE
    // 1. get nonce
    const nonce = await getCharacteristic(
      characteristics,
      x3Profile.security.CHALLENGE
    )?.readAsync()
    console.log("🔐 4. nonce retrieved: ", nonce)

    if (!nonce) throw "no nonce detected"

    // 2. process nonce into a payload

    // const payload = cipher.encrypt(Uint16Array.from(nonce))

    // 3. send payload back to bike for verification
    // await getCharacteristic(
    //   characteristics,
    //   x3Profile.security.KEY_INDEX
    // )?.writeAsync(Buffer.from(payload))
    // console.log(`🏁 6. authentication flow finished`)

    // process.exit(0)
  })
}

main()
