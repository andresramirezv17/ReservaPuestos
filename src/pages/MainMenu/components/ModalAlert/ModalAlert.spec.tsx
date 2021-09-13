import React from 'react';
import { ModalAlert, ModalProps } from '.';
import { render, fireEvent } from '@testing-library/react';

describe('ModalAlert test', () => {
  let props: ModalProps;
  beforeEach(() => {
    props = {
      showModal: true,
      Title: 'Información',
      body: 'Alert example',
      btnCancel: 'Cancelar',
      btnContinue: 'Continuar',
      showAlert: jest.fn(),
    };
  });

  it('should match with snapshot', () => {
    const { container } = render(<ModalAlert {...props} />);
    expect(container).toMatchSnapshot();
  });
  it('Should call showAlert when button is clicked', () => {
    const { getByTestId } = render(<ModalAlert {...props} />);
    const button = getByTestId('cancel');
    fireEvent.click(button);
    expect(props.showAlert).toHaveBeenCalled();
  });
});
