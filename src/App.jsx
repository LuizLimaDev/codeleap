import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='flex flex-col items-center w-layout bg-white'>
      <Outlet />
    </div>
  )
}

export default App
