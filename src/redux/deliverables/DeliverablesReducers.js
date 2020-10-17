import update from "immutability-helper";
import {
    GET_DELIVERABLES_SUCCESS,
    ADD_DELIVERABLE_SUCCESS,
    UPDATE_DELIVERABLE_SUCCESS,
    GET_AVAILABLE_DELIVERABLES_SUCCESS, GET_DELIVERABLES_FAILURE, DELETE_DELIVERABLE_SUCCESS, DELETE_DELIVERABLE_FAILURE
} from "./DeliverablesActions";

const initialState = {
    deliverables: [],
    error: null
}

export function deliverables(state = initialState, action) {
    switch (action.type) {
        case ADD_DELIVERABLE_SUCCESS:
            return {
                deliverables:
                    [
                        ...state.deliverables,
                        {
                            ...action.data
                        }
                    ],
                error: null
            };
        case UPDATE_DELIVERABLE_SUCCESS:
            let result = state.deliverables.find(deliverable => deliverable.uuid === action.data.deliverableUUID);
            if (result) {
                const updated_item = {...result, ...action.data.payload};
                const index = state.deliverables.indexOf(result);
                return {deliverables: update(state.deliverables, {[index]: {$set: updated_item}}), error: null};
            } else {
                return state
            }
        case GET_DELIVERABLES_SUCCESS:
            return {deliverables: action.data, error: null};
        case GET_DELIVERABLES_FAILURE:
            return {deliverables: [], error: action.error}
        case DELETE_DELIVERABLE_SUCCESS:
            let result_delete = state.deliverables.find(deliverable => deliverable.uuid === action.data);
            if (result_delete) {
                const index = state.deliverables.indexOf(result_delete);
                return {deliverables: update(state.deliverables, {$splice: [[index, 1]]}), error: null};
            } else {
                return state;
            }
        case DELETE_DELIVERABLE_FAILURE:
            return {deliverables: state.deliverables, error: action.error}
        default:
            return state
    }
}

const initialStateAvailables = {
    deliverables: [],
    error: null
}

export function availableDeliverables(state = initialStateAvailables, action) {
    switch (action.type) {
        case GET_AVAILABLE_DELIVERABLES_SUCCESS:
            return {deliverables: action.data, error: null};
        default:
            return state
    }
}
