import featured1 from "../img/featured photo 1.jpg"
import featured2 from "../img/featured photo 2.png"
import featured3 from "../img/featured photo 3.png"

function FeaturedSection() {
    return (

        <div id="featured" className="my-5 pb-5">
            <div className="container mt-5 pt-2">
                <h3>Our Featured Product</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. </p>
            </div>


            <div className="carousel">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={featured1} className="d-block w-100" alt="featured1" />
                            <div className="carousel-caption">
                                <h1>Jordans</h1>
                                <p>Feel your grip</p>
                                <button type="button" className="btn btn-danger">Shop Now</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={featured2} className="d-block w-100" alt="featured2" />
                            <div className="carousel-caption">
                                <h1>Men accessories</h1>
                                <p>Choose your outfit</p>
                                <button type="button" className="btn btn-danger">Shop Now</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={featured3} className="d-block w-100" alt="featured3" />
                            <div className="carousel-caption">
                                <h1>Nike</h1>
                                <p>Your best choice for sportswear</p>
                                <button type="button" className="btn btn-danger">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>



    );
}

export default FeaturedSection;