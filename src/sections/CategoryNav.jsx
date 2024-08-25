import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../api/Data";
import { Card } from "../components";

const CategoryNav = () => {
  const { categoryId } = useParams();
  const { products } = useContext(ProductContext);

  const categoryProducts = products.filter(
    (product) => product.collectionName === categoryId
  );

  return (
    <section className="mt-26 desktop:mt-36 tablet:mt-32 w-full  overflow-hidden">
      <div className="mx-auto mt-20 mb-3 desktop:max-container tablet: max-w-[720px]">
        <h1 className=" text-2xl px-4 py-6">
          {categoryProducts.map(
            (item) =>
              item.collectionName.charAt(0).toUpperCase() +
              item.collectionName.slice(1)
          )}
        </h1>

        <Card
          productsInner={categoryProducts.flatMap((item) => item.products)}
        ></Card>
      </div>
    </section>
  );
};

export default CategoryNav;
