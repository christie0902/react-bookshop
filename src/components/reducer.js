//                          current state
//                            of the app
//                                |
//                                |   incoming action
export default function reducer(state, action) {
  // state.currency = 'EUR' // WRONG, NEVER MODIFY THE ORIGINAL STATE

  switch (action.type) {
    case "currency/set":
      return {
        // CORRECT: always create a new object
        ...state,
        currency: action.payload,
      };

    case "currency/reset":
      return {
        // CORRECT: always create a new object
        ...state,
        currency: "EUR",
      };

    case "user/set":
      return {
        // CORRECT: always create a new object
        ...state,
        user: action.payload,
      };

    case "language/set":
      return {
        // CORRECT: always create a new object
        ...state,
        language: action.payload,
      };

    case "book/add-to-cart":
      // any logic to prepare the new state

      return {
        // CORRECT: always create a new object
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload.title],
        totalPrice: state.totalPrice + action.payload.price,
      };
    case "book/remove-from-cart":
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (title) => title !== action.payload.title
        ),
        totalPrice: state.totalPrice - action.payload.price,
      };
  }

  // the action was not recognized, return the state unchanged
  return state;
}
