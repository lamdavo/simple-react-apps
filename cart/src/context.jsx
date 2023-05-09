import { createContext, useReducer, useEffect, useContext } from "react";
import reducer from "./Reducer";
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from "./actions";
import cartItems from "./data";
import { getTotals } from "./utils";
const url = "https://course-api.com/react-useReducer-cart-project";

const GlobalContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};


const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {totalAmount, totalPrice} = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  }

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: {id} });
  };
  
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: {id} });
  };

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: {id}});
  };

  const fetchData = async () => {
    dispatch({type: LOADING});
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type: DISPLAY_ITEMS, payload: {cart}});
  };

useEffect(() => {
    fetchData();
}, []);


  return (
    <GlobalContext.Provider value={{ ...state, clearCart, remove, decrease, increase, totalAmount, totalPrice }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

export const useGlobalContext = () => useContext(GlobalContext);


