import { Card } from "../components"
import { DataCollection } from "../api/Data"
const Pizza = () => {
  return (
    <section id="pizza" className='w-full'>

    <div className='mx-auto mb-3 desktop:max-container tablet: max-w-[720px]'>
    <h1 className=' text-2xl px-4 py-6'>Піцца</h1>
        
    <DataCollection request={'getPizza'}>
      <Card></Card>
    </DataCollection>
          </div>

        
    </section>
  )
}

export default Pizza