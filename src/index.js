import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path='/' element={<App /> }>
//             <Route path='/' element={<Navigation />} />

//             <Route path='/' element={<MainContent />} >
                // <Route path='/' element={<Home />} >
                //     <Route path='/' element={<Movies />} />
                //     <Route path='/series' element={<Series/>} />
                // </Route>
                // <Route path='awards' element={<Awards/>} />
                // <Route path='celebrities' element={<Celebrities/>} />
                // <Route path='discover' element={<Discover/>} />
//             </Route>

//             <Route path='/' element={<PersonalContent />} />
//         </Route>
//     )
// );