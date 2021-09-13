import { SectionFound } from '../../pages/MainMenu/context/models/Sections';
import cloneDeep from 'lodash/cloneDeep';

export const getSingle = (section?: Partial<SectionFound>): SectionFound =>
  cloneDeep({
    idSection: 1,
    idBuilding: 1,
    name: 'Piso 1',
    ...section,
  });

export const getList = (): SectionFound[] => {
  return cloneDeep([getSingle()]);
};
