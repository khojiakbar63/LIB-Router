# React Router


# router file

```js
import {
  HomePage,
  AboutPage,
  ProductsPage,
  DetailsPage,
  SignUpPage,
  SignInPage,
  NotFoundPage,
} from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/main-layout";
import { FC } from "react";

const AppRouter: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/products",
          element: <ProductsPage />,
        },
        {
          path: "/details/:id",
          element: <DetailsPage />,
        },
        {
          path: "/*",
          element: <NotFoundPage />,
        },
      ],
    },
    {
      path: "/auth/sign-up",
      element: <SignUpPage />,
    },
    {
      path: "/auth/sign-in",
      element: <SignInPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;

```


# main.jsx

```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './router/index.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
```# LIB-Router
