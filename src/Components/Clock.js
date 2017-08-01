import { h, Component } from 'preact';

export default class Clock extends Component {
	constructor() {
		super();
		this.state = {
			time: Date.now()
		};
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({ time: Date.now() });
		}, 1000);
	}

	render(props, state) {
    const { id } = props;
		let time = new Date(state.time).toLocaleTimeString();
		return (
      <div>
        <div>{ `id: ${id} `}</div>
        <span>{ time }</span>
      </div>
    );
	}
}
