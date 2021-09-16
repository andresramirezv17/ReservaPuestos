import axios from 'axios';
import { UserWorkspace } from '../context/models/UserWorkspace';
import { WorkspacesSearched } from '../context/models/WorkspacesSearched';
import { Floors } from '../context/models/Floors';
import { Sections } from '../context/models/Sections';
import { UserReserve } from '../context/models/UserReserve';

export const getReserves = (id?: number): Promise<UserWorkspace[]> =>
  axios
    .get<UserWorkspace[]>('userreserves', { params: { id } })
    .then((res) => res.data);

export const getSearchedWorkplaces = (
  floor?: string,
  section?: string,
): Promise<WorkspacesSearched[]> =>
  axios
    .get<WorkspacesSearched[]>('workspaces', { params: { floor, section } })
    .then((res) => res.data);

export const getFloors = (idBuilding?: number): Promise<Floors> =>
  axios
    .get<Floors>('floors', { params: { idBuilding } })
    .then((res) => res.data);

export const getSections = (idFloor?: number): Promise<Sections> =>
  axios
    .get<Sections>('sections', { params: { idFloor } })
    .then((res) => res.data);

export const checkinReserve = (
  id?: number,
  item?: UserWorkspace,
  isChekin?: boolean,
) =>
  axios
    .put(`http://localhost:3001/userreserves/${id}`, { ...item, isChekin })
    .then((response) => response.status)
    .catch((err) => 'Error');

export const endReserve = (id?: number) =>
  axios
    .delete(`http://localhost:3001/userreserves/${id}`)
    .then((response) => response.status)
    .catch((err) => err);

export const doReserve = (item?: UserReserve) =>
  axios.post('userreserves', { ...item }).then((response) => response.status);

export const updateWorkSpace = (
  id?: number,
  item?: WorkspacesSearched,
  available?: boolean,
) =>
  axios
    .put(`http://localhost:3001/workspaces/${id}`, { ...item, available })
    .then((response) => response.status)
    .catch((err) => 'Error');
