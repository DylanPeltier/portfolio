import './App.css'
import Landing from './pages/Landing.tsx'
import Nav from './components/Nav.tsx'
// Supports weights 200-900
import '@fontsource-variable/unbounded';
// Supports weights 100-900
import '@fontsource-variable/epilogue';

function App() {

  return (
    <>
      <Nav />
      <Landing />
    </>
  )
}

export default App
