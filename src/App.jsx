import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./routes/Home";
import { Notifications } from "./routes/Notifications";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
      </Route>
    )
  );

  return (
    <div className="app-wrapper">
      <RouterProvider router={router} />
    </div>
  );
}

function RootLayout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/notifications">Notifications</Link>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
