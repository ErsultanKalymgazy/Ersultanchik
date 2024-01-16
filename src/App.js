import './main.css'

import Intro from './components/Intro'
import Header from "./components/Heder";
import Skils from './components/Skils';
import Footer from './components/footer';

function App() {
  return (
		<>
			<Header />
			<Intro />
			<Skils />
			<Footer/>
		</>
	)
}

export default App;
