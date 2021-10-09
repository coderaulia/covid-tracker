import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

export default function Data() {
	let [date, setDate] = useState(new Date());

	useEffect(() => {
		let timer = setInterval(() => setDate(new Date()), 1000);

		return function cleanup() {
			clearInterval(timer);
		};
	});
	return (
		<section>
			<div className='flex container mx-auto mt-8 items-center justify-center'>
				<Fade bottom>
					<div className='space-y-4'>
						<h1 className='text-3xl font-black block'>
							Data Covid Indonesia
						</h1>
						<h2 className='text-lg font-bold block'>
							Per Tanggal: {date.toLocaleDateString()}
						</h2>
					</div>
				</Fade>
			</div>
			<div className='mt-5 bg-white container items-center justify-center mx-auto flex overflow-hidden rounded-lg shadow-xl py-5 flex-wrap sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2'>
				<div className='my-2 px-2 overflow-hidden w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
					<h3 className='mb-2 text-lg font-bold'>Kasus Positif</h3>
					<h4>Data</h4>
				</div>

				<div className='my-2 px-2 overflow-hidden w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
					<h3 className='mb-2 text-lg font-bold'>Sembuh</h3>
					<h4>Data</h4>
				</div>

				<div className='my-2 px-2 overflow-hidden w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
					<h3 className='mb-2 text-lg font-bold'>Meninggal Dunia</h3>
					<h4>Data</h4>
				</div>
			</div>
		</section>
	);
}
