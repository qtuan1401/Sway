import Navbar from './components/Navbar'
import LogoDisplay from './components/LogoDisplay'
import Logo from './logos/sway_logo_transparent.png'

function App() {
	return (
		<>
			<Navbar/>
			<LogoDisplay img_src={Logo}/>
		</>
	);
}

export default App;
