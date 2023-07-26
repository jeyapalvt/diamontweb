import { AES, enc } from "crypto-js";

// Encryption function
const encryptData = (data, secretKey) => {
  const encryptedData = AES.encrypt(JSON.stringify(data), secretKey).toString();
  return encryptedData;
};

// Decryption function
const decryptData = (encryptedData, secretKey) => {
  const decryptedData = AES.decrypt(encryptedData, secretKey).toString(
    enc.Utf8
  );
  return JSON.parse(decryptedData);
};

const secretKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4Mzk2OTc1MSwiaWF0IjoxNjgzOTY5NzUxfQ.2BLrcqQpV8ps-hTOg8us7UbPM9_sI8j2uPgYRKeCAQIRelatedP";

export { encryptData, decryptData, secretKey };
