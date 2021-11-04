import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext(undefined);

const AppContextProvider = ({ children }) => {
	const [store, setStore] = useState({
		favorites: [],
		pathurl: "https://www.swapi.tech/api/",
		apiurl: "http://127.0.0.1:3000",
		token: undefined
	});

	const actions = {
		
		},

		setToken: token => {
			localStorage.setItem("token", token);
			setStore(prev => ({
				...prev,
				token: token
			}));
		},
		deleteToken: () => {
			localStorage.removeItem("token");
			setStore(prev => ({
				...prev,
				token: undefined
			}));
		},
		prueba: () => {
			console.log(store.favorites);
		}
	};

	const context = { store, actions };

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
	children: PropTypes.node
};

export default AppContextProvider;

