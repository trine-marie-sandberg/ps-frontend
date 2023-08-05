import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Layout from './layout';
import HomePage from './pages/home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}

export default App
