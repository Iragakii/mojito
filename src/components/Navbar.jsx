import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import React from 'react';
import { navLinks } from '../../constants/index.js'

const Navbar = () => {
 useGSAP(() => {
	const navTween = gsap.timeline({
	 scrollTrigger: {
		trigger: 'nav',
		start: 'bottom top'
	 }
	});
	
	navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
	 backgroundColor: '#00000050',
	 backgroundFilter: 'blur(10px)',
	 duration: 1,
	 ease: 'power1.inOut'
	});
 })
 
 return (
	<nav className='top-5 w-190 m-auto flex	justify-between items-center px-5 py-1 fixed z-50 left-0 right-0 mx-auto max-w-7xl rounded-full'>
	 <div className=''>
		
			<a href="#home" className="flex items-center gap-2">
		 <img src="/images/logo.png" alt="logo" />
		 <p>JC Group</p>
		</a>
		
		<ul>
		 {navLinks.map((link) => (
			<li key={link.id}>
			 <a href={`#${link.id}`}>{link.title}</a>
			</li>
		 ))}
		</ul>
		
	 </div>
	</nav>
 )
}
export default Navbar