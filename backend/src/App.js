import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './assets/css/index.css';

const Signin = lazy(() => import("./components/Signin"));
const Signup = lazy(() => import("./components/Signup"));
const Dashboard = lazy(() => import("./components/Dashboard"));
const Companies = lazy(() => import("./components/Companies"));
const Company = lazy(() => import("./components/Company"));
const CreateCompany = lazy(() => import("./components/CreateCompany"));
const Cars = lazy(() => import("./components/Cars"));
const Car = lazy(() => import("./components/Car"));
const CreateCar = lazy(() => import("./components/CreateCar"));
const Reservations = lazy(() => import("./components/Reservations"));
const Reservation = lazy(() => import("./components/Reservation"));
const CreateReservation = lazy(() => import("./components/CreateReservation"));
const Users = lazy(() => import("./components/Users"));
const User = lazy(() => import("./components/User"));
const CreateUser = lazy(() => import("./components/CreateUser"));
const Settings = lazy(() => import("./components/Settings"));
const Notifications = lazy(() => import("./components/Notifications"));
const Messages = lazy(() => import("./components/Messages"));
const ToS = lazy(() => import("./components/ToS"));
const About = lazy(() => import("./components/About"));
const ResetPassword = lazy(() => import("./components/ResetPassword"));
const Contact = lazy(() => import("./components/Contact"));
const NoMatch = lazy(() => import("./components/NoMatch"));

const App = () => {
	return (
		<Router>
			<div className="App">
				<Suspense fallback={<></>}>
					<Routes>
						<Route exact path="/sign-in" element={<Signin />} />
						<Route exact path="/sign-up" element={<Signup />} />
						<Route exact path="/" element={<Dashboard />} />
						<Route exact path="/companies" element={<Companies />} />
						<Route exact path="/company" element={<Company />} />
						<Route exact path="/create-company" element={<CreateCompany />} />
						<Route exact path="/cars" element={<Cars />} />
						<Route exact path="/car" element={<Car />} />
						<Route exact path="/create-car" element={<CreateCar />} />
						<Route exact path="/reservations" element={<Reservations />} />
						<Route exact path="/reservation" element={<Reservation />} />
						<Route exact path="/create-reservation" element={<CreateReservation />} />
						<Route exact path="/users" element={<Users />} />
						<Route exact path="/user" element={<User />} />
						<Route exact path="/create-user" element={<CreateUser />} />
						<Route exact path="/settings" element={<Settings />} />
						<Route exact path="/notifications" element={<Notifications />} />
						<Route exact path="/messages" element={<Messages />} />
						<Route exact path="/reset-password" element={<ResetPassword />} />
						<Route exact path="/about" element={<About />} />
						<Route exact path="/tos" element={<ToS />} />
						<Route exact path="/contact" element={<Contact />} />

						<Route path="*" element={<NoMatch />} />
					</Routes>
				</Suspense>
			</div>
		</Router>
	);
}

export default App;
