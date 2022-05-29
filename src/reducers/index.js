const initialState = {
  categories: [],
  products: [],
  top_sales: []
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      }
    case 'SET_TOP_SALES':
      return {
        ...state,
        top_sales: action.payload
      }
    default:
      return state
  }
}

export default reducer;