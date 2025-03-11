import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Homepage";
import CreatePoll from "../pages/CreatePoll";
import Poll from "../pages/Poll";
import MyPolls from "../pages/MyPolls";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: '/create-poll',
    element: <CreatePoll />
  },

  {
    path: '/poll/:id',
    element: <Poll />
  },
  {
    path: '/my-polls',
    element: <MyPolls />
  }

]);

export default router;
