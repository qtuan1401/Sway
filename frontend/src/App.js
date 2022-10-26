import Navbar from './components/Navbar'
import LogoDisplay from './components/LogoDisplay'
import Logo from './logos/sway_logo_transparent.png'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from './routes';
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<div className='appContainer'>
				<div className='left'>
					<LogoDisplay img_src={Logo}/>
					<Navbar />
				</div>
				<div className='right'>
					{renderRoutes()}
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
