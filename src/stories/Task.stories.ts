import { Meta, Story } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { TaskComponent } from './task.component';

import { withDesign } from 'storybook-addon-designs';

export default {
  component: TaskComponent,
  title: 'Task',
  excludeStories: /.*Data$/,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gZE2IY38YNAAqfnLJfkg32/Design-System?node-id=197%3A1613',
    }
  },
} as Meta;

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const Template: Story = args => ({
  props: {
    ...args,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args['task'],
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args['task'],
    state: 'TASK_ARCHIVED',
  },
};