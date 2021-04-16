import Bounce from 'react-reveal/Bounce';
import { LoadingContext } from '../../context/loading';
import { useContext } from 'react';

const VideoCard = (props) => {
	const loadingContext = useContext(LoadingContext);
	const flipDirection = props.index % 2 ? { left: true } : { right: true };

	return (
		<Bounce {...flipDirection} when={loadingContext.state.loadingContext}>
			<div className="relative border-gray-800 max-w-md bg-black hover:border-pink-500 cursor-pointer border-4">
				<a href={`https://www.youtube.com/watch?v=${props.id}`} target="blank">
					<div className="py-2 pl-4 text-white text-2xl">{props.title}</div>

					<figure className="bottom-0">
						<img src={props.thumbnails.high.url} className="w-full pb-16" />
						<div className="absolute bottom-0 px-4 pt-8 bg-pink-400 h-32 bg-opacity-60">
							{props.description}
						</div>
					</figure>
				</a>
			</div>
		</Bounce>
	);
};

export default VideoCard;
