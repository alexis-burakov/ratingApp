import React from 'react';
import connect from '@vkontakte/vkui-connect';
import {Avatar, ModalCard, ModalRoot, View, ModalPage, ModalPageHeader, HeaderButton, List, Cell, InfoRow} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './css/app.css';

import Home from './panels/Home';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
		};
	}

	componentDidMount() {
		// connect.subscribe((e) => {
		// 	switch (e.detail.type) {
		// 		case 'VKWebAppGetUserInfoResult':
		// 			this.setState({ fetchedUser: e.detail.data });
		// 			break;
		// 		default:
		// 			console.log(e.detail.type);
		// 	}
		// });
		// connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} />
			</View>
		);
	}
}

export default App;
