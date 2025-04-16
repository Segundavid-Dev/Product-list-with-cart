import Cart from "./components/Cart";
import Product from "./components/Product";

function App() {
  return (
    <div className="container mx-auto p-10">
      <div className="flex justify-center">
        <Product />
        <Cart />
      </div>
    </div>
  );
}

export default App;

/*
 2 main components
  * Cart components
  * Product components
    * Cards components
      *card components   
*/
