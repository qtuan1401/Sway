import BiasDisplay from './components/BiasDisplay'
import BiasOverall from './components/BiasOverall'
import Navbar from './components/Navbar'
import LogoDisplay from './components/LogoDisplay'
import Logo from './logos/sway_logo_transparent.png'
import UserInputField from './components/UserInputField'

// All imports above have been left in this file for testing purposes
// Instruction on how to use any component will be in the component's file.

function App() {
	return (
		<>
			<UserInputField title='Test' rows={10} width={2000} />
			<Navbar default='home'/>
		</>
	);
}

export default App;
