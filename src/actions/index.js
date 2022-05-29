import * as allConst from './constants';

const setProducts = (data) => {
  return {
    type: allConst.SET_PRODUCTS,
    payload: data
  }
  }

const setCategories = (data) => {
  return {
      type: allConst.SET_CATEGORIES,
      payload: data
  }
}

const setTopSales = (data) => {
  return  {
      type: allConst.SET_TOP_SALES,
      payload: data
  }
}

export {
  setProducts,
  setCategories,
  setTopSales
}


