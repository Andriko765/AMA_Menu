import { LayOut } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryProduct from "./sections";
import CategoryNav from "./sections/CategoryNav";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<CategoryProduct />} />
          <Route path="/category/:categoryId" element={<CategoryNav />} />
          <Route path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
