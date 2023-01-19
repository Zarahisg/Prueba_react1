import MiApi from "./components/MiApi";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import Img from "../public/img/img1.jpg"

const App = () => {
  return  <>
   <Header
      classN="p-3 mb-2 bg-info-subtle text-emphasis-info"
       text= "Mi api de Locations de Rick and Morty"
    />
      <MiApi />
      <Footer
				classFooter={"bg-dark text-white"}
				classNp={"fs-5 text-center p-2 m-0"}
			></Footer>
    </>
}

export default App;
