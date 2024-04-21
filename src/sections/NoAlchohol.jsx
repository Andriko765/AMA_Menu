import { Card } from "../components"
import { DataCollection } from "../api/Data"
const NoAlchohol = () => {
    
  return (
    <section id="noalcho" className='w-full'>

    <div className='mx-auto mb-3 desktop:max-container tablet: max-w-[720px]'>
    <h1 className=' text-2xl px-4 py-6'>Б\А Напої</h1>
        
    <DataCollection request={'getNO_Alcho'}>
      <Card></Card>
    </DataCollection>
          </div>

        
    </section>
  )
  
}

export default NoAlchohol