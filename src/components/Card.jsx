import { useEffect , useState} from 'react';
import axios from 'axios';
const Card = ({request}) => {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://amaapi.up.railway.app/${request}`)
    .then( res => {console.log(res.data)
   setProducts(res.data)})
    .catch(err=> console.log(err));

   

}, []);
  return (
    <div className=" w-fit flex flex-wrap justify-around   tablet:justify-start  gap-x-12  ">
   
          {products.map(item => (
            <div className={` ${item.availability ? 'card' : ' hidden'}`} key={item.id}>
              <img className="rounded-xl object-cover phone:w-52 w-28 phone:h-64 h-44 " src={item.img}  alt={item.title} 
                width={200}
                height={200}
              />
              <div className=" h-52 ">
              <h1 className=" font-semibold text-[1.125rem] max-w-[200px]">{item.title}</h1>
              <p className='text-[#b9b9b9]  text-pretty text-[0.875rem] max-w-[200px] mt-1 mb-3'>{item.description}</p>
              <p className="text-[#dee2e6]">{item.price}</p>
              </div>
            </div>
          ))}
          
    </div>
  )
}

export default Card