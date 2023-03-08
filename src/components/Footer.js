import logo from "../img/logo1 name.png"

function Footer() {
    return (
        
        <footer className="mt-5 pt-5 text-center">
        <div className="row container mx-auto">
            <div className="footer-one col-lg-3 col-md-6 col-sm-12">
                <img src={logo} style={{width: "200px", height:"60px"}} alt="logo2" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
            </div>
            <div className="footer-two col-lg-3 col-md-6 col-sm-12">
                <h4 className="pb-3">Women</h4>
                <ul className="text-uppercase list-unstyled">
                    <li>
                        <a href="/">All</a>
                    </li>

                    <li>
                        <a href="/">Dresses</a>
                    </li>

                    <li>
                        <a href="/">T-shirts</a>
                    </li>

                    <li>
                        <a href="/">Shirts</a>
                    </li>

                    <li>
                        <a href="/">Pants</a>
                    </li>
                </ul>
            </div>
            <div className="footer-two col-lg-3 col-md-6 col-sm-12 ">
                <h4 className="pb-3">Men</h4>
                <ul className="text-uppercase list-unstyled">
                    <li>
                        <a href="/">All</a>
                    </li>

                    <li>
                        <a href="/">T-shirts</a>
                    </li>

                    <li>
                        <a href="/">Shirts</a>
                    </li>

                    <li>
                        <a href="/">Pants</a>
                    </li>

                    <li>
                        <a href="/">Joggers</a>
                    </li>
                </ul>
            </div>
            <div className="footer-two col-lg-3 col-md-6 col-sm-12 ">
                <h4 className="pb-3">Kids</h4>
                <ul className="text-uppercase list-unstyled">
                    <li>
                        <a href="/">All</a>
                    </li>

                    <li>
                        <a href="/">T-shirts</a>
                    </li>

                    <li>
                        <a href="/">Shirts</a>
                    </li>

                    <li>
                        <a href="/">Pants</a>
                    </li>

                    <li>
                        <a href="/">Supliments</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="copyright mt-4 ">
            <div className="container mx-auto">
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto pb-3">
                    <a href="/"><i className="fa-brands fa-facebook"></i></a>
                    <a href="/"><i className="fa-brands fa-twitter"></i></a>
                    <a href="/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                </div>

                <div className="footer-copyright col-lg-4 col-md-6 col-sm-12 mx-auto text-nowrap ">
                    <p>Copyright ©️Stitch 2022-23 </p>
                </div>
            </div>
        </div>
    </footer>

    );
} 

export default Footer;