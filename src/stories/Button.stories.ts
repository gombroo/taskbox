// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';
import { withDesign } from 'storybook-addon-designs';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  decorators: [withDesign],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gZE2IY38YNAAqfnLJfkg32/Design-System?node-id=197%3A1613',
    }
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button Secondary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button Very Large',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button Medium',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button Small',
};