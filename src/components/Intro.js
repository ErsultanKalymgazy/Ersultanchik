import Ersa from './../Ersa.jpeg'

const Intro = () => {
    return (
			<div className='Wrapper'>
				<div className='Intro__container'>
					<div className='Title__intro__block'>
						<h1 className='Title__text'>
							Здравствуйте! <br></br> Я Ерсултан,<br></br>{' '}
							<span>C# разработчик.</span>
						</h1>

						<p className='desc'>
							Ерсултан, студент AITU, выделяется в области C# разработки,
							обладает глубокими знаниями в веб-технологиях и базах данных,
							активно участвует в технологических инновациях и проектах.
						</p>
					</div>
					<div className='img__intro'>
						<img src={Ersa} className='img__Ersa'></img>
					</div>
				</div>
			</div>
		)
}
 
export default Intro;