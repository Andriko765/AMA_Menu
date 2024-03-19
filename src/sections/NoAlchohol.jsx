import { Card } from "../components"

const NoAlchohol = () => {
    
  return (
    <section className='w-full'>

    <div className='mx-auto mb-3 desktop:max-container tablet: max-w-[720px]'>
    <h1 className=' text-2xl px-4 py-6'>Б\А Напої</h1>
        
          <Card request={'getNO_Alcho'} />

          </div>

        
    </section>
  )
  
}

export default NoAlchohol