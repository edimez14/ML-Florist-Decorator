import { ServicesSections } from "../components/ServicesSections";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export function Services() {

    return (
        <>
            <div className="h-screen">
                <NavBar />
                <ServicesSections />
                <Footer />
            </div>
        </>
    );
}