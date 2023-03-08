import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeCover from "./components/HomeCover";
import Collection from "./components/Collection";
import FeaturedSection from "./components/Featured";

function Home() {
    return (
        <div>
            <Header />
            <Navbar />
            <HomeCover />
            <Collection />
            <FeaturedSection />
            <Footer />
        </div>
    );
}

export default Home;
