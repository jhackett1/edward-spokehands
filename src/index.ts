import dotenv from "dotenv"
import noble, { Characteristic } from "@abandonware/noble"
import { getEncryptionKey } from "./web"
import { passcodeLength, sx3Uuid, x3Profile } from "./config"
import { initCipher } from "./crypto"
import { Bike } from "../types"
import aes, { ByteSource } from "aes-js"
import Fuck from "./fuck"
import { hexToText } from "./utils"

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

dotenv.config()

const getCharacteristic = (characteristics: Characteristic[], uuid: string) =>
  characteristics?.find(
    characteristic => characteristic.uuid === uuid?.replaceAll("-", "")
  )

const key = "2da5441c8d39008f129d62104684d326"
const userKeyId = 1

const main = async () => {
  try {
    // const [key, userKeyId] = await getEncryptionKey()

    const cipher = initCipher(key)
    console.log("🔑 0. got encryption key")

    noble.on("stateChange", async state => {
      if (state === "poweredOn") await noble.startScanningAsync([sx3Uuid])
      console.log("🔎 1. searching for bike...")
    })

    noble.on("discover", async bike => {
      console.log("💡 2. found bike")
      await noble.stopScanningAsync()
      await bike.connectAsync()

      console.log("✅ 3. bike connected")
      const { characteristics } =
        await bike.discoverAllServicesAndCharacteristicsAsync()

      const hex = await getCharacteristic(
        characteristics,
        x3Profile.info.FRAME_NUMBER
      )?.readAsync()
      console.log(`🚲 frame number: ${hexToText(hex)}`)

      // AUTHENTICATE WITH BIKE
      // 1. get nonce
      const nonce = await getCharacteristic(
        characteristics,
        x3Profile.security.CHALLENGE
      )?.readAsync()
      console.log("🔐 4. nonce retrieved: ", nonce)

      // if (!nonce) throw "no nonce detected"

      // const fucker = new Fuck(key, passcodeLength)

      // 2. encrypt nonce
      // const nonceText = aes.utils.hex.fromBytes(nonce)
      // const nonceBytes = aes.utils.hex.toBytes(nonceText)
      // const payload = cipher.encrypt(nonceBytes)

      // // 3. send encrypted nonce back to bike
      // await getCharacteristic(
      //   characteristics,
      //   x3Profile.security.KEY_INDEX
      // )?.writeAsync(Buffer.from(fucker.getPasscode()), false)
      // console.log(`🏁 6. authentication flow ended`)

      // readable characteristics seem to hang indefinitely
      // non-readable characteristics resolve with an empty buffer right away

      process.exit(0)
    })
  } catch (e) {
    console.error(e)
  }
}

main()
