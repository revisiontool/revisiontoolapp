import React from 'react';
import Footer from '../components/globalcomponents/footer';
import Navbar from '../components/globalcomponents/navbar';
import '../styles/globals.css';
import { wrapper, persistor } from "../redux/store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';

function App({ Component, ...pageProps }) {
    const { store, props } = wrapper.useWrappedStore(pageProps);
    const router = useRouter();
    
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <UserProvider>
                    {/* Conditionally render Navbar */}
                    {shouldShowGlobalComponents(router) && <Navbar />}
                    <Component {...pageProps} />
                    {shouldShowGlobalComponents(router) && <Footer />}
                </UserProvider>
            </PersistGate>
        </Provider>
    );
}

// Add the routes where you want the Navbar to appear
const navbarRoutes = ['/aboutus', '/', '/faq', '/info', '/privacypolicy', '/terms-and-conditions', '/contact'];

// Function to determine whether the Navbar should be displayed
const shouldShowGlobalComponents = (router) => {
    // Check if the current route is in the array of navbarRoutes
    return navbarRoutes.includes(router.pathname);
}

export default App;
