import { Nav, Footer } from "./components";
import { DataCollection } from "./api/Data";
import CategoryProduct from "./sections";
const App = () => {
  return (
    <main className=" relative bg-[#1d1b20] h-full">
      <Nav />
      <DataCollection>
        <CategoryProduct />
      </DataCollection>
      <Footer />
    </main>
  );
};

export default App;
