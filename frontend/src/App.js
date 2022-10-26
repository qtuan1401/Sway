import Navbar from './components/Navbar'
import LogoDisplay from './components/LogoDisplay'
import Logo from './logos/sway_logo_transparent.png'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from './routes';

function App() {
	return (
		<BrowserRouter>
			<LogoDisplay img_src={Logo}/>
			<Navbar />
			{renderRoutes()}
		</BrowserRouter>
	);
}

export default App;
