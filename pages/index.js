import React, { useState, useEffect, Fragment, useContext } from 'react';
import LoadingScreen from '../components/shared/LoadingScreen';
import Menu from '../components/shared/Menu';
import Listado from '../components/videos/Listado';
import { URL } from '../config';
import { LoadingContext } from '../context/loading';

const Videos = () => {
	const loadingContext = useContext(LoadingContext);

	const [ resultados, setResultados ] = useState([]);

	const fetchVideos = async () => {
		try {
			const request = await fetch(URL);
			const json = await request.json();

			return json;
		} catch (error) {
			console.warn(error);
		}
	};

	useEffect(async () => {
		const data = await fetchVideos();

		setResultados(
			data.items.map((item) => ({
				id: item.id.videoId,
				...item.snippet
			}))
		);

		loadingContext.dispatch({ type: 'switch' });
	}, []);

	return (
		<Fragment>
			<LoadingScreen show={loadingContext.state.loading} />

			<div className="container">
				<Menu />

				<Listado videos={resultados} />
			</div>
		</Fragment>
	);
};

export default Videos;
