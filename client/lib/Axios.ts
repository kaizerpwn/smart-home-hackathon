import axios from "axios"; 

export default class Axios {
    public static makeRequest = axios.create({
        baseURL: process.env.BACKEND_URL,
        withCredentials: true,
    }); 

    public async getRooms() {
        const res = await Axios.makeRequest.get('/analytics/rooms')
        return res.data;
    } 

    public async getDevices() {
        const res = await Axios.makeRequest.get('/analytics/devices')
        return res.data;
    } 

    public async getActiveDevices() {
        const res = await Axios.makeRequest.get('/analytics/activedevices')
        return res.data;
    } 
} 