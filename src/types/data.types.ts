export interface Stamp {
  id: number;
  year: number;
  info: string;
}

export interface TimeStamp {
  id: number;
  startDate: number;
  endDate: number;
  theme: string | null;
  stamps: Stamp[];
}