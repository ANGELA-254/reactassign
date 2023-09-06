import React from "react";
// function navbar() {change this to arrow function
    const navbar=()=> {
    return(
        <div>
            {/* use classname to represent the classes in react */}
           <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarWithDropdown" aria-controls="navbarWithDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse show" id="navbarWithDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacts</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Policies</a></li>
                                    <li><a className="dropdown-item" href="#">Career</a></li>
                                    <li><a className="dropdown-item" href="#">EMCA</a></li>
                                </ul>
                            </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                        </ul>
                 </div>
             </div>
            </nav>
        </div>
    )
}
export default navbar;