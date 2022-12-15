import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, CardGrid, ContentCard} from '@vkontakte/vkui';
import {axiosGet} from "../shared/api/axios";
import {Menu} from "./Menu";

const URL = 'https://jsonplaceholder.typicode.com/photos?albumId=1'
const mockedMenuData = [
	{
		id: '1',
		title: "accusamus beatae ad facilis cum similique qui sunt",
		url: "https://via.placeholder.com/600/92c952",
		thumbnailUrl: "https://via.placeholder.com/150/92c952"
	},
	{
		id: '2',
		title: "reprehenderit est deserunt velit ipsam",
		url: "https://via.placeholder.com/600/771796",
		thumbnailUrl: "https://via.placeholder.com/150/771796"
	},
]

const Home = ({ id, fetchedUser }) => {
	const [menu, setMenu] = useState(null)

	const handleClick = () => {
		axiosGet(URL, (data) => setMenu(data.data))
	}

	return <Panel id={id}>
		<PanelHeader>Закажите еду вместе!</PanelHeader>
		{fetchedUser &&
			<Group header={<Header mode="secondary">Пользователь</Header>}>
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Cell>
			</Group>}

		<Group header={<Header mode="secondary">Совместный заказ еды в офис или коворкинг</Header>}>
			<Div>
				{menu && <CardGrid size="s">
					{
						menu.map(item => <ContentCard
							onClick={() => {console.log(item.id)}}
							src={item.url}
							subtitle={item.title}
							maxHeight={120}
							/>
						)
					}
				</CardGrid>}
				{!menu && <Button stretched size="l" mode="primary" onClick={handleClick}>
					Получить меню
				</Button>}
			</Div>
		</Group>
	</Panel>
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
