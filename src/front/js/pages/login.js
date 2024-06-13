import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let token = sessionStorage.getItem("token");
	console.log("Your token: ", token)
	
	const handleClick = async () => {
		
	 }

	// 2. make the <input> controlled inputs 
	// also, make the button execute the handleClick function 
	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			<div>
				<input 
					type="text" 
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
			<input 
				type="password" 
				placeholder="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)} 
			/>
			</div>
			<div>
				<button onClick={handleClick}>Login</button>
			</div>
			
		</div>
	);
};
