import axios from 'axios';
import { UserWorkspace } from '../context/models/UserWorkspace';
import { WorkspacesSearched } from '../context/models/WorkspacesSearched';
import { Floors } from '../context/models/Floors';
import { Sections } from '../context/models/Sections';

export const getReserves = (id?: number): Promise<UserWorkspace> =>
  axios
    .get<UserWorkspace>('userreserves', { params: { id } })
    .then((res) => res.data);

export const getSearchedWorkplaces = (
  idFloor?: number,
): Promise<WorkspacesSearched> =>
  axios.get<WorkspacesSearched>('workspaces').then((res) => res.data);

export const getFloors = (idBuilding?: number): Promise<Floors> =>
  axios
    .get<Floors>('floors', { params: { idBuilding } })
    .then((res) => res.data)
    .catch((err) => err);

export const getSections = (idFloor?: number): Promise<Sections> =>
  axios
    .get<Sections>('sections', { params: { idFloor } })
    .then((res) => res.data)
    .catch((err) => err);
