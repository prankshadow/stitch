function Navbar() {
    return (

        <nav className="product navbar navbar-light navbar-expand-lg text-center" style={{ backgroundColor: "#BFFFF0" }}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">All Products</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Women </a>
                            <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/">All</a></li>
                                <li><a className="dropdown-item" href="/">Dresses</a></li>
                                <li><a className="dropdown-item" href="/">T-shirts</a></li>
                                <li><a className="dropdown-item" href="/">Shirts</a></li>
                                <li><a className="dropdown-item" href="/">Pants</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Men </a>
                            <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/">All</a></li>
                                <li><a className="dropdown-item" href="/">T-shirts</a></li>
                                <li><a className="dropdown-item" href="/">Shirts</a></li>
                                <li><a className="dropdown-item" href="/">Pants</a></li>
                                <li><a className="dropdown-item" href="/">Joggers</a></li>
                                <li><a className="dropdown-item" href="/">Hoodies</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Kids</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;