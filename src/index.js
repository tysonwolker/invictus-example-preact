import Bootstrapper from 'invictus-core';
import ClockWidget from './Widgets/Clock';

const { register, bootstrap } = Bootstrapper;

register('Clock', ClockWidget);

// Export to window object so that its accessible on page
window.bootstrap = bootstrap;

// Debugging in console
require('preact/devtools');
