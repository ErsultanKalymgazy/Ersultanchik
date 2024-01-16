import './Heder.css'

const Header = () => {
    return (
			<>
				<div className='Wrapper'>
					<header className='Header__container'>
						<div className='Logo'><h1><a href='#'>Ersultan.K</a></h1></div>
						<nav className='Nav__bar'>
							<ul>
								<li>
									<a href='#'>Experience</a>
								</li>
								<li>
									<a href='#'>Work</a>
								</li>
								<li>
									<a href='#'>Photography</a>
								</li>
								<button className='Hedear__button'>Contact</button>
							</ul>
						</nav>
					</header>
				</div>
			</>
		)
}
 
export default Header;