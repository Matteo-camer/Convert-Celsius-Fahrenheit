import React from "react"
import "../../App.css";
import Cards from "../cards";
import Footer from "../footer";
import HeroSection from "../heroSection";

function Home() {
    return(
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;