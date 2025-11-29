export interface Trade {
  id: number;
  symbol: string;       // ticker
  tradeType: string;    // BUY / SELL / LONG / SHORT
  position: string;     // position size or type
  entry: number;        // entry price
  riskReward: string;   // e.g. "1:2"
  reward: number;       // kung magkano panalo or talo
  reasonEntry: string;  // bakit pumasok
  learning: string;     // ano natutunan
  stopLoss: number;    // optional
  takeProfit: number;  // optional
  result: string;       // WIN / LOSS / BE
}
