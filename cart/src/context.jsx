import { createContext, useReducer, useEffect, useContext } from "react";
import reducer from "./Reducer";
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from "./actions";
import cartItems from "./data";
const GlobalContext = createContext();



const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};



const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: {id}});
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: {id}});
  }

  return (
    <GlobalContext.Provider value={{ ...state, clearCart, remove, increase }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

export const useGlobalContext = () => useContext(GlobalContext);


