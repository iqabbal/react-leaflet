import { useState } from 'react'
import NavigationBuoys from './NavigationBuoys'
import MapComponent from './MapComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex items-center justify-center '>
    {/* <NavigationBuoys/> */}
    <MapComponent/>
    </div>
  )
}

export default App
