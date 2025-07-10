import './App.css'
import Navbar from './Navbar'
import NavbarAgain from './NavbarAgain'
import PhoneAxios from './PhoneAxios'
import PriceOptions from './PriceOptions'
import Recharts from './Recharts'

function App() {

  return (
    <>
  
      <h1 className='text-4xl font-bold text-center my-8 mx-24 py-4 border-2 border-gray-900 rounded-2xl'>Tailwind , Daisy UI , Price Options , Recharts , Axios</h1>

      <Navbar></Navbar>
      <NavbarAgain></NavbarAgain>
      <PriceOptions></PriceOptions>
      <Recharts></Recharts>
      <PhoneAxios></PhoneAxios>
    
    </>
  )
}

export default App
