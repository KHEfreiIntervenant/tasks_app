import React, { Component } from "react";
// import { Switch, Route, Link } from "react-router-dom";
import { Routes, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./assets/images/logo-efrei.png";

import AddTask from "./components/add-task.component";
import Task from "./components/task.component";
import TasksList from "./components/tasks-list.component";

function App() {
	return (
		<div>
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<div className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link to={"/tasks"} className="nav-link">
							Tasks
						</Link>
					</li>
					<li className="nav-item">
						<Link to={"/add"} className="nav-link">
							Add
						</Link>
					</li>
					<img
						src={logo}
						style={{
							width: "110px",
							height: "auto",
							float: "right",
							position: "absolute",
							right: "30px",
						}}
					/>
				</div>
			</nav>

			<div className="container mt-3">
				<Routes>
					<Route exact path="/" element={<TasksList />} />
					<Route exact path="/tasks" element={<TasksList />} />
					<Route exact path="/add" element={<AddTask />} />
					<Route path="/tasks/:id" element={<Task />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
