import logo from "../img/logo1 name.png"

function Header() {
    return (
        <div>
            {/* <!-- LOGO AND SEARCHBOX & CART --> */}
            <nav className="navbar navbar-light bg-light justify-content-between py-3">
                <img src={logo} className="d-inline-block" style={{ width: "200px", height: "60px" }} alt="logoimage" />
                <form className="form-inline text-center mx-auto">
                    <div className="searchboxDiv input-group">
                        <input className="form-control mr-sm-2" type="search" placeholder="Give a Search......" aria-label="Search" />
                        <button type="submit" className="btn btn-success">Search</button>
                    </div>
                </form>

                {/* <!-- Cart --> */}

                <a href="/">
                    <button type="button" className="btn btn-warning cart btn-md">Login</button>
                </a>
                <a href="/" className="cartIcon">
                    <i className="fa-solid fa-cart-shopping"></i>
                    
                </a>
            </nav>
        </div>
    );
}

export default Header;