import { LayOut } from './components';
import { DataCollection } from './api/Data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryProduct from './sections';
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LayOut />}>
					<Route
						index
						element={
							<DataCollection>
								<CategoryProduct />
							</DataCollection>
						}
					/>
					<Route path='ciders' element={}/>
					<Route path='snacks' element={}/>
					<Route path='softdrinks' element={}/>
					<Route path='alchohol' element={}/>
					<Route path='pizza' element={}/>
					<Route path='hotdog' element={}/>
					<Route path='drinks' element={}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
