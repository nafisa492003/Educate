import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Home from "./Pages/Home";
import About_P from "./Pages/About_P";
import Blog_P from "./Pages/Blog_P";
import Blog_Details_P from "./Pages/Blog_Details_P";
import Teacher_P from "./Pages/Teacher_P";
import Teacher_Details_P from "./Pages/Teacher_Details_P";
import Course_P from "./Pages/Course_P";
import Course_Details_P from "./Pages/Course_Details_P";
import Log_In_P from "./Pages/Log_In_P";
import Contact_Us_P from "./Pages/Contact_Us_P";
import FAQ_P from "./Pages/FAQ_P";
import Products_P from "./Pages/Products_P";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route>
        <Route index element={<Home />} />
        <Route path="/about" element={<About_P />} />
        <Route path="/blog" element={<Blog_P />} />
        <Route path="/blog_Details" element={<Blog_Details_P />} />
        <Route path="/teacher" element={<Teacher_P />} />
        <Route path="/teacher_details" element={<Teacher_Details_P />} />
        <Route path="/course" element={<Course_P />} />
        <Route path="/course_details" element={<Course_Details_P />} />
        <Route path="/login" element={<Log_In_P />} />
        <Route path="/contact_us" element={<Contact_Us_P />} />
        <Route path="/faq" element={<FAQ_P />} />
        <Route path="/products" element={<Products_P />} />

      </Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
