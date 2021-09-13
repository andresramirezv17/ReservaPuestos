import { FloorFound } from '../../pages/MainMenu/context/models/Floors';
import cloneDeep from 'lodash/cloneDeep';

export const getSingle = (floor?: Partial<FloorFound>): FloorFound =>
  cloneDeep({
    idFloor: 1,
    idBuilding: 1,
    name: 'Piso 1',
    ...floor,
  });

export const getList = (): FloorFound[] => {
  return cloneDeep([getSingle()]);
};
