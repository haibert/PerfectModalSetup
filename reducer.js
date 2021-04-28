const GET_PROPS = 'GET_PROPS'

export const passProps = (id) => {
    return {
        type: GET_PROPS,
        id: id,
    }
}

const initialState = {
    id: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROPS:
            return {
                id: action.id,
            }
        default:
            return state
    }
}

export default reducer
