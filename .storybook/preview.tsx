import React, { Suspense } from 'react';
import { ThemeProvider } from 'theme-ui';
import { DecoratorFn, Parameters } from '@storybook/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import './assets/bootstrap.min.css';
import {ckomop0xTheme} from "../src/themes/ckomop0xTheme";

const themes = {
  Ckomop0x: ckomop0xTheme,
  Webtime: {}
};

const getTheme = (themeName: keyof typeof themes) => {
  return themes[themeName];
};

export const globalTypes = {
  theme: {
    name: 'Ckomop0x Theme',
    description: 'Theme for Ckomop0x.me components',
    defaultValue: 'Ckomop0x',
    toolbar: {
      icon: 'bookmark',
      // array of plain string values or MenuItem shape (see below)
      items: [
        { value: 'Ckomop0x', title: 'Ckomop0x' },
        { value: 'Webtime', title: 'Webtime' }
      ]
    }
  }
};

const withProviders: DecoratorFn = (Story, context) => {
  const theme = getTheme(context.globals.theme);
  return (
    <Suspense fallback="Loading...">
      <ThemeProvider theme={theme}>
        <Story {...context} />
      </ThemeProvider>
    </Suspense>
  );
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Typography',
        'Layout',
        'Navigation',
        'Strapi Components'
      ]
    }
  },
  backgrounds: {
    values: [
      {
        name: 'light',
        value: '#ffffff'
      },
      {
        name: 'grey',
        value: '#f4f4f4'
      },
      {
        name: 'dark',
        value: '#333333'
      }
    ]
  },
  viewport: {
    viewports: {
      iPhone5SE: {
        name: 'iPhone 5/SE',
        styles: {
          width: '320px',
          height: '568px'
        }
      },
      iPhone678: {
        name: 'iPhone 6/7/8',
        styles: {
          width: '375px',
          height: '667px'
        }
      },
      iPad: {
        name: 'iPad',
        styles: {
          width: '768px',
          height: '1024px'
        }
      },
      iMac: {
        name: 'iMac',
        styles: {
          width: '1280px',
          height: '1024px'
        }
      },
      WideScreen: {
        name: '24-inch WideScreen',
        styles: {
          width: '1920px',
          height: '1200px'
        }
      }
    }
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  withProviders
];
