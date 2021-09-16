export interface SectionFound {
  idSection: number;
  idFloor: number;
  name: string;
}

export interface Sections {
  id?: number;
  sectionsResult?: SectionFound[];
}
