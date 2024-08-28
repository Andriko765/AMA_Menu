import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../api/Data';
import { useContext } from 'react';
const Nav = () => {
	const [inputActive, setinputActive] = useState(false);
	const [isOpen, setisOpen] = useState(false);
	const [activeLink, setActiveLink] = useState('Сидр');
	const [catopen, setCatOpen] = useState(false);
	const { products } = useContext(ProductContext);

	return (
		<header className=" top-0 fixed bg-[#1d1b20] w-full ">
			<div className="desktop:max-container relative tablet: max-w-[720px]   mx-auto">
				<nav>
					<div className="flex px-5 py-3 justify-between items-center ">
						<div className="flex gap-3">
							<Link to={'/'} onClick={() => setActiveLink(null)}>
								<img
									src="https://i.ibb.co/gyQNHDF/photo-2023-07-05-12-18-41.jpg"
									width={65}
									height={65}
									alt="Logo"
								/>
							</Link>
							<div
								className={`flex gap-3 items-center my-auto rounded-[0.6rem] max-h-11 px-3 bg-transparent ${
									inputActive ? 'input-active' : ''
								}`}
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="text-light-grey"
								>
									<path
										d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>

								<input
									onFocus={() => setinputActive(true)}
									onBlur={() => setinputActive(false)}
									className=" border-0 rounded-[0.6rem] p-0  w-full bg-transparent h-10 focus:outline-none placeholder:text-white block"
									placeholder="Пошук"
								/>
							</div>
						</div>
						<div className=" flex items-center">
							<button
								type="button"
								onClick={() => setisOpen(!isOpen)}
								className=" border border-[#343434] p-3 rounded-lg"
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M3 12H21M3 6H21M3 18H21"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</button>
						</div>
					</div>
					<div className="px-5 py-3  items-center  ">
						<ul className=" desktop:flex px-5 py-3  items-center desktop:max-container tablet: max-w-[720px]  tablet:flex hidden   mx-auto ">
							{products.map((item, i) => (
								<Link to={`/category/${item.collectionName}`} key={i}>
									<li
										className={`cursor-pointer border-b-2 p-3 ${
											activeLink === `${item.collectionName}`
												? ' border-b-blue-600'
												: 'border-b-2'
										}`}
										onClick={() => setActiveLink(item.collectionName)}
									>
										{item.collectionName.charAt(0).toUpperCase() +
											item.collectionName.slice(1)}
									</li>
								</Link>
							))}
						</ul>

						<button
							className=" flex desktop:hidden tablet:hidden border gap-3 w-fit border-[#495057] rounded-lg cursor-pointer py-0 pr-2 pl-3 h-11  text-center items-center  text-xl"
							onClick={() => setCatOpen(true)}
						>
							{activeLink}
							<span>
								<svg
									className="w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path
										fill="#ffffff"
										d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
									/>
								</svg>
							</span>
						</button>
					</div>
				</nav>
				<div
					className={`absolute w-full h-[100dvh] bg-gray-700/40 top-0  justify-center items-center
          ${catopen ? 'flex' : 'hidden'}
          `}
				>
					<div className=" w-[95dvw] max-w-[98dvw] h-fit px-4 py-8 rounded-lg bg-[#1d1b20] flex flex-col gap-2 items-center ">
						<div className="flex justify-end w-full">
							<div>
								<button
									className="border border-[#495057] rounded-lg px-4 py-2 text-white w-full"
									onClick={() => setCatOpen(false)}
								>
									Закрити
								</button>
							</div>
						</div>
						<ul className="flex flex-col gap-y-2  justify-center items-start  w-full ">
							{products.map((item, i) => (
								<Link
									className="w-full "
									to={`/category/${item.collectionName}`}
									key={i}
								>
									<li
										className={`cursor-pointer border rounded-xl p-4 
									}`}
										onClick={() => {
											setActiveLink(item.collectionName);
											setCatOpen(false);
										}}
									>
										{item.collectionName.charAt(0).toUpperCase() +
											item.collectionName.slice(1)}
									</li>
								</Link>
							))}
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Nav;
