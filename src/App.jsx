import Header from './components/Header'
import F1_2000 from './components/F2000'
import F1_2001 from './components/F2001'
import F1_2002 from './components/F2002'
import F1_2003 from './components/F2003'

function App() {
  return (
    <div>
      <section>
        <Header/>
      </section>
      <section className='flex items-center justify-center gap-6'>
        <F1_2000/>
        <F1_2001/>
        <F1_2002/>
        <F1_2003/>
      </section>
    </div>
  )
}

export default App
