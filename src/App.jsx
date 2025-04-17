import Cart from "./components/Cart";
import Product from "./components/Product";
import CounterProvider from "./context/CounterProvider";
import ActiveProvider from "./context/ActiveProvider";

function App() {
  return (
    <ActiveProvider>
      <CounterProvider>
        <div className="container mx-auto p-10">
          <div className="flex justify-between">
            <Product />
            <Cart />
          </div>
        </div>
      </CounterProvider>
    </ActiveProvider>
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
