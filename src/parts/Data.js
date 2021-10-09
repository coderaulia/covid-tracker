import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

export default function Data({ dataCovid }) {
	let [date, setDate] = useState(new Date());

	useEffect(() => {
		let timer = setInterval(() => setDate(new Date()), 1000);

		return function cleanup() {
			clearInterval(timer);
		};
	});
	return (
		<section>
			<Fade bottom>
				<div className='flex container mx-auto mt-8 items-center justify-center'>
					<div className='space-y-4'>
						<h1 className='text-3xl font-black block'>
							Data Covid Indonesia
						</h1>
						<h2 className='text-lg font-bold block'>
							Per Tanggal: {date.toLocaleDateString()}
						</h2>
					</div>
				</div>
				{dataCovid.map((data) => (
					<div className='mt-10 bg-white container items-center justify-center mx-auto flex overflow-hidden rounded-lg shadow-xl py-5 flex-wrap sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2'>
						<Fade bottom delay={100}>
							<div className='text-yellow-700 my-2 px-2 overflow-hidden w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
								<h3 className='mb-2 text-lg font-bold'>
									Kasus Positif
								</h3>
								<h4>{data.positif}</h4>
							</div>
						</Fade>
						<Fade bottom delay={300}>
							<div className='text-green-700 my-2 px-2 overflow-hidden w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
								<h3 className='mb-2 text-lg font-bold'>Sembuh</h3>
								<h4>{data.sembuh}</h4>
							</div>
						</Fade>
						<Fade bottom delay={500}>
							<div className='text-red-700 my-2 px-2 overflow-hidden w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
								<h3 className='mb-2 text-lg font-bold'>
									Meninggal Dunia
								</h3>
								<h4>{data.meninggal}</h4>
							</div>
						</Fade>
					</div>
				))}
				<div className='flex container mx-auto mt-8 items-center justify-center'>
					<a href='https://kawalcorona.com/api/'>
						Data diperoleh dari KawalCorona.com
					</a>
				</div>
			</Fade>
		</section>
	);
}
