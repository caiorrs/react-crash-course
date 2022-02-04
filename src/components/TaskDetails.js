import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Button from "./Button";
import React from "react";

const TaskDetails = () => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  // const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await res.json();

      if (res.status === 404) {
        navigate("/");
      }

      setTask(data);
      setLoading(false);
    };

    fetchTask();
  }, []);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <p>{location.pathname}</p>
      <h2>{task.text}</h2>
      <p>{task.day}</p>
      <Button label="Go Back" onClick={() => navigate(-1)} />
    </div>
  );
};

export default TaskDetails;
