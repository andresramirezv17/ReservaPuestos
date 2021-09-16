import { UserReserve } from './UserReserve';

export interface UserWorkspace {
  id: number;
  building: string;
  floor: string;
  section: string;
  date: string;
  initialHour: string;
  workplace: string;
  endHour: string;
  isChekin: boolean;
  idWorkSpace?: number;
}
