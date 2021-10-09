import React from "react";
import Fade from "react-reveal/Fade";

export default function Section({ title, data }) {
	return (
		<section>
			<Fade bottom>
				<div className='flex container mx-auto mt-20 items-center justify-center'>
					<div className='space-y-4'>
						<h1 className='text-3xl font-black block'>{title}</h1>
						<h2 className='text-lg block'>{data}</h2>
					</div>
				</div>
			</Fade>
		</section>
	);
}
