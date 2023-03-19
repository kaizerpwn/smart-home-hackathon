import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Rooms } from "./Interfaces/Rooms";

declare module "axios" {
  interface AxiosInstance {
    getRooms(): Promise<AxiosResponse<Rooms[]>>;
  }
}

export default class Axios {
  public static makeRequest: AxiosInstance = axios.create({
    baseURL: process.env.BACKEND_URL,
    withCredentials: true,
  });

  public static async getRooms(): Promise<Rooms[]> {
    const res = await Axios.makeRequest.getRooms();
    return res.data;
  }
}
