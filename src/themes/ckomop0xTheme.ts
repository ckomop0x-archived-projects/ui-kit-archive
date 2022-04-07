import { bootstrap } from '@theme-ui/presets';
import { Theme } from 'theme-ui';

export const ckomop0xTheme: Theme = {
  ...bootstrap,
  styles: {
    ...bootstrap.styles,
  },
  colors: {
    primary: '#0063cc',
  },
  buttons: {
    primary: {
      borderRadius: 0,
    },
  },
};
