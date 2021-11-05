import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext(undefined);

const AppContextProvider = ({ children }) => {
	const [store, setStore] = useState({
		token: undefined
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

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
	children: PropTypes.node
};

export default AppContextProvider;
