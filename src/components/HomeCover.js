import cover from "../img/logo1.png"


function HomeCover() {
    return (
        <>
            <div id="home">
                <div className="container text-center">
                    <img className="heading-image mx-auto d-block img-fluid" src={cover} alt="logo" />
                    <br />
                    <button className="shopnow mx-auto d-block">Shop Now!</button>
                </div>
            </div>
            <br />
        </>
    );
}

export default HomeCover;