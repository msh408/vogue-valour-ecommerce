import { useState, useEffect } from 'react'
import AppRoutes from '../src/routes/AppRoutes'
import './App.css'

function App() {

  const [products, setProducts] = useState([])
  const [designers, setDesigners] = useState([])
  const [journal,setJournal] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/data/products.json')
        const data = await response.json()

        console.log(data)

        setProducts(data.products || [])
        setDesigners(data.designers || [])
        setJournal(data.journal?.stories || [])

      } catch (error) {
        console.log(error)
      }
    }

    getProducts()
  }, [])

  return (
    <>
      <AppRoutes
        products={products}
        designers={designers}
        journal={journal}
      />
    </>
  )
}

export default App