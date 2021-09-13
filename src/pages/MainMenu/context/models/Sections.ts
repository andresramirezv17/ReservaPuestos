export interface SectionFound {
  idSection: number;
  idBuilding: number;
  name: string;
}

export interface Sections {
  id?: number;
  sectionsResult?: SectionFound[];
}
