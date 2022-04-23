import React, { FC } from 'react';

import { HeroSectionWrapper, Title, SubTitle, HeroSectionText } from './styles';

import Button from 'components/Button';

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  nav?: JSX.Element;
}

const HeroSection: FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  nav,
}): JSX.Element => (
  <HeroSectionWrapper backgroundImage={backgroundImage}>
    <HeroSectionText>
      {nav}
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Button>Button</Button>
    </HeroSectionText>
  </HeroSectionWrapper>
);

export default HeroSection;
