import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Homepage";
import CreatePoll from "../pages/CreatePoll";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: '/create-poll',
    element: <CreatePoll />
  }

]);

export default router;
