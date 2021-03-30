import { Item } from "./Item";

export interface Order{
  ID: number;
  Items: Item[];
  Price: number;
  Date: string;
  State: boolean;
}