import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
         <nav class="navbar fixed-top navbar-light bg-light">
                <a class="navbar-brand" href="#">Bui</a>
            </nav>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Snazzel Life</h1>
                    <p className="lead">He is the best</p>
                    <div className="card-group">
                        <div className="card">
                            <img src="./buizel/Amazing.gif" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Buizel</h5>
                                <p className="card-text">You are amazing Bui</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./buizel/snazzel.gif" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Buizel</h5>
                                <p className="card-text">Dancing Bui</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./buizel/snazz-jump.gif" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Buizel</h5>
                                <p className="card-text">A jummping Boi</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">About</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">About Page</h1>
                            <div className="card mb-3">
                                <img src="./buizel/Talking-snazz.gif" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Bui</h5>
                                    <p className="card-text">A Talking Boi</p>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <img src="./buizel/Snazz-eat-pop.GIF" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">buizel</h5>
                                    <p className="card-text">A hungry Boy</p>
                                </div>
                            </div>
                        </div>
                    </div></div>
                </div>
            </div>
            <footer class="footer">
      <div class="container">
        <span class="text-muted">&copy; 2020, SnazzelLife</span>
      </div>
    </footer>
    </div>
  );
}

export default App;
