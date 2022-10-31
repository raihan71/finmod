import axios from "axios"
import { service } from "../../../config/services"
import { setAuthToken } from "../../../utils/authed";
export async function login(payload) {
  try {
    axios.post(service.login, payload)
          .then(response => {
            const token  =  response.data.token;
            localStorage.setItem("token", token);
            setAuthToken(token);
          })
          .catch((error) => {
            alert(error.response?.data?.message);
          });
  } catch (error) {
    return Promise.reject(error);
  }
}