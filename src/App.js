import './App.css';
import { Outlet } from 'react-router-dom';
import SiteHeader from './components/siteheader';
import Sitefooter from './components/footer';
import UsrContextProvider from './context/usercontext.js';

function App() {
  return (
    <UsrContextProvider>
      <div className="App">
        <SiteHeader/>
          <main>
            <Outlet/>
          </main>
        <Sitefooter/>
      </div>
    </UsrContextProvider>
  );
}

export default App;
