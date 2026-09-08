import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './assets/css/style.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/css/stylebox.css'
// import Heading from './components/Heading'
// import Navbar from './components/Navbar'
// import Images from './components/Images'
import State from './Hooks/State'
import Nav from './components/Nav'
// import Refrence from './Hooks/Refrence'
// import Box from './components/Box'
// import Boxs from './components/Boxs'
// import './assets/css/boxs.css'
import './assets/css/ColorBox.css'
import ColorChange from './components/ColorChange'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Nav /> */}
    {/* <Navbar />
    <h1 className='text-warning'>Hello aavesh</h1>
    <Heading />
    <p className='text-info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae vel iure earum sit voluptate doloribus aliquid aut praesentium recusandae quam non a quo explicabo distinctio, commodi nesciunt reiciendis dolore hic, quas ad repudiandae laboriosam perspiciatis. Tempore quis sapiente porro dolorum iste sed velit atque, voluptatibus eius nisi laudantium dolor incidunt ea qui delectus officiis cumque! Labore saepe, cumque tempora fuga iure aut mollitia hic, voluptas obcaecati reprehenderit alias dignissimos aspernatur modi? Repellendus, amet minima eum omnis non consequatur voluptates tenetur animi maiores dolorum velit repellat cupiditate ex, qui fugiat dolore nisi nam? Deleniti quibusdam dicta, iste harum consequuntur reprehenderit omnis.</p> */}
{/* <Images/> */}
{/* <State/> */}
{/* <Refrence/> */}
{/* <Box/> */}
{/* <Boxs/> */}
<ColorChange/>
  </StrictMode>
)
