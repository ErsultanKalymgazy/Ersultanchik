const Skils = () => {
	return (
		<>
			<div className='Skils__container'>
				<div className='Wrapper'>
					<div title='Skils-block'>
						<p className='desc__skils'>Навыки</p>
						<h2 className='title__skils'>Профессиональный разработчик C#</h2>
					</div>

					<div className='Card__container'>
						<div className='Card__skills'>
							<div className='Number__card'>01</div>
							<div className='Title__card'>
								<span>C# и .NET</span>, Профессиональное владение
							</div>
							<div className='Desc__card'>
								Разработка чистого, модульного и оптимизированного кода, включая
								понимание последних версий .NET
							</div>
						</div>
						<div className='Card__skills'>
							<div className='Number__card'>02</div>
							<div className='Title__card'>
								<a className='blue'>ASP.NET MVC</a>, Разработка веб-приложений
							</div>
							<div className='Desc__card'>
								Знание ASP.NET MVC, создание RESTful сервисов и взаимодействие с
								front-end
							</div>
						</div>
						<div className='Card__skills'>
							<div className='Number__card'>03</div>
							<div className='Title__card'>
								<a className='pink'>SQL Server</a>, Профессиональное работа с
								базами данных
							</div>
							<div className='Desc__card'>
								Опыт работы с SQL Server и Entity Framework, проектирование и
								оптимизация баз данных
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Skils
