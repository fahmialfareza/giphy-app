import { GiphyData } from "../models/giphy";

export interface GiphyState {
  giphy: GiphyData[];
  loading: boolean;
}
