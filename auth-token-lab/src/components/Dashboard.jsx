import React from "react";

const Dashboard = ({ setIsLoggedIn }) => {

  const handleLogout = () => {
    // Remove token
    localStorage.removeItem("authToken");

    // Update state
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;