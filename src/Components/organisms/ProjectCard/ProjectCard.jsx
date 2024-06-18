import React from 'react'
import './projectCard.css'
import Tilt from 'react-parallax-tilt'
import appStoreIcon from '../../../Assets/appstore.png'
import playStoreIcon from '../../../Assets/playstore.png'
import { toast } from 'react-hot-toast'

const ProjectCard = ({
	img,
	title,
	description,
	link,
	repository,
	appstore,
	playstore,
	app,
}) => {
	const openLink = (url) => {
		console.log('url length', url.length)
		!url.length
			? toast('IOS Release coming soon!.', {
					icon: '👏',
					style: {
						borderRadius: '5px',
						background: '#333',
						color: '#fff',
					},
			  })
			: window.open(url, '_blank', 'noreferrer')
	}
	return (
		<Tilt
			tiltMaxAngleX={10}
			tiltMaxAngleY={10}
			tiltReverse={false}
			className='project__card-container'
		>
			<img src={img} title={title} alt={title} className='project-img' />
			<div className='project__title'>{title}</div>
			<div className='project__description'>{description}</div>
			<div
				className={
					app ? 'project__appIcons-container' : 'project__icons-container'
				}
			>
				{app ? (
					<img
						onClick={() => openLink(appstore)}
						src={appStoreIcon}
						title='appstore'
						alt='appstore'
						className='storeIcons'
					/>
				) : (
					<a
						href={repository}
						className='project__icon'
						rel='noopener noreferrer'
						target='_blank'
					>
						<i class='uil uil-github'></i>
					</a>
				)}

				{app ? (
					<img
						onClick={() => openLink(playstore)}
						src={playStoreIcon}
						title='playstore'
						alt='playstore'
						className='storeIcons'
					/>
				) : (
					<a
						href={link}
						className='project__icon'
						rel='noopener noreferrer'
						target='_blank'
					>
						<i class='uil uil-external-link-alt'></i>
					</a>
				)}
			</div>
		</Tilt>
	)
}

export default ProjectCard
