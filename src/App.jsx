import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout';
import HomePage from './pages/home';
import TasksPage from "./pages/tasks";
import { ShoppingListPage } from "./pages/shopping-list";

export default function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="tasks" element={<TasksPage/>} />
          <Route path="shopping-list" element={<ShoppingListPage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>

  )
}
