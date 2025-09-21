import React, { useContext } from 'react'
import { productContainer } from '../App.jsx'
import icon from '../assets/icon.png' 

const Navbar = () => {


  const {search,setSearch,cartItems, setIsCartOpen} = useContext(productContainer);

  // const totalItems = cartItems.reduce((sum,item)=> sum + item.quantity,0)
  const totalItems = cartItems.length
  return (
    <nav className=' p-2 shadow-md z-20' style={{width:'100%'}}  > 
                                     

      <div className='flex justify-between items-center  mx-auto navbar ' >
        <div className='nav_res flex items-center gap-2 pl-2 navbar_h1' style={{width:"30%"}}>
        <img src="/icon.png" alt="" />
        <h1 className='text-black text-2xl font-bold '>E-Comm</h1>
        </div>
        
        <div className='navbar_container w-8/12 ' style={{width:"80%"}}>
          <ul className='flex gap-32 justify-center  text-sm'>
            <li>
              HOME
            </li>
            <li>
              BAG
            </li>
            <li>
              SNEAKERS
            </li>
            <li>
              BELT
            </li>
            <li>
              CONTACT
            </li>
          </ul>
        </div>
      <div className='flex gap-4 items-center' style={{width:'20%'}}>
      <button  onClick={()=> setIsCartOpen((prev)=> !prev)} className='relative text-white text-3xl'>
        🛒
        {totalItems>0 && <span className='absolute text-sm -top-2.5 right-0.5 bg-red-500 px-2 py-1 rounded-full'>{totalItems}</span>}
        </button>
        <p>Items</p>
      </div>
        {/* <p className='text-white'>Contact </p> */}
      </div>

    </nav>
  )
}

export default Navbar