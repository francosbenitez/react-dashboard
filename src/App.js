/*import logo from './logo.svg';*/
import './App.scss';
import Navbar from '../src/components/Navbar'
import Sidebar from '../src/components/Sidebar'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex"></div>
        <Sidebar />
        <div className="content">
      </div>
    </Router>
  );
}

export default App;
