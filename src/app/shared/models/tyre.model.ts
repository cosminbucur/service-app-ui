export interface Tyre {
  id?: number,
  size: string,
  width: number,
  height: number,
  diameterType: number,
  rimType: string,
  tyreType: string,
  brand: string,
  wearLevel: string,
  season: string
}

export interface TyreBrand {
  id: number;
  name: string;
}
