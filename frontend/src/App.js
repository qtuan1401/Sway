import Navbar from './components/Navbar'
import LogoDisplay from './components/LogoDisplay'
import Logo from './logos/sway_logo_transparent.png'

// Remember to remove favicon package

function App() {
	return (
		<>
			<LogoDisplay img_src={Logo}/>
			<Navbar/>
		</>
	);
}

export default App;
