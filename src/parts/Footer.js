import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<section className='mb-5 pb-5'>
			<footer>
				<div className='border-color mx-auto'>
					<div className=''>
						<hr />
					</div>
					<div className='container mx-auto flex  pt-12 flex-col lg:flex-row items-center space-y-5 lg:space-y-0'>
						<div className='flex title-font font-medium items-center text-gray-900 mb-4 lg:mb-0 md:mb-0 space-x-5'>
							<svg
								class='social-media-c'
								width='30'
								height='30'
								viewBox='0 0 30 30'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<circle cx='15' cy='15' r='15' fill='#C7C7C7' />
								<g clip-path='url(#clip0)'>
									<path
										d='M17.9027 22.4467C17.916 22.4427 17.9287 22.4373 17.942 22.4327C26.0853 19.1973 23.8327 7 15 7C10.5673 7 7 10.6133 7 15C7 20.5513 12.6227 24.5127 17.9027 22.4467ZM10.5207 20.3727C11.0887 19.418 12.9267 16.7247 16.064 15.7953C16.72 17.468 17.18 19.4193 17.2253 21.632C14.848 22.4313 12.3407 21.8933 10.5207 20.3727V20.3727ZM18.2087 21.2147C18.1213 19.0887 17.6873 17.2033 17.0687 15.57C18.4567 15.3533 20.0633 15.498 21.8853 16.228C21.498 18.402 20.108 20.2293 18.2087 21.2147V21.2147ZM21.99 15.194C19.9833 14.44 18.2147 14.346 16.684 14.638C16.4473 14.1047 16.1987 13.592 15.9353 13.12C18.284 12.182 19.672 11.0387 20.2933 10.4333C21.39 11.7027 22.0413 13.346 21.99 15.194V15.194ZM19.5833 9.72133C19.018 10.2593 17.6867 11.346 15.41 12.2347C14.294 10.4693 13.1007 9.224 12.3447 8.52667C14.7633 7.53067 17.5527 7.956 19.5833 9.72133V9.72133ZM11.3887 9.01533C11.9593 9.51733 13.212 10.7227 14.4207 12.5867C12.7607 13.1213 10.6793 13.514 8.148 13.5693C8.55067 11.64 9.75333 10.0053 11.3887 9.01533V9.01533ZM8.02133 14.5733C10.8547 14.5273 13.148 14.08 14.9607 13.4747C15.2113 13.914 15.4493 14.3927 15.678 14.89C12.5213 15.8953 10.5487 18.4907 9.79333 19.6627C8.57467 18.3027 7.90267 16.528 8.02133 14.5733V14.5733Z'
										fill='white'
									/>
								</g>
								<defs>
									<clipPath id='clip0'>
										<rect
											width='16'
											height='16'
											fill='white'
											transform='translate(7 7)'
										/>
									</clipPath>
								</defs>
							</svg>
						</div>
						<nav className='mx-auto flex flex-wrap items-center text-base justify-center space-x-5'>
							<Link to='/' className='footer-link'>
								Data
							</Link>
							<span>|</span>
							<Link to='/vaksin' className='footer-link'>
								Vaksin
							</Link>
							<span>|</span>
							<Link to='/about' className='footer-link'>
								Tentang Kami
							</Link>
						</nav>
						<nav className='flex lg:flex-row flex-col items-center text-base justify-center'>
							<p>Made with Love © 2021 Xenos Dev Team</p>
						</nav>
					</div>
				</div>
			</footer>
		</section>
	);
}
