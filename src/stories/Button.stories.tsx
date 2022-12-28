import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';

import { Button, ButtonProps } from '../components';

import '../assets/styles/jjomponent.scss'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme:'primary',
  disabled: false,
  children: 'Button'
}

const TemplateDash: Story<ButtonProps> = (args) => {
  return (
      <Button {...args} />
  );
};

export const Dash = TemplateDash.bind({});
Dash.args = {
  disabled: false,
  dash: true,
  children: 'Button',
};

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
