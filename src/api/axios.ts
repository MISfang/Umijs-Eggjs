import axios, { AxiosRequestConfig } from 'axios';
import CONST from './constData';

export default function Faxios(config: AxiosRequestConfig) {
  return axios.create({
    baseURL: CONST.BASEURL,
    timeout: CONST.TIMEOUT,
  })(config);
}
