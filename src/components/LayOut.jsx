import { DataCollection } from "../api/Data";
import { Nav, Footer } from "../components";
import { Outlet } from "react-router-dom";
const LayOut = () => {
  return (
    <main className=" relative bg-[#1d1b20] min-h-[100dvh]">
      <DataCollection>
        <Nav />
        <Outlet />
        <Footer />
      </DataCollection>
    </main>
  );
};

export default LayOut;
