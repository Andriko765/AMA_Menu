import { Card } from "../components";
import { ProductContext } from "../api/Data";
import { useContext } from "react";

const CategoryProduct = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      {products.map((item, i) => (
        <section
          key={i}
          className={`${
            i === 0 ? "mt-26 desktop:mt-36 tablet:mt-32" : "mt-1"
          }  w-full  overflow-hidden`}
        >
          <div className="mx-auto mt-20 mb-3 desktop:max-container tablet: max-w-[720px]">
            <h1 className=" text-2xl px-4 py-6">{item.collectionName}</h1>

            <Card productsInner={item.products}></Card>
          </div>
        </section>
      ))}
    </>
  );
};

export default CategoryProduct;
