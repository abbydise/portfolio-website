import "./App.css";
import React from "react";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<HomePage />}
			/>
			<Route
				path="/projects"
				element={<ProjectsPage />}
			/>
		</Routes>
	);
}

export default App;
