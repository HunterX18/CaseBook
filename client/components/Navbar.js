import Router from "next/router";
import { useRouter } from "next/router";
import Link from "next/link";
import { destroyCookie, parseCookies } from "nookies";

const Navbar = () => {
	const cookies = parseCookies();
	const signedin = cookies.signedin ? true : false;
	const role = cookies.role;
	const uid = cookies.uid;
	const router = useRouter();

	const handleSignout = async () => {
		destroyCookie(null, "signedin");
		destroyCookie(null, "role");
		destroyCookie(null, "uid");
		const res = await fetch("/api/signout");
		const data = await res.json();
		console.log(data);
		Router.push("/");
	};

	return (
		<>
			<nav
				className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
				style={{ backgroundColor: "#e3f2fd" }}
			>
				<div className="container-fluid">
					<a className="navbar-brand">CaseBook</a>
					<ul className="nav nav-tabs">
						<li className="nav-item">
							<Link href="/">
								<a
									className="nav-link"
									aria-current="page"
									style={{ color: "white" }}
								>
									Home
								</a>
							</Link>
						</li>
						{signedin && (
							<>
								{role == "customer" && (
									<li className="nav-item">
										<Link href={`/Cart/${uid}`}>
											<a
												className="nav-link"
												aria-current="page"
												style={{ color: "white" }}
											>
												My Cart
											</a>
										</Link>
									</li>
								)}
								{role == "seller" && (
									<>
										<li className="nav-item">
											<Link href={`/MyProducts/${uid}`}>
												<a
													className="nav-link"
													aria-current="page"
													style={{ color: "white" }}
												>
													My Products
												</a>
											</Link>
										</li>
										<li className="nav-item">
											<Link href="/Create">
												<a
													className="nav-link"
													aria-current="page"
													style={{ color: "white" }}
												>
													Add Products
												</a>
											</Link>
										</li>
									</>
								)}
								{role == "admin" && (
									<>
										<li className="nav-item">
											<Link href={`/Customers`}>
												<a
													className="nav-link"
													aria-current="page"
													style={{ color: "white" }}
												>
													All Customers
												</a>
											</Link>
										</li>
										<li className="nav-item">
											<Link href="/Sellers">
												<a
													className="nav-link"
													aria-current="page"
													style={{ color: "white" }}
												>
													All Sellers
												</a>
											</Link>
										</li>
										<li className="nav-item">
											<Link href="/Admins">
												<a
													className="nav-link"
													aria-current="page"
													style={{ color: "white" }}
												>
													All Admins
												</a>
											</Link>
										</li>
										<li className="nav-item">
											<Link href="/AddAdmin">
												<a
													className="nav-link"
													aria-current="page"
													style={{ color: "white" }}
												>
													Add Admin
												</a>
											</Link>
										</li>
									</>
								)}
								<li className="nav-item">
									<Link href="#">
										<a
											className="nav-link"
											style={{ color: "#dc3545" }}
											onClick={handleSignout}
										>
											Signout
										</a>
									</Link>
								</li>
							</>
						)}
						{!signedin && (
							<>
								<li className="nav-item">
									<Link href="/Signin">
										<a
											className="nav-link"
											aria-current="page"
											style={{ color: "white" }}
										>
											Sign In
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link href="/Signup">
										<a
											className="nav-link"
											aria-current="page"
											style={{ color: "white" }}
										>
											Sign up
										</a>
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
