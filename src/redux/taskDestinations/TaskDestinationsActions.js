export const GET_TASK_DESTINATIONS_REQUEST = "GET_TASK_DESTINATIONS_REQUEST";
export const SET_TASK_PICKUP_DESTINATION_REQUEST = "SET_TASK_PICKUP_DESTINATION_REQUEST";
export const SET_TASK_DROPOFF_DESTINATION_REQUEST = "SET_TASK_DROPOFF_DESTINATION_REQUEST";
export const GET_TASK_PICKUP_DESTINATION_REQUEST = "GET_TASK_PICKUP_DESTINATION_REQUEST";
export const GET_TASK_DROPOFF_DESTINATION_REQUEST = "GET_TASK_DROPOFF_DESTINATION_REQUEST";

export const GET_TASK_DESTINATIONS_SUCCESS = "GET_TASK_DESTINATIONS_SUCCESS";
export const SET_TASK_PICKUP_DESTINATION_SUCCESS = "SET_TASK_PICKUP_DESTINATION_SUCCESS";
export const SET_TASK_DROPOFF_DESTINATION_SUCCESS = "SET_TASK_DROPOFF_DESTINATION_SUCCESS";
export const GET_TASK_PICKUP_DESTINATION_SUCCESS = "GET_TASK_PICKUP_DESTINATION_SUCCESS";
export const GET_TASK_DROPOFF_DESTINATION_SUCCESS = "GET_TASK_DROPOFF_DESTINATION_SUCCESS";


export const GET_TASK_DESTINATIONS_FAILURE = "GET_TASK_DESTINATIONS_FAILURE";
export const SET_TASK_PICKUP_DESTINATION_FAILURE = "SET_TASK_PICKUP_DESTINATION_FAILURE";
export const SET_TASK_DROPOFF_DESTINATION_FAILURE = "SET_TASK_DROPOFF_DESTINATION_FAILURE";
export const GET_TASK_PICKUP_DESTINATION_FAILURE = "GET_TASK_PICKUP_DESTINATION_FAILURE";
export const GET_TASK_DROPOFF_DESTINATION_FAILURE = "GET_TASK_DROPOFF_DESTINATION_FAILURE";

export function getTaskDestinationRequest(locationUUID) {
    return { type: GET_TASK_DROPOFF_DESTINATION_REQUEST, data: {location_uuid: locationUUID} }
}

export function getTaskDestinationFailure(error) {
    return { type: GET_TASK_DROPOFF_DESTINATION_FAILURE, error }
}

export function getTaskDestinationSuccess(data) {
    return { type: GET_TASK_DROPOFF_DESTINATION_SUCCESS, data }
}

export function setTaskDropoffDestinationRequest(taskUUID, locationUUID) {
    return { type: SET_TASK_DROPOFF_DESTINATION_REQUEST, data: {taskUUID, payload: {location_uuid: locationUUID}} }
}

export function setTaskDropoffDestinationFailure(error) {
    return { type: SET_TASK_DROPOFF_DESTINATION_FAILURE, error }
}

export function setTaskDropoffDestinationSuccess(data) {
    return { type: SET_TASK_DROPOFF_DESTINATION_SUCCESS, data }
}

export function setTaskPickupDestinationRequest(taskUUID, locationUUID) {
    return { type: SET_TASK_PICKUP_DESTINATION_REQUEST, data: {taskUUID, payload: {location_uuid: locationUUID}} }
}

export function setTaskPickupDestinationFailure(error) {
    return { type: SET_TASK_PICKUP_DESTINATION_FAILURE, error }
}

export function setTaskPickupDestinationSuccess(data) {
    return { type: SET_TASK_PICKUP_DESTINATION_SUCCESS, data }
}