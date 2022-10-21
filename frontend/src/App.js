import Navbar from './components/Navbar'
import LogoDisplay from './components/LogoDisplay'
import Logo from './logos/sway_logo_transparent.png'
import DiscreteBar from './components/biasDisplay-components/discreteBar'

import './App.css'

function App() {
	return (
		<>
			<LogoDisplay img_src={Logo}/>
			<Navbar />
		</>
	);
	// return (
	// 	<>
	// 		<DiscreteBar value={-1} confidence={1}/>
	// 	</>
	// )
}

export default App;
