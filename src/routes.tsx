import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Contatos } from "./pages/Contatos";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Timeline />
  }, {
    path: '/contato',
    element: <Contatos />
  },
])