import Cookies from "js-cookie";
import { decryptData, secretKey } from "./Encrypt";

export const userData = () => {
  const authTokens = Cookies.get("dAuthTokens");
  let decryptedJSON;
  if (authTokens) {
    decryptedJSON = decryptData(authTokens, secretKey);
  } else {
    decryptedJSON = null;
  }

  return decryptedJSON;
};
