import './App.css';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Features from './components/Featchers/Features';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footer/FooterBottom';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
       <Navbar></Navbar>
  <div className="max-w-screen-xl mx-auto" >
 <Banner></Banner>
 <Features></Features>
<Projects></Projects>
<Resume></Resume>
<Contact></Contact>
<Footer></Footer>
<FooterBottom></FooterBottom>
  </div>
    </div>
  );
}

export default App;
