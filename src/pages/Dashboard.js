import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { userSelector } from "../store/authStoreSelector";

function Dashboard() {
  const user = useAuthStore(userSelector);
  const { id, name, job, place } = user;

  console.log('user', user);

  return (
    <div>
      <h3>Dashboard</h3>
      <ul>
        User
        <hr />
        <li>ID: {id}</li>
        <li>Name: {name}</li>
        <li>Job: {job}</li>
        <li>From: {place}</li>
      </ul>
    </div>
  );
}

export default Dashboard;
