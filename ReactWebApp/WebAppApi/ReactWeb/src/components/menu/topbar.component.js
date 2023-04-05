import AuthService from '../../services/auth.service';

function TopBar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>
            <ul className="navbar-nav ml-auto">

                <div className="topbar-divider d-none d-sm-block"></div>

                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{AuthService.getUsername()}</span>
                        <div className="img-profile rounded-circle"
                        >
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="100%" height="100%" viewBox="0 0 180.000000 180.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,180.000000) scale(0.100000,-0.100000)"
                                    fill="#555555" stroke="none">
                                    <path d="M757 1790 c-292 -53 -534 -233 -662 -493 -72 -145 -89 -224 -88 -402
0 -134 3 -160 27 -240 76 -251 240 -447 469 -560 144 -71 224 -88 402 -88 134
0 160 3 240 27 251 76 447 240 560 469 70 142 88 224 88 397 1 173 -17 253
-88 397 -115 233 -330 409 -580 474 -90 23 -288 34 -368 19z m311 -95 c265
-55 493 -249 591 -503 38 -101 51 -174 51 -296 0 -167 -41 -305 -131 -443 -36
-54 -44 -62 -50 -47 -4 11 -17 47 -29 80 -49 140 -170 274 -312 344 l-83 41
-41 -20 c-93 -45 -235 -45 -328 0 l-41 20 -83 -41 c-142 -70 -263 -204 -312
-344 -12 -33 -25 -69 -29 -80 -6 -15 -14 -7 -50 47 -53 81 -98 188 -116 275
-19 86 -19 258 0 345 64 302 316 555 619 622 83 18 259 18 344 0z"/>
                                    <path d="M810 1531 c-97 -32 -175 -106 -211 -200 -46 -123 -6 -273 96 -356
160 -130 402 -80 491 101 58 119 39 260 -48 358 -60 69 -125 99 -223 102 -44
2 -91 0 -105 -5z"/>
                                </g>
                            </svg>
                        </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default TopBar;