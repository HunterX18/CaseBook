import { useState } from "react";
import { useRouter } from "next/router";
import { setCookie } from "nookies";

const Signup = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("");
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(username, password, email, role);
		if (username == "" || password == "" || email == "") {
			console.log("Provide all the fields");
			return;
		}
		fetch("/api/signup", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: username,
				email,
				password,
				type: "signup",
				role,
			}),
		})
			.then((res) => res.json())
			.then((result) => {
				// console.log(result);
				if (result.Error) alert(result.Error);
				else {
					console.log(result);
					setCookie(null, "uid", result._id);
					setCookie(null, "signedin", "true");
					setCookie(null, "role", result.role);
					router.push("/");
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div
			style={{
				height: "80vh",
				width: "100vw",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div className="mb-3">
				<label htmlFor="username" className="form-label">
					Username
				</label>
				<input
					type="email"
					className="form-control"
					id="username"
					placeholder="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label htmlFor="password" className="form-label">
					Password
				</label>
				<input
					type="email"
					className="form-control"
					id="password"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<label htmlFor="email" className="form-label">
					email
				</label>
				<input
					type="email"
					className="form-control"
					id="email"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="flexRadioDefault"
						id="flexRadioDefault1"
						onClick={() => setRole("customer")}
					/>
					<label className="form-check-label" htmlFor="flexRadioDefault1">
						Customer
					</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="flexRadioDefault"
						id="flexRadioDefault2"
						onClick={() => setRole("seller")}
					/>
					<label className="form-check-label" htmlFor="flexRadioDefault2">
						Seller
					</label>
				</div>
				<button className="btn btn-primary" onClick={handleSubmit}>
					Signup
				</button>
			</div>
		</div>
	);
};

export default Signup;
