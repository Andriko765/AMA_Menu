import { Card } from "../components"

const Snacks = () => {
  return (
    <section className='w-full'>

    <div className='mx-auto mb-3 desktop:max-container tablet: max-w-[720px]'>
    <h1 className=' text-2xl px-4 py-6'>Снеки</h1>
        
          <Card request={'getSnack'} />

          </div>

        
    </section>
  )
  
}

export default Snacks