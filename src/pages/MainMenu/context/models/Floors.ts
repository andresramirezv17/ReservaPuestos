export interface FloorFound {
  idFloor: number;
  idBuilding: number;
  name: string;
}

export interface Floors {
  id?: number;
  floorsResult?: FloorFound[];
}
