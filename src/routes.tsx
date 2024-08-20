import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Contatos } from "./pages/Contatos";
import { SobreMim } from "./pages/SobreMim";
import { Default } from "./layout/Default";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Timeline />
      }, {
        path: '/contato',
        element: <Contatos />
      }, {
        path: '/about',
        element: <SobreMim />
      },
    ]
  }

])