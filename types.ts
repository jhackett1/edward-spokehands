import { Peripheral } from "@abandonware/noble"
import { ModeOfOperation } from "aes-js"

export interface AuthenticationData {
  token: string
  refreshToken: string
}

export interface CustomerData {
  data: {
    bikeDetails: {
      key: {
        encryptionKey: string
        passcode: string
        userKeyId: string
      }
    }[]
  }
}

export type Bike = Peripheral

export type Cipher = ModeOfOperation.ModeOfOperationECB
