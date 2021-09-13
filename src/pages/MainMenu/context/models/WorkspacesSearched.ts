export interface TotalWorkspaces {
  id?: string;
  idBuilding?: number;
  idFloor?: number;
  idSection?: number;
  available?: boolean;
  initialHour: string;
  endHour: string;
}

export interface WorkspacesSearched {
  id?: number;
  workplaces?: TotalWorkspaces[];
}
