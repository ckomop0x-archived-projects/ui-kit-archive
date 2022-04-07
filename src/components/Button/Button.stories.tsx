import {Meta, Story} from '@storybook/react';
import React from 'react';

import Button, {ButtonProps} from './Button';

export default {
    title: 'components/Button',
    component: Button,
    args: {
        children: 'All posts'
    }
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});

