// App entry point
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Find the Right Driver. Land the Right Job.</h1>
      <p>Powered by AI to connect trucking companies and drivers instantly.</p>
      <Link to="/signin">Login</Link> | <Link to="/signup">Sign Up</Link>
    </div>
  );
}

function SignIn() {
  return <div style={{ padding: '2rem' }}>Sign In Page</div>;
}

function SignUp() {
  return <div style={{ padding: '2rem' }}>Sign Up Page</div>;
}

function EmployerDashboard() {
  return <div style={{ padding: '2rem' }}>Employer Dashboard - Post Jobs and View Matches</div>;
}

function DriverDashboard() {
  return <div style={{ padding: '2rem' }}>Driver Dashboard - View Matched Jobs</div>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/employer" element={<EmployerDashboard />} />
        <Route path="/driver" element={<DriverDashboard />} />
      </Routes>
    </Router>
  );
}
