import About from "./components/About";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Home from "./components/Home";
import Processpage from "./components/Processpage";
import Review from "./components/Review";
import Servicespage from "./components/Servicespage";
function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <About />
        <Servicespage />
        <Processpage />
        <Review />
        <Form />
        <Footer />
      </div>

    </>
  );
}

export default App;
