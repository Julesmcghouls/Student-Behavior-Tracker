import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

/**
 * AppRouter
 *
 * The main router for the application. It contains two routes, one for the
 * home page and one for the dashboard page.
 *
 * @returns {JSX.Element} The JSX element for the router.
 */
function AppRouter() {
  return (
    <Router>
      {/* The header component is rendered outside of the routes so it is
       visible on all pages. */}
      <Header />
      <Routes>
        {/* The home page route. */}
        <Route path="/" element={<Home />} />
        {/* The dashboard page route. */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
