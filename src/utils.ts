/** convert ble messages into readable utf-8. harder than it looks apparently */
export const hexToText = (hex?: Buffer): string | void => {
  const result: string[] = []
  hex?.forEach(h => result.push(String.fromCharCode(h)))
  return result.join("")
}
