import { configure } from '@storybook/react';

function loadStories() {
  require('../src/app/stories');
}

configure(loadStories, module);
