# 🚲 edward spokehands

**WORK IN PROGRESS: doesn't work just yet**

funky node.js app for communicating with a [vanmoof](https://www.vanmoof.com) bike by bluetooth.

it works by:

1. using your vanmoof username and password to get an authentication token from the cloud
2. using that token to get the cloud-held encryption key for your bike
3. connects to your bike over bluetooth low energy
4. authenticates your bluetooth device with the bike using a nonce challenge
5. reading info and issuing commands securely, using the encryption key to encrype some payloads

this is very similar to what the vanmoof and [moofer](https://moofer.ademagroup.com/) app does, but it's nice to have custom control over the ui for talking to the bike.

at the moment, only the x3 is known to be supported (because it's what i have).

## get started

you need a device with node.js installed and a bluetooth adapter compatible with [noble](https://www.npmjs.com/package/@abandonware/noble).

first, set a username and password in `.env`, then:

```
npm i
npm start
```
