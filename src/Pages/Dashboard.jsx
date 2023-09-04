import axios from "axios";
import React, { lazy, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Admin = lazy(() => import("../Pages/AdminDashboard"));
const Customer = lazy(() => import("../Pages/CustomerDashboard"));
const Owner = lazy(() => import("../Pages/VehicleOwnerDashboard"));
const HandS = lazy(() => import("../Pages/HelpAndSupportDashboard"));
const Driver = lazy(() => import("../Pages/DriverDashboard"));

const Dashboard = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  // dashboard array
  const dashboards = {
    admin: <Admin />,
    customer: <Customer />,
    vehicle_owner: <Owner />,
    hands: <HandS />,
    driver: <Driver />,
  };

  // session management function
  const session = useCallback(() => {
    axios
      .post("/session")
      .then((response) => {
        console.log(response);
        if (response.data.status === 200) setRole(response.data.role);
        else if (response.data.status !== 200) navigate("/login");
      })
      .catch((error) => {
        navigate("/login");
      });
  }, [navigate]);

  // session function run in component mount
  useEffect(() => {
    session();
  }, [session]);
  return (
    <React.Fragment>
      {role !== null && <div>{dashboards[role]}</div>}
    </React.Fragment>
  );
};

export default Dashboard;
