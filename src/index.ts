import dotenv from "dotenv"
import noble from "@abandonware/noble"
import { getEncryptionKey } from "./web"
import { sx3Uuid } from "./config"
import fs from "fs"

dotenv.config()

const main = async () => {
  // const key = await getEncryptionKey()
  // cipher(key).encrypt()

  noble.on("stateChange", async state => {
    if (state === "poweredOn") await noble.startScanningAsync([sx3Uuid])
  })

  noble.on("discover", async peripheral => {
    await peripheral.connectAsync()

    const { characteristics } =
      await peripheral.discoverAllServicesAndCharacteristicsAsync()

    fs.writeFileSync("./ble-data-peripheral.json", peripheral.toString())
    fs.writeFileSync(
      "./ble-data-characteristics.json",
      `[${characteristics.toString()}]`
    )
  })
}

main()
