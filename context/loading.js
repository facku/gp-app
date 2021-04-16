import React, { createContext, useReducer, useMemo } from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		case 'switch':
			return { ...state, loading: !state.loading };
		default:
			return state;
	}
};

export const LoadingContext = createContext(null);

export const initialState = { loading: true };

export const LoadingContextProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	// const values = useMemo(() => ({ state, dispatch }), [ state ]);

	return <LoadingContext.Provider value={{ state, dispatch }}>{children}</LoadingContext.Provider>;
};
