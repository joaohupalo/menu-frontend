import { Navigate, Route, Routes } from "react-router-dom";
import { CategoryNav } from "./cases/categories/components/category-nav";
import { Header } from "./components/layout/header"
import { AppLayout } from "./components/layout/app-layout";
import { ProductPage } from "./pages/products/product-page";

function App() {

  return (

    <Routes>
      <Route element={<AppLayout/>}>
      <Route index element={<Navigate to="products"/>}/>
      <Route path="products" element={<ProductPage/>} />
      </Route>
    </Routes>

    //<>
      //<Header />
      //<CategoryNav />
    //</>
  )
}

export default App