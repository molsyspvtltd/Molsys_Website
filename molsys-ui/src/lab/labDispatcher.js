import {environment} from "../environment";
import http from "../shared/services/http-service.js";


export const doGetMyLabHistoryUrl = environment.baseUrl + '/api/labrequests';
export const doGetPendingTestRequestsUrl = environment.baseUrl + '/api/labrequests/to-be-tested';
export const doAssignLabResultBaseUrl = environment.baseUrl + '/api/labrequests/assign/';
export const doUpdateLabResultBaseUrl = environment.baseUrl + '/api/labrequests/update/';


export const doGetMyLabHistory = () => {
    return http.get(doGetMyLabHistoryUrl);
}

export const doGetPendingTestRequests = () => {


    return http.get(doGetPendingTestRequestsUrl);
}


export const doAssignLabResult = (testorderID) => {

    let request ={}



    const url = doAssignLabResultBaseUrl +testorderID ;

    return http.put(url, request);


}
export const doUpdateLabResult = (testorderID,labResult) => {



    const url = doUpdateLabResultBaseUrl +testorderID ;

    return http.put(url, labResult);


}
