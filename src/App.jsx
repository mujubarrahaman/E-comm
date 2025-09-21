import { useState, useContext, createContext } from 'react'
import './App.css'
import productsData from "./product.json"
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import ProductCart from './components/ProductCart.jsx'
import CartSidebar from './components/CartSidebar.jsx'
import Banner from './components/Banner.jsx'
import Footer from './components/Footer.jsx'


export const productContainer = createContext();
function App() {
  const [search, setSearch] = useState("")

  const [priceRange, setPriceRange] = useState([Math.min(...productsData.map((p) => (p.price))), Math.max(...productsData.map((p) => (p.price)))])

  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedRam, setSelectedRam] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null)

  const brands = [...new Set(productsData.map((p) => p.brand))].sort()
  console.log(productsData)

  /*  ADD TO CART FUNCTION */

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false)

  //ADD TO Cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...prev, { ...product, quantity: 1 }]


    })
    setIsCartOpen(true)
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  };
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      //Remove Items
      removeFromCart(id)
    } else {
      setCartItems((prev) => prev.map((item) => item.id == id ? { ...item, quantity } : item))
    }
  };




  /*---------------------------------Heart of the code----------------------------------*/

  const filterProducts = productsData.filter((product) => {

    // Search Functionality

    const { name, brand, ram, storage, display, price, color } = product;

    const matchedSearch = name.toLowerCase().includes(search.toLowerCase()) || brand.toLowerCase().includes(search.toLowerCase()) || color.toLowerCase().includes(search.toLowerCase())

    // Brand Functionality

    const matchedBrand = selectedBrands.length === 0 || selectedBrands.includes(brand)

    // Price Range Functionality

    const matchedPrices = price >= priceRange[0] && price <= priceRange[1]

    // RAM Functionality
    const matchedRam = selectedRam === null || product.ram === selectedRam

    // Storage Functionality
    const matchedStorage = selectedStorage === null || storage === selectedStorage

    return matchedSearch && matchedBrand && matchedPrices && matchedRam && matchedStorage;
  })

  /*-------------------------------------------------------------------*/


  const ramOptions = [...new Set(productsData.map((p) => p.ram))].sort((a, b) => a - b);
  return (
    <productContainer.Provider value={{ brands, priceRange, selectedBrands, setSelectedBrands, setPriceRange, selectedRam, setSelectedRam, selectedStorage, setSelectedStorage, search, setSearch, filterProducts, cartItems, isCartOpen, setIsCartOpen, addToCart, updateQuantity, removeFromCart }}>



      <Navbar />

      <div className='flex ' >
        <Sidebar />
        <div className='flex-1'  >   {/* style={{background: "#B7A3C4" } } */}

          {/* <div className='p-4'>

         <p>{JSON.stringify(selectedBrands)}</p>
         <p>{JSON.stringify(priceRange)}</p>
         <p>{search}</p>
            <p>{selectedRam}</p>
            <p>{selectedStorage}</p>
       </div> */}

          <div className='product_container_res max-w-7xl mx-auto p-4'>

            <Banner />
 
            <div className='sort flex justify-evenly items-center '>
              <div className=' p-4'>
                <h2 className='text-lg font-bold'>({filterProducts.length}) Items</h2>
              </div>

              <div className=' flex gap-2 items-center '>
                <h3 className='text-black text-sm font-medium sortBy' >Sort By</h3>

                <select
                    value={selectedRam}
                    onChange={(e) => setSelectedRam(e.target.value ? parseInt(e.target.value) : null)}
                    className='w-full border border-blue-950 rounded focus:outline-none focus:ring-2 text-sm focus:to-blue-300 p-2 '>
                    <option value="">Name</option>
                    {ramOptions.map((ram) => (
                        <option key={ram} value={ram}>{ram}</option>
                    ))}
                </select>
            </div>
            </div>
            {/* <h2 className='text-2xl font-bold  p-4' style={{ color: "#46275A" }}>Products ({filterProducts.length})</h2> */}
            {filterProducts.length == 0 ? (<p className='text-center text-gray-600 '>No products found matching your criteria.</p>) : <div className='product_card_res grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

              {filterProducts.map((product) => (
                <ProductCart key={product.id} product={product} />
              ))}

            </div>}

          </div>





        </div>
        <CartSidebar />
      </div>

      <Footer />


    </productContainer.Provider>
  )
}

export default App
