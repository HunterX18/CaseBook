import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { addBookMutation } from "../components/queries";
import { parseCookies } from "nookies";
import verification from "../components/utils/verification";

const Create = () => {
	const [name, setName] = useState("");
	const [author, setAuthor] = useState("");
	const [genre, setGenre] = useState("");
	const [price, setPrice] = useState(0);
	const [about, setAbout] = useState("");
	const [image, setImage] = useState({});

	const router = useRouter();

	const [addNewBook] = useMutation(addBookMutation);

	const uploadImage = async () => {
		const data = new FormData();
		data.append("file", image);
		data.append("upload_preset", "bookstore");
		data.append("cloud_name", "instahunterx");
		const res = await fetch(
			"https://api.cloudinary.com/v1_1/instahunterx/image/upload",
			{
				method: "POST",
				body: data,
			}
		);
		const result = await res.json();
		return result.url;
	};
	const handleSubmit = async () => {
		const { uid } = parseCookies();
		const imageUrl = await uploadImage();
		const data = await addNewBook({
			variables: {
				name,
				author,
				genre,
				price: Number(price),
				about,
				image: imageUrl,
				sellerId: uid,
				type: "ADD",
			},
		});
		console.log(data);
		router.push("/");
	};

	return (
		<>
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
					<label htmlFor="name" className="form-label">
						Title
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						placeholder="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<label htmlFor="author" className="form-label">
						Author
					</label>
					<input
						type="text"
						className="form-control"
						id="author"
						placeholder="author"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
					<label htmlFor="genre" className="form-label">
						Genre
					</label>
					<input
						type="text"
						className="form-control"
						id="genre"
						placeholder="genre"
						value={genre}
						onChange={(e) => setGenre(e.target.value)}
					/>
					<label htmlFor="about" className="form-label">
						About
					</label>
					<input
						type="text"
						className="form-control"
						id="about"
						placeholder="about"
						value={about}
						onChange={(e) => setAbout(e.target.value)}
					/>
					<label htmlFor="price" className="form-label">
						Price
					</label>
					<input
						type="number"
						className="form-control"
						id="price"
						placeholder="price"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
					<div className="input-group mb-3">
						<input
							type="file"
							className="form-control"
							id="inputGroupFile02"
							onChange={(e) => setImage(e.target.files[0])}
						/>
						<label className="input-group-text" htmlFor="inputGroupFile02">
							Upload Image
						</label>
					</div>

					<button className="btn btn-primary" onClick={handleSubmit}>
						Add Book
					</button>
				</div>
			</div>
		</>
	);
};

export const getServerSideProps = async (ctx) => {
	const { auth } = parseCookies(ctx);
	const verify = verification(auth);
	if (verify.error) {
		return {
			redirect: {
				permanent: false,
				destination: "/Signin",
			},
			props: {},
		};
	} else
		return {
			props: {},
		};
};

export default Create;
