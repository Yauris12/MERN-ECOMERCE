import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { Link } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to='/'>Amazona</Link>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:slug' element={<ProductScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
