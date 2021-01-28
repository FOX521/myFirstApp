import logo from './logo.svg';
import './App.scss';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Profile from './components/Profile.jsx';
import Messages from './components/Messages.jsx';
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='content'>
      <Route path='/profile' component={Profile} />
      <Route path='/messages' component={Messages} />
      <Route path='/news' component={News} />
      <Route path='/settings' component={Settings} />
      <Route path='/music' component={Music} />

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
