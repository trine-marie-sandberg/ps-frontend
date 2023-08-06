import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout';
import HomePage from './pages/home';
import TasksPage from "./pages/tasks";
import { ShoppingListPage } from "./pages/shopping-list";
import TaskDetails from "./pages/task-details";

export default function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="/" element={<HomePage/>} />
          <Route path="tasks" element={<TasksPage/>} />
          <Route path="task-details/:id" element={<TaskDetails/>} />
          <Route path="shopping-list" element={<ShoppingListPage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>

  )
}
