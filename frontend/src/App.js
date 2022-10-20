import Navbar from './components/Navbar'
import LogoDisplay from './components/LogoDisplay'
import Logo from './logos/sway_logo_transparent.png'
import DiscreteBar from './components/biasDisplay-components/discreteBar'


function App() {
	return (
		<>
			<Navbar/>
			<LogoDisplay img_src={Logo}/>
		</>
	);
	// return (
	// 	<>
	// 		<DiscreteBar value={-1} confidence={1}/>
	// 	</>
	// )
}

export default App;
