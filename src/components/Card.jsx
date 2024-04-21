import { Suspense, useContext } from 'react';
import { ProductContext } from '../api/Data';

const Card = () => {


  const { products } = useContext(ProductContext);
  
  const Loading = () => {
    return <div>Loading...</div>;
  }

  return (
    <div className=" w-fit flex flex-wrap justify-around   tablet:justify-start  gap-x-12  ">
      {products && Array.isArray(products)? (
        products.map(item => (
          <div className={` ${item.availability? 'card' : ' hidden'}`} key={item.id}>
            <Suspense fallback={
              <Loading />
            }>
              <img className="rounded-xl object-cover phone:w-52 w-28 phone:h-64 h-44 " src={item.img}  alt={item.title} 
                width={200}
                height={200}
              />
            </Suspense>
            <div className=" h-52 ">
              <h1 className=" font-semibold text-[1.125rem] max-w-[200px]">{item.title}</h1>
              <p className='text-[#b9b9b9]  text-pretty text-[0.875rem] max-w-[200px] mt-1 mb-3'>{item.description}</p>
              <p className="text-[#dee2e6]">{item.price}</p>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Card