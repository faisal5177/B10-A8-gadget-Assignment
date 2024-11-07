import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import Products from "../Products/Products";

const Home = ({ asset }) => {
    return (
        <div>
            <NavBar />
            <Banner />
            <Products></Products>
        </div>
    );
};

export default Home;
