import { IButton } from '../../../types';
import * as React from 'react';
import Button from './Button.tsx';

interface Props {
  buttons: IButton[];
  onClick: (type: string) => void;
}

const Buttons: React.FC<Props> = ({buttons, onClick}) => {
  return (
    <>
      {buttons.map((button, index) => {
        return (
          <Button key={index} button={button} onClick={() => onClick(button.type)}/>
        )
      })}
    </>
  );
};

export default Buttons;