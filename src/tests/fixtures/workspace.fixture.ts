import { UserReserve } from '../../pages/MainMenu/context/models/UserReserve';
import cloneDeep from 'lodash/cloneDeep';

export const getSingle = (workplace?: Partial<UserReserve>): UserReserve =>
  cloneDeep({
    building: 'Torre Central',
    date: '10/09/2021',
    floor: 'Piso 1',
    section: 'Sección A',
    workplace: 'P1A1',
    idReserve: 1,
    initialHour: '7:00',
    endHour: '15:00',
    ...workplace,
  });

export const getList = (
  ...workplace: Partial<UserReserve>[]
): UserReserve[] => {
  if (workplace.length === 0) {
    return cloneDeep([getSingle()]);
  }
  return workplace.map((partial) => getSingle(partial));
};
