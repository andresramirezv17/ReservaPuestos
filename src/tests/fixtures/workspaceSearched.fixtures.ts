import { TotalWorkspaces } from '../../pages/MainMenu/context/models/WorkspacesSearched';
import cloneDeep from 'lodash/cloneDeep';
import { SectionFound } from '../../pages/MainMenu/context/models/Sections';

export const getSingle = (
  workplace?: Partial<TotalWorkspaces>,
): TotalWorkspaces =>
  cloneDeep({
    id: 'P1A1',
    idBuilding: 1,
    idFloor: 1,
    idSection: 1,
    available: true,
    initialHour: '7:00',
    endHour: '5:00',
    ...workplace,
  });

export const getList = (): TotalWorkspaces[] => {
  return cloneDeep([getSingle()]);
};
