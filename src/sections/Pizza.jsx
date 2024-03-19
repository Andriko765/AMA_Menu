import { Card } from "../components"

const Pizza = () => {
  return (
    <section className='w-full'>

    <div className='mx-auto mb-3 desktop:max-container tablet: max-w-[720px]'>
    <h1 className=' text-2xl px-4 py-6'>Піцца</h1>
        
          <Card request={'getPizza'} />

          </div>

        
    </section>
  )
}

export default Pizza