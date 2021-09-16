import React from 'react';
import { ReserveCardProps, CardWorkSpaces } from '.';
import { render, fireEvent } from '@testing-library/react';

describe('CardWorkspace user test', () => {
  let props: ReserveCardProps;
  beforeEach(() => {
    props = {
      reserve: {
        building: 'Torre Central',
        date: '10/09/2021',
        floor: 'Piso 1',
        section: 'Sección A',
        workplace: 'P1A1',
        id: 1,
        isChekin: false,
        initialHour: '7:00',
        endHour: '15:00',
      },
      showModal: jest.fn(),
    };
  });

  it('it should match smnpashot', () => {
    const { container } = render(<CardWorkSpaces {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should call showModal when button is clicked', async () => {
    const { getByText } = render(<CardWorkSpaces {...props} />);
    const button = getByText('Realizar Check-in');
    fireEvent.click(button);
    expect(props.showModal).toHaveBeenCalled();
  });

  it('should call showModal when button Finalizar Reserva is clicked', async () => {
    const { getByText } = render(<CardWorkSpaces {...props} />);
    const button = getByText('Finalizar Reserva');
    fireEvent.click(button);
    expect(props.showModal).toHaveBeenCalled();
  });
});
