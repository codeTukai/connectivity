
import './App.css'
import Header from './component/Header/Header'
import Home from './pages/Home'

function App() {
 

  return (
    <>
    <div>
      <Header />
      <main className='mx-auto max-w-6xl p-4'>
        <Home />
      </main>
    </div>
    </>
  )
}

export default App
