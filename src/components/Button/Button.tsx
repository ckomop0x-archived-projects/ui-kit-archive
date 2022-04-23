import styled from '@emotion/styled';
import React, { FC } from 'react';
import {
  Button as ThemeUiButton,
  ButtonProps as ThemeUiButtonProps,
  useThemeUI,
} from 'theme-ui';

export interface ButtonProps extends ThemeUiButtonProps {
  variant?: string;
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  sx,
  onClick,
  children,
  ...props
}) => {
  const { theme } = useThemeUI();

  return (
    <ButtonWrapper variant={variant} onClick={onClick} {...props} sx={sx}>
      {children}
    </ButtonWrapper>
  );
};

export const ButtonWrapper = styled(ThemeUiButton)`
  transition: box-shadow 0.3s ease;
  box-shadow: 0 2px 3px #0000001c;
  border: 0;
  padding: 10px 20px;
`;

export default Button;
