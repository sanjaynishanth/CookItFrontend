import PortfolioCTA from "../Components/Portfolio_Components/PortfoliCTA";
import PortfolioHero from "../Components/Portfolio_Components/PortfolioHero";
import ProjectsSection from "../Components/Portfolio_Components/ProjectsSection";
import Footer from "../Components/footer";

function Portfolio(){
    return(
        <div>
            <PortfolioHero/>
            <ProjectsSection/>
            <PortfolioCTA/>
            <Footer/>
        </div>
    )
}

export default Portfolio;