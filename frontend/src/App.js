import BiasDisplay from './components/BiasDisplay'
import BiasOverall from './components/BiasOverall'
import Navbar from './components/Navbar'
import LogoDisplay from './components/LogoDisplay'
import Logo from './logos/sway_logo_transparent.png'
import UserInputField from './components/UserInputField'

// All imports above have been left in this file for testing purposes

function App() {
	return (
		<>
			<UserInputField title={"URL"} rows={1} width={600}/>
			<UserInputField title={"Text"} rows={10} width={600}/>
		</>
	);
}

export default App;
