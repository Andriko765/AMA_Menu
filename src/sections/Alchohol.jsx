import { Card } from "../components"

const Alchohol = () => {
  return (
    <section className='w-full'>

    <div className='mx-auto mb-3 desktop:max-container tablet: max-w-[720px]'>
    <h1 className=' text-2xl px-4 py-6'>Важкий алкоголь</h1>
        
          <Card request={'getAlcho'} />

          </div>

        
    </section>
  )
}

export default Alchohol