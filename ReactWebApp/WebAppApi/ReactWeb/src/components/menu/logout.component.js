import AuthService from '../../services/auth.service';

function Logout({reload}) {

    let handleLogout = (e) => {
        e.preventDefault();
        AuthService.logout();
        reload();
        window.location.reload();
    }

    return (
        <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Logout</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logout;