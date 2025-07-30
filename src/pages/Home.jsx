import { ThemeToggle } from "../components/ThemeToggle"
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground"
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-hidden">


    {/* Theme Toggle */}
  
  <ThemeToggle/>


    {/*Background effect*/}

    <StarBackground/>


    
    {/*NavBar*/}

    <Navbar/>   


    {/*Main content*/}
    
        <HeroSection/>
        <AboutSection />
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
        

    {/*Footer*/}
    <Footer/>
    
    {/*End of main content*/}

    {/*End of background effect*/}

    {/*End of NavBar*/}

    
    
   </div>
}