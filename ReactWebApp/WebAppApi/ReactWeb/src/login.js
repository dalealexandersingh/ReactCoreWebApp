import { useState } from 'react';
import Logo from './components/menu/logo.component';
import './login.css';
import AuthService from './services/auth.service';

function Login({reload}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleLogin = (e) => {
        e.preventDefault();
        AuthService.login(username, password).then(result => {
            if (result == null){
                window.ShowMessage('invalid credentials');
            }
        });
        reload();
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-gradient-secondary">
                                    <div className="p-xl-5">
                                        <Logo />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">App</h1>
                                        </div>
                                        <form className="user" >
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-user"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Username..." 
                                                    value={username}
                                                    onChange={event => setUsername(event.target.value)}
                                                     />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    placeholder="Password..."
                                                    value={password}
                                                    onChange={event => setPassword(event.target.value)} 
                                                    />
                                            </div>
                                            <input type="button" onClick={handleLogin} className="btn btn-primary btn-user btn-block" value="Login" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;