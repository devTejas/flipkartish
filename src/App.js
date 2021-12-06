import "./App.css";
import FilterActions from "./components/FilterActions/FilterActions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Listing from "./components/Listing/Listing";
import FilterProvider from "./ProductsContext";

function App() {
  return (
    <FilterProvider>
      <Header />
      <div className="App">
        <Listing />
        <FilterActions />
      </div>
      <Footer />
    </FilterProvider>
  );
}

export default App;
