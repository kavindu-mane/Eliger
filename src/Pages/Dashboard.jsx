import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [haveSession, setHaveSession] = useState(false);

  // session management function
  const session = useCallback(() => {
    axios
      .post(process.env.REACT_APP_SESSION_BACKEND_URL)
      .then((response) => {
        console.log(response);
        if (response.data === 200) setHaveSession(true);
        else if (response.data !== 200) navigate("/login");
      })
      .catch((error) => {
        navigate("/login");
      });
  }, [setHaveSession, navigate]);

  // session function run in component mount
  useEffect(() => {
    session();
  });
  return (
    <React.Fragment>{haveSession && <div>Dashboard</div>};</React.Fragment>
  );
};

export default Dashboard;
