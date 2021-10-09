import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vaksin from "./pages/Vaksin";
import About from "./pages/About";

function App() {
	return (
		<div className='App'>
			<Router>
				<Route exact path='/' component={Home} />
				<Route path='/vaksin' component={Vaksin} />
				<Route path='/about' component={About} />
			</Router>
		</div>
	);
}

export default App;
