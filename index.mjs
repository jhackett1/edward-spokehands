import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const apiKey = "fcb38d47-f14b-30cf-843b-26283f6a5819"; // universal vanmoof api key, from their app
const endpoint = "https://my.vanmoof.com/api/v8";
const { USERNAME, PASSWORD } = process.env;

const res = await fetch(`${endpoint}/authenticate`, {
  method: "POST",
  headers: {
    Authorization: `Basic ${btoa(USERNAME + ":" + PASSWORD)}`,
    "Api-Key": apiKey,
  },
});

const { token, refreshToken } = await res.json();

const res2 = await fetch(`${endpoint}/getCustomerData?includeBikeDetails`, {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
    "Api-Key": apiKey,
  },
});

const data = await res2.json();

console.log(data);
