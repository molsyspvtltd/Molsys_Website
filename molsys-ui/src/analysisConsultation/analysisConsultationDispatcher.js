import {environment} from "../environment";
import http from "../shared/services/http-service.js";


export const doGetMyAnalysisConsultationHistoryUrl = environment.baseUrl + '/api/analysisConsultations';
export const doGetPendingAnalysisConsultationsUrl = environment.baseUrl + '/api/analysisConsultations/in-queue';
export const doAssignAnalysisConsultationBaseurl = environment.baseUrl + '/api/analysisConsultations/assign/'  ;
export const doCompleteAnalysisConsultationBaseurl = environment.baseUrl + '/api/analysisConsultations/update/' ;

export const doGetMyAnalysisConsultationHistory = () => {

    return http.get(doGetMyAnalysisConsultationHistoryUrl);

}
export const doGetPendingAnalysisConsultations = () => {
    return http.get(doGetPendingAnalysisConsultationsUrl);


}

export const doAssignAnalysisConsultation = (testRequestId) => {


    let request ={}

    return http.put(doAssignAnalysisConsultationBaseurl  + testRequestId, request);


}
export const doCompleteAnalysisConsultation = (testRequestId,analysisConsultationResult) => {

    // {
    //     "comments": "string",
    //     "suggestion": "NO_ISSUES"
    // }




    return http.put(doCompleteAnalysisConsultationBaseurl + testRequestId, analysisConsultationResult);


}
