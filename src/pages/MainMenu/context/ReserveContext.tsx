import React, { createContext, useEffect, useState } from 'react';
import moment from 'moment';
import { SearchParameters } from './models/SearchParameters';
import { WorkspacesSearched } from './models/WorkspacesSearched';
import { Floors } from './models/Floors';
import { Sections } from './models/Sections';
import * as ReserveServices from '../services/WorkspaceServices';

export interface WorkSpaceParameter {
  workspacesSearched?: WorkspacesSearched;
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
    initialState.workspacesSearched || { workplaces: [] },
  );

  const [floors, setfloors] = useState(
    initialState.floors || { floorsResult: [] },
  );
  const [sections, setsections] = useState(
    initialState.sections || { sectionsResult: [] },
  );

  const [parameters, setparameters] = useState('');
  const [building, setbuilding] = useState('Torre Central 2');
  const [floor, setfloor] = useState('Piso 1');
  const [section, setsection] = useState('Seccion A');
  const [date, setdate] = useState(
    moment(new Date()).add(1, 'days').format('DD/MM/YYYY'),
  );

  const searchWorkplaces = () => {
    ReserveServices.getSearchedWorkplaces().then((resultSearch) => {
      setworkplaces(resultSearch);
    });
  };
  const obtainFloors = () => {
    ReserveServices.getFloors().then((resultFloor) => setfloors(resultFloor));
  };

  const obtainSections = (id?: number) => {
    ReserveServices.getSections().then((resultSections) => {
      setsections(resultSections);
    });
  };

  const changeParameter = (parameter: string, value: string) => {
    if (parameter === 'piso') {
      setfloor(value);
    }
    if (parameter === 'section') {
      setsection(value);
    }
    if (parameter === 'date') {
      setdate(value);
    }
  };

  return {
    data: { workplaces, floors, sections, building, floor, section, date },
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
