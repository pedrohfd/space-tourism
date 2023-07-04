import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Destination } from '../pages/Destination'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        {/* <Route /> */}
        {/* <Route /> */}
      </Route>
    </Routes>
  )
}
