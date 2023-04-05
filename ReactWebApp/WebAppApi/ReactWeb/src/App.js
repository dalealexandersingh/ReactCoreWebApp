import Menu from './components/menu/menu.component';
import TopBar from './components/menu/topbar.component';
import Logout from './components/menu/logout.component';
import Content from './components/menu/content.component';
import Login from './login';
import AuthService from './services/auth.service';
import { useState } from 'react';

function App() {

  const [rerender, setRerender] = useState(0);

  let reload = () => {
    setRerender(Math.random());
    setTimeout(() => {
      setRerender(Math.random());
    }, 100);
  }

  if (AuthService.isLoggedIn()) {
    return (<Login reload={reload} render={rerender} />);
  }

  return (
    <div id="wrapper">
      <Menu />
      <div id="content-wrapper" className="d-flex flex-column">
      < div id="content">
        <TopBar />
        <Content />
      </div>

      <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="text-center my-auto">

                    </div>
                </div>
            </footer>
      </div>
      <Logout reload={reload} />
    </div>
  );
}

export default App;
