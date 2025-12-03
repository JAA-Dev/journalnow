import axios from "axios";
import type { Trade } from "../types/Trade";

const App_URL = "http://127.0.0.1:8000/api";

export const getTrades = () => axios.get<Trade[]>(App_URL + "/trade");
export const createTrade = (data: Omit<Trade, 'id'>) => axios.post<Trade>(App_URL + "/trade", data);