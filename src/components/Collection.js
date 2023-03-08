import womenImage from "../img/women 3.jpg"
import menImage from "../img/men 3.jpeg"
import jordans from "../img/jordans 3.jpg"

function Collection() {
    return (

        <div id="product-display-section">
            <div className="row p-0 m-0">
                <div className="image-shopping col-lg-4 col-md-12 col-sm-12 p-0 product-1-women">
                    <img src={womenImage} alt="women dress" />
                    <div className="details">
                        <h1 className="shopNowHeading text-dark">Women's Winter Collection</h1>
                        <button className="text-uppercase">Shop now</button>
                    </div>
                </div>
                <div className="image-shopping col-lg-4 col-md-12 col-sm-12 p-0 product-2-men">
                    <img src={menImage} alt="men shirt" />
                    <div className="details">
                        <h1 className="shopNowHeading menHeading">T-shirts under 699</h1>
                        <button className="text-uppercase">Shop now</button>
                    </div>
                </div>
                <div className="image-shopping col-lg-4 col-md-12 col-sm-12 p-0 product-3-jordans">
                    <img src={jordans} alt="jordans" />
                    <div className="details">
                        <h1 className="shopNowHeading jordans">Upto 40% off</h1>
                        <button className="text-uppercase">Shop now</button>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Collection;