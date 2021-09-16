import React, { createContext, useState } from 'react';
import moment from 'moment';
import { WorkspacesSearched } from './models/WorkspacesSearched';
import { Floors } from './models/Floors';
import { Sections } from './models/Sections';
import * as ReserveServices from '../services/WorkspaceServices';

export interface WorkSpaceParameter {
  workspacesSearched?: WorkspacesSearched[];
  floors?: Floors;
  sections?: Sections;
}

export interface propsSection {
  idFloor: number;
  idBuilding: number;
  name: string;
}

export const useStateContainer = (initialState: WorkSpaceParameter) => {
  const [workplaces, setworkplaces] = useState(
    initialState.workspacesSearched || [],
  );

  const [floors, setfloors] = useState(
    initialState.floors || { floorsResult: [] },
  );
  const [sections, setsections] = useState(
    initialState.sections || { sectionsResult: [] },
  );
  const [day, setday] = useState('');
  const [building] = useState('Torre Central 2');
  const [floor, setfloor] = useState('Piso 1');
  const [section, setsection] = useState('Sección A');
  const [fecha, setfecha] = useState(
    moment(new Date()).add(1, 'days').format('DD/MM/YYYY'),
  );
  const [initHour, setinitHour] = useState('7:00');
  const [endHour, setendHour] = useState('19:00');

  const searchWorkplaces = () => {
    ReserveServices.getSearchedWorkplaces(floor, section).then(
      (resultSearch) => {
        setworkplaces(resultSearch);
      },
    );
  };
  const obtainSections = () => {
    ReserveServices.getSections().then((resultSections) =>
      setsections(resultSections),
    );
  };

  const obtainFloors = () => {
    ReserveServices.getFloors().then((resultFloor) => {
      setfloors(resultFloor);
      obtainSections();
    });
  };

  const changeParameter = (parameter: string, value: string) => {
    if (parameter === 'piso') {
      setfloor(value);
    }
    if (parameter === 'day') {
      setday(value);
    }
    if (parameter === 'section') {
      setsection(value);
    }
    if (parameter === 'date') {
      setfecha(value);
    }
    if (parameter === 'inithour') {
      setinitHour(value);
    }
    if (parameter === 'endhour') {
      setendHour(value);
    }
  };

  return {
    data: {
      workplaces,
      floors,
      sections,
      building,
      floor,
      section,
      fecha,
      initHour,
      endHour,
      day,
    },
    mutations: {
      searchWorkplaces,
      obtainFloors,
      obtainSections,
      changeParameter,
    },
  };
};

export const ReserveContext = createContext<
  ReturnType<typeof useStateContainer>
>({} as never);

export interface SearchWorkspaceProvider {
  initialState?: WorkSpaceParameter;
}

export const ReserveProvider: React.FC<SearchWorkspaceProvider> = ({
  children,
  initialState = {},
}) => {
  const contextValue = useStateContainer(initialState);
  return (
    <ReserveContext.Provider value={contextValue}>
      {children}
    </ReserveContext.Provider>
  );
};
