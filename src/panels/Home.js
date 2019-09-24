import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Group, Select, Avatar, PanelHeader, Div } from '@vkontakte/vkui';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeModal: 'select-period',
			period: 'week'
		};
	};
	render() {
	    return (
			<Panel id={this.props.id} >
				<PanelHeader>Рейтинг группы</PanelHeader>
				<div className="panel-body">
					<Div>Test</Div>
				</div>
			</Panel>
		)
	}
}

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
