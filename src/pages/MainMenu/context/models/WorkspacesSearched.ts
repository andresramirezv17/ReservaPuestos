export interface TotalWorkspaces {
  id?: string;
  idBuilding?: number;
  idFloor?: number;
  idSection?: number;
  available?: boolean;
  length?: number;
  initialHour: string;
  endHour: string;
}

export interface WorkspacesSearched {
  id?: string;
  workplaces?: TotalWorkspaces[];
}
