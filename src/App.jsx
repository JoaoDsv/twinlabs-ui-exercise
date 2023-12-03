import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import { SideBar } from "./components/navigation/SideBar";
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
    <div className="app-layout">
      <RouterProvider router={router} />
    </div>
  );
}

function RootLayout() {
  return (
    <>
      <SideBar />

      <div className="scrollable">
        <Outlet />
      </div>
    </>
  );
}

export default App;
