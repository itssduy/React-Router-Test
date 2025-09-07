import ErrorPage from './components/ErrorPage.jsx'
import App from './App.jsx'
import Profile from './components/Profile.jsx'

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "profile/:name",
        element: <Profile />,
        
    },
]

export default routes