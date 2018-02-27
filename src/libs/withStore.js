import { createStore } from 'redux'
import reducer from "../reducers/reducers"
import withRedux from "next-redux-wrapper";

let store = createStore(reducer)

const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
};

const withStore = () => {
	return withRedux(makeStore)
}

export default withStore;