import { PortfolioSections } from "../components/PortfolioSections";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export function Portfolio() {

    return (
        <>
            <div className="h-screen">
                <NavBar />
                <PortfolioSections />
                <Footer />
            </div>
        </>
    );
}