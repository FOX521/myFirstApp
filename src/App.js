import './App.scss';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import MessagesPage from './components/MessagesPage.jsx';
import News from './components/News';
import Music from './components/Music';
import SettingPage from './components/SettingPage';
import { BrowserRouter, Route } from 'react-router-dom';
import ProfileContainer from './components/ProfileContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='content'>
          <Route path='/profile' render={() => <ProfileContainer store={props.store} />} />
          <Route path='/messages' render={() => <MessagesPage store={props.store} />} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={SettingPage} />
          <Route path='/music' component={Music} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
