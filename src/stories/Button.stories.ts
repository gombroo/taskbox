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

  // COMPONENT PARAMETERS
  // parameters: {
  //   design: {
  //     type: 'figma',
  //     url: 'https://www.figma.com/file/gZE2IY38YNAAqfnLJfkg32/Design-System?node-id=194%3A1600',
  //   }
  // },
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

// STORY PARAMETERS
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gZE2IY38YNAAqfnLJfkg32/Design-System?node-id=342%3A1639',
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button Secondary',
};

Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gZE2IY38YNAAqfnLJfkg32/Design-System?node-id=342%3A1638',
  }
};


export const Superlarge = Template.bind({});
Superlarge.args = {
  size: 'superlarge',
  label: 'Button Super Large',
};

Superlarge.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gZE2IY38YNAAqfnLJfkg32/Design-System?node-id=459%3A1637',
  }
};


export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button Large',
};

Large.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gZE2IY38YNAAqfnLJfkg32/Design-System?node-id=342%3A1640',
  }
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button Medium',
};

Medium.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gZE2IY38YNAAqfnLJfkg32/Design-System?node-id=342%3A1660',
  }
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button Small',
};

Small.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gZE2IY38YNAAqfnLJfkg32/Design-System?node-id=342%3A1637',
  }
};