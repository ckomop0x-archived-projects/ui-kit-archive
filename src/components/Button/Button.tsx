import { Button as UIButton, ButtonProps as UIButtonProps} from '@theme-ui/components'
import { FC, PropsWithChildren } from 'react';

export interface ButtonProps extends UIButtonProps{}

const Button: FC<PropsWithChildren<ButtonProps>> = ({children, ...props}) => {
  return <UIButton {...props}>{children}</UIButton>;
};
export default Button;
