import { httpGet } from '../utility/api';
import constant from '../utility/constant';
import ActionType from "../utility/actionTypes";


export const getList = (dispatch, number = 1) => {
    dispatch({
        type: ActionType.GET_LIST_REQUEST
    })
    httpGet(`${constant.GET_LIST_END_POINT + number}`).then((response) => {
        dispatch({
            listData: response.data.data,
            type: ActionType.GET_LIST_SUCCESS
        });

    }).catch(error => {
        dispatch({
            type: ActionType.GET_LIST_FAIL
        });

    });

};

const reducer = (state = {}, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_REQUEST: {
            return {
                ...state,
                fetching: true,
            };
        }
        case ActionType.GET_LIST_SUCCESS: {
            return {
                ...state,
                fetching: false,
                listData: action.listData,
            };
        }
        case ActionType.GET_LIST_FAIL: {
            return {
                ...state,
                fetching: false,
                error: action.error,
            };
        }

        default: {
            return state;
        }
    }
};
export default reducer;
