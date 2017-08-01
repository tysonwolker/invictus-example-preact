import { h } from 'preact';
import { PreactWidget } from 'invictus-preact';

import Clock from '../Components/Clock';

export default class ClockWidget extends PreactWidget {
  render(props) {
    return <Clock {...props} />;
  }
}
