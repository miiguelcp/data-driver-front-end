import React, { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext(undefined);

const AppContextProvider = ({ children }) => {
	const [store, setStore] = useState({
		token: undefined,
		URL: "http://127.0.0.1:3500"
	});

	const actions = {
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
		}
	};

	const context = { store, actions };
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			setStore(prev => ({
				...prev,
				token: token
			}));
		}
	}, []);
	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
	children: PropTypes.node
};

export default AppContextProvider;
