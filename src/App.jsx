import "./App.css";
import About from "./Components/About/About";
import Compus from "./Components/Compus/Compus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Programs from "./Components/Programs/Programs";
import Testimonial from "./Components/Testimonial/Testimonial";
import Title from "./Components/Title/Title";

function App() {

  return (

    <div>

      <NavBar/>

      <Hero/>

      <div className="container">
        <Title subTitle='Our Programs' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='Gallery' title='Campus Photo'/>
        <Compus/>
        <Title subTitle='Testimonials' title='What Student Says'/>
        <Testimonial/>
        <Title subTitle='Contact us' title='Get in Touch'/>
        <Contact></Contact>
        <Footer></Footer>
      </div>

    </div>

  );

}

export default App;
