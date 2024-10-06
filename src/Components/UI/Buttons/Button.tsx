import { IButton } from '../../../types';
import * as React from 'react';

interface Props {
  button: IButton;
  onClick: React.MouseEventHandler;
}

const Button: React.FC<Props> = ({button, onClick}) => {
  return (
    <button type="button" className={`btn btn-${button.type}`} onClick={onClick}>{button.label}</button>
  );
};

export default Button;
