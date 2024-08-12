import { Nav, Footer } from '../components';
import { Outlet } from 'react-router-dom';
const LayOut = () => {
	return (
		<main className=" relative bg-[#1d1b20] min-h-full">
			<Nav />
			<Outlet />
			<Footer />
		</main>
	);
};

export default LayOut;
