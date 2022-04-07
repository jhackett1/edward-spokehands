/**  universal vanmoof api key, from their app. not a secret */
export const apiKey = "fcb38d47-f14b-30cf-843b-26283f6a5819"
/**  undocumented vanmoof api endpoint, used by their app */
export const endpoint = "https://my.vanmoof.com/api/v8"
/** the bluetooth uuid emitted by s3/x3s */
export const sx3Uuid = "6acc5540-e631-4069-944d-b8ca7598ad50"
/** idk */
export const passcodeLength = 12

/** ble service and characteristic ids for the s3/x3 */
export const x3Profile = {
  security: {
    _SERVICE_UUID: "6acc5500-e631-4069-944d-b8ca7598ad50",
    CHALLENGE: "6acc5501-e631-4069-944d-b8ca7598ad50",
    KEY_INDEX: "6acc5502-e631-4069-944d-b8ca7598ad50",
    BACKUP_CODE: "6acc5503-e631-4069-944d-b8ca7598ad50",
    BIKE_MESSAGE: "6acc5505-e631-4069-944d-b8ca7598ad50",
  },
  defence: {
    _SERVICE_UUID: "6acc5520-e631-4069-944d-b8ca7598ad50",
    LOCK_STATE: "6acc5521-e631-4069-944d-b8ca7598ad50",
    UNLOCK_REQUEST: "6acc5522-e631-4069-944d-b8ca7598ad50",
    ALARM_STATE: "6acc5523-e631-4069-944d-b8ca7598ad50",
    ALARM_MODE: "6acc5524-e631-4069-944d-b8ca7598ad50",
  },
  movement: {
    _SERVICE_UUID: "6acc5530-e631-4069-944d-b8ca7598ad50",
    DISTANCE: "6acc5531-e631-4069-944d-b8ca7598ad50",
    SPEED: "6acc5532-e631-4069-944d-b8ca7598ad50",
    UNIT_SYSTEM: "6acc5533-e631-4069-944d-b8ca7598ad50",
    POWER_LEVEL: "6acc5534-e631-4069-944d-b8ca7598ad50",
    SPEED_LIMIT: "6acc5535-e631-4069-944d-b8ca7598ad50",
    E_SHIFTER_GEAR: "6acc5536-e631-4069-944d-b8ca7598ad50",
    E_SHIFTING_POINTS: "6acc5537-e631-4069-944d-b8ca7598ad50",
    E_SHIFTER_MODE: "6acc5538-e631-4069-944d-b8ca7598ad50",
  },
  info: {
    _SERVICE_UUID: "6acc5540-e631-4069-944d-b8ca7598ad50",
    MOTOR_BATTERY_LEVEL: "6acc5541-e631-4069-944d-b8ca7598ad50",
    MOTOR_BATTERY_STATE: "6acc5542-e631-4069-944d-b8ca7598ad50",
    MODULE_BATTERY_LEVEL: "6acc5543-e631-4069-944d-b8ca7598ad50",
    MODULE_BATTERY_STATE: "6acc5544-e631-4069-944d-b8ca7598ad50",
    BIKE_FIRMWARE_VERSION: "6acc554a-e631-4069-944d-b8ca7598ad50",
    BLE_CHIP_FIRMWARE_VERSION: "6acc554b-e631-4069-944d-b8ca7598ad50",
    CONTROLLER_FIRMWARE_VERSION: "6acc554c-e631-4069-944d-b8ca7598ad50",
    PCBA_HARDWARE_VERSION: "6acc554d-e631-4069-944d-b8ca7598ad50",
    GSM_FIRMWARE_VERSION: "6acc554e-e631-4069-944d-b8ca7598ad50",
    E_SHIFTER_FIRMWARE_VERSION: "6acc554f-e631-4069-944d-b8ca7598ad50",
    BATTERY_FIRMWARE_VERSION: "6acc5550-e631-4069-944d-b8ca7598ad50",
    _UNKNOWN: "6acc5551-e631-4069-944d-b8ca7598ad50", // possibly firmware version info
    FRAME_NUMBER: "6acc5552-e631-4069-944d-b8ca7598ad50",
  },
  state: {
    _SERVICE_UUID: "6acc5560-e631-4069-944d-b8ca7598ad50",
    MODULE_MODE: "6acc5561-e631-4069-944d-b8ca7598ad50",
    MODULE_STATE: "6acc5562-e631-4069-944d-b8ca7598ad50",
    ERRORS: "6acc5563-e631-4069-944d-b8ca7598ad50",
    WHEEL_SIZE: "6acc5564-e631-4069-944d-b8ca7598ad50",
    CLOCK: "6acc5567-e631-4069-944d-b8ca7598ad50",
  },
  sound: {
    _SERVICE_UUID: "6acc5570-e631-4069-944d-b8ca7598ad50",
    PLAY_SOUND: "6acc5571-e631-4069-944d-b8ca7598ad50",
    SOUND_VOLUME: "6acc5572-e631-4069-944d-b8ca7598ad50",
    BELL_SOUND: "6acc5574-e631-4069-944d-b8ca7598ad50",
  },
  lights: {
    _SERVICE_UUID: "6acc5580-e631-4069-944d-b8ca7598ad50",
    LIGHT_MODE: "6acc5581-e631-4069-944d-b8ca7598ad50",
    SENSOR: "6acc5584-e631-4069-944d-b8ca7598ad50",
  },
}
