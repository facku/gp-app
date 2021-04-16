import React from 'react';
import VideoCard from './VideoCard';

const Listado = ({ videos }) => {
	return (
		<div className="flex justify-center z-10">
			<div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-6 overflow-x-hidden text-center">
				{videos ? (
					videos.map((video, index) => (
						<VideoCard
							key={video.id}
							{...{
								index,
								...video
							}}
						/>
					))
				) : (
					<div>
						No se pudieron cargar los
						videos
					</div>
				)}
			</div>
		</div>
	);
};

export default Listado;
