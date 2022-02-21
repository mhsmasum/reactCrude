import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import About from './about'
import { Contact } from './contact';
import { Home } from './home'
import { clases } from './layout.css'
import  NewCategory  from './newCategory';
export const Layout = function () {
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">

                            <ul className="nav flex-column">
                                <li className="nav-item">

                                    <Link className="nav-link active" aria-current="page" href="#" to="/">Home</Link>
                                </li>
                                <li className="nav-item">

                                    <Link className="nav-link active" aria-current="page" href="#" to="/about">About</Link>
                                </li>
                                <li className="nav-item">

                                    <Link className="nav-link active" aria-current="page" href="#" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">

                                    <Link className="nav-link active" aria-current="page" href="#" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">

                                    <Link className="nav-link active" aria-current="page" href="#" to="/new">NEw</Link>
                                </li>


                            </ul>
                            <div >


                            </div>

                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Routes>
                            <Route exact path='/' element={< Home />}></Route>
                            <Route exact path='/about' element={< About />}></Route>
                            <Route exact path='/contact' element={< Contact />}></Route>
                            <Route exact path='/new' element={< NewCategory />}></Route>
                        </Routes>


                    </main>
                </div>
            </div>
        </Router>
    );


}

