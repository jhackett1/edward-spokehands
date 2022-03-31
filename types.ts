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
