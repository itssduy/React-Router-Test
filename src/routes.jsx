import App from "./App"
import ErrorPage from "./components/ErrorPage"
import Profile from "./components/Profile"

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,

    },
    {
        path: 'profile',
        element: <Profile />
    }
]

export default routes
