import Home from './components/Home';
import Movie from './components/Movie';
import Navigation from './components/sub-components/Navbar';

import '../src/components/assets/styles/baselayout.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return <>
    <Router>
      <Navigation />
      <br/>
      <Routes>
        <Route path='/' element={<Home />} /> 
        {/* <Route path='/about' element={<About />} />  */}
        <Route path='movie' element={<Movie />} /> 
      </Routes>
    </Router>
    
  </>;
}

export default App;
