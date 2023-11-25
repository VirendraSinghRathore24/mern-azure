import Header from "./components/Header"
import HomePage from "./components/HomePage"
import { Route, Routes } from "react-router-dom";
import InsertCard from "./components/admin/InsertCard";
import FoodPage from "./components/FoodPage";
import BlogPage from "./components/BlogPage"
import InsertBlog from "./components/admin/InsertBlog";
import AboutUS from "./components/AboutUS";
import ClothsPage from "./components/ClothsPage";
import ToysPage from "./components/ToysPage";
import InsertCategoryCard from "./components/admin/InsertCategoryCard";
import BabyFood from "./components/BabyFood";

export default function App() {
  return (
    <div className="w-full h-screen">
      <Header/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/insertcard" element={<InsertCard/>}/>
          <Route path="/insertcategorycard" element={<InsertCategoryCard/>}/>
          <Route path="/insertblog" element={<InsertBlog/>}/>
          <Route path="/food" element={<FoodPage/>}/>
          <Route path="/food/:home" element={<BlogPage/>}/>
          <Route path="/aboutus" element={<AboutUS/>}/>
          <Route path="/cloths" element={<ClothsPage/>}/>
          <Route path="/toys" element={<ToysPage/>}/>
          <Route path="/babyfood6month" element={<BabyFood/>}/>
      </Routes>
    </div>
  )
}
