import { Nav, Footer } from './components';
import { DataCollection } from './api/Data';
const App = () => {
	return (
		<main className=" relative bg-[#1d1b20] h-full">
			<Nav />
			<DataCollection></DataCollection>
			<Footer />
		</main>
	);
};

export default App;
