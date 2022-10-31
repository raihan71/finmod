import axios from "axios"
import { service } from "../../../config/services"
import { setAuthToken } from "../../../utils/authed";
export async function login(payload) {
  try {
    return axios.post(service.login, payload)
          .then(response => response?.data)
          .then((resp) => {
            const data = resp?.data;
            const { token, user } = data;
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("user", JSON.stringify(user));
            setAuthToken(token);
            return resp;
          })
          .catch((error) => {
            return error;
          });
  } catch (error) {
    return Promise.reject(error);
  }
}