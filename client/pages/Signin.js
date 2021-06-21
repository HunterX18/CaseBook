import { useState } from "react";
import { useRouter } from "next/router";
import { setCookie } from "nookies";

const Signin = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("");
	const router = useRouter();

	const handleSubmit = () => {
		fetch("/api/signin", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name: username, password, type: "signin", role }),
		})
			.then((res) => res.json())
			.then((result) => {
				// console.log(result);
				if (result.Error) alert(result.Error);
				else {
					setCookie(null, "uid", result._id);
					setCookie(null, "signedin", "true");
					setCookie(null, "role", result.role);
					router.push("/");
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div style={{ height: "80vh", width: "100vw", display: 'flex', alignItems: "center", justifyContent: "center"}}>
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
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="flexRadioDefault"
						id="flexRadioDefault3"
						onClick={() => setRole("admin")}
					/>
					<label className="form-check-label" htmlFor="flexRadioDefault3">
						Admin
					</label>
				</div>
				<button className="btn btn-primary" onClick={handleSubmit}>
					Signin
				</button>
			</div>
			{/* <form onSubmit={handleSubmit}> */}
			{/* <input
					type="text"
					placeholder="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="text"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/> */}

			{/* <input
					type="radio"
					value="customer"
					onClick={() => setRole("customer")}
				/>
				<label htmlFor="customer">Customer</label>
				<input type="radio" value="seller" onClick={() => setRole("seller")} />
				<label htmlFor="seller">Seller</label>
				<input type="radio" value="admin" onClick={() => setRole("admin")} />
				<label htmlFor="admin">Admin</label>
				<input type="submit" /> */}
			{/* </form> */}
		</div>
	);
};

export default Signin;
