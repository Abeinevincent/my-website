import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home";
import "./app.css";
import DataStructures from "./pages/datastructures/DataStructures";
import Blog from "./pages/blog/Blog";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Courses from "./pages/courses/Courses";
import Tutorials from "./pages/tutorials/Tutorials";
import Algorithms from "./pages/algorithms/Algorithms";
import Layout from "./components/layout/layout/Layout";
import Faq from "./pages/faq/Faq";
import Forum from "./pages/forum/Forum";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        {" "}
        <Home />
      </Layout>
    ),
  },
  {
    path: "datastructures",
    element: (
      <Layout>
        <DataStructures />
      </Layout>
    ),
  },
  {
    path: "algorithms",
    element: (
      <Layout>
        <Algorithms />{" "}
      </Layout>
    ),
  },
  {
    path: "blog",
    element: (
      <Layout>
        <Blog />{" "}
      </Layout>
    ),
  },
  {
    path: "forum",
    element: (
      <Layout>
        <Forum />{" "}
      </Layout>
    ),
  },
  {
    path: "courses",
    element: (
      <Layout>
        <Courses />{" "}
      </Layout>
    ),
  },
  {
    path: "tutorials",
    element: (
      <Layout>
        <Tutorials />{" "}
      </Layout>
    ),
  },
  {
    path: "faqs",
    element: (
      <Layout>
        <Faq />{" "}
      </Layout>
    ),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
