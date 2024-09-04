// import {environment} from "../environment";
// import http from "../shared/services/http-service.js";


// export const doGetMyLabConsultationHistoryUrl = environment.baseUrl + '/api/labConsultations';
// export const doGetPendingLabConsultationsUrl = environment.baseUrl + '/api/labConsultations/in-queue';
// export const doAssignLabConsultationBaseurl = environment.baseUrl + '/api/labConsultations/assign/'  ;
// export const doCompleteLabConsultationBaseurl = environment.baseUrl + '/api/labConsultations/update/' ;

// export const doGetMyLabConsultationHistory = () => {

//     return http.get(doGetMyLabConsultationHistoryUrl);

// }
// export const doGetPendingLabConsultations = () => {
//     return http.get(doGetPendingLabConsultationsUrl);


// }

// export const doAssignLabConsultation = (testRequestId) => {


//     let request ={}

//     return http.put(doAssignLabConsultationBaseurl  + testRequestId, request);


// }
// export const doCompleteLabConsultation = (testRequestId,labConsultationResult) => {

//     // {
//     //     "comments": "string",
//     //     "suggestion": "NO_ISSUES"
//     // }




//     return http.put(doCompleteLabConsultationBaseurl + testRequestId, labConsultationResult);


// }

// labConsultationDispatcher.js

import { environment } from "../environment";
import http from "../shared/services/http-service.js";

export const doGetMyLabConsultationHistoryUrl =
  environment.baseUrl + "/api/labConsultations";
export const doGetPendingLabConsultationsUrl =
  environment.baseUrl + "/api/labConsultations/in-queue";
export const doAssignLabConsultationBaseurl =
  environment.baseUrl + "/api/labConsultations/assign/";
export const doCompleteLabConsultationBaseurl =
  environment.baseUrl + "/api/labConsultations/update/";

export const doGetMyLabConsultationHistory = () => {
  return http.get(doGetMyLabConsultationHistoryUrl);
};

export const doGetPendingLabConsultations = () => {
  return http.get(doGetPendingLabConsultationsUrl);
};

export const doAssignLabConsultation = (testRequestId) => {
  let request = {};

  return http.put(doAssignLabConsultationBaseurl + testRequestId, request);
};

export const doCompleteLabConsultation = (testRequestId, labConsultationResult) => {
  return http.put(doCompleteLabConsultationBaseurl + testRequestId, labConsultationResult);
};

export const doGetTestRequestByID = (testRequestId) => {
  return http.get(`${environment.baseUrl}/api/testRequests/${testRequestId}`);
};
