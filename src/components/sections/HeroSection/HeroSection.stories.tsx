import { Meta, Story } from '@storybook/react';
import React from 'react';

import HeroSection, { HeroSectionProps } from './HeroSection';

export default {
  title: 'components/HeroSection',
  component: HeroSection,
  args: {
    title: 'Добро пожаловать в мой персональный блог',
    subtitle:
      'Здесь живут мои стихи, песни, путешествия, заметки и фотографий.',
    backgroundImage:
      'https://ik.imagekit.io/ckomop0x/ckomop0x-me/main-page/20180901-DSC_0568-Edit-3_qcFKvrDzNYg.jpg',
  },
} as Meta;

const Template: Story<HeroSectionProps> = args => <HeroSection {...args} />;

export const Default = Template.bind({});
