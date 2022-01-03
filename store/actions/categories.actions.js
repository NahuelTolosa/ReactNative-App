export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR';

export const getCategories = async (dispatch) => {
    
    try {
        const response = await fetch('http://fakestoreapi.com/products/categories');
        const data = await response.json();
        
        dispatch({ //Envia datos al reducer
            type: GET_CATEGORIES,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: GET_CATEGORIES_ERROR,
            payload: error.message
        })
        
    }

}