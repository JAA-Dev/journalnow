import axios from "axios";
import type { Trade } from "../types/Trade";

const App_URL = "http://127.0.0.1:8000/api";

export const getTrades = () => axios.get<Trade[]>(App_URL + "/trade");
export const createTrade = (data: Omit<Trade, 'id'>) => axios.post<Trade>(App_URL + "/trade", data);
export const getTrade = (id: number | string) => axios.get<Trade>(App_URL + `/trade/${id}`);
// export const updateTrade = (id: number | string, data: Omit<Trade, 'id'>) => axios.put<Trade>(App_URL + `/trade/edit/${id}`, data);
export const updateTrade = (id: number | string, data: Omit<Trade, 'id'>) =>
  axios.put<Trade>(App_URL + `/trade/${id}`, data);

export const deleteTrade = (id: number | string) => axios.delete(App_URL + `/trade/${id}`);