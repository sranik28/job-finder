import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Statistics from "../Pages/Statistics";
import AppliedJobs from "../Pages/AppliedJobs";
import JobDetails from "../components/JobDetails/JobDetails";
import ErrorPages from "../Pages/ErrorPages";
import LoderApplied from "../components/LoderApplied/LoderApplied";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement:<ErrorPages/>,
        children: [
            {
                path: "/",
                element: <Home/>,               
            },           
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/job-details/:id",
                element: <JobDetails/>
            },
            {
                path: "/statistics",
                element: <Statistics/>
            },
            {
                path: "/applied-jobs",
                element: <AppliedJobs/>,
                loader:LoderApplied
                
            },
        ]
    },
]);
export default Router;