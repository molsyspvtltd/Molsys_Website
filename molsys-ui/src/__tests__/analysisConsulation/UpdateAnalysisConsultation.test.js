import {initMockAxios, resetMockAxios} from "../../../__testshared/shared/frameworks/mock-http";
import {mockNotificationAndConfirmationModules} from "../../../__testshared/shared/frameworks/mock-notification";
import {setupMocksForDoCompleteConsultation} from "../../../__testshared/shared/api/mock-consultation";
import {mountComponentWithStoreAndHistoryAndUrl} from "../../../__testshared/shared/component-helper";
import {getStoreForLoggedInDoctor} from "../../../__testshared/shared/store/mock-store-service";
import React from "react";
import UpdateAnalysisConsultation from "../../analysisConsultation/UpdateAnalysisConsultation";
import {setupMocksForDoGetTestRequestByID} from "../../../__testshared/shared/api/mock-testrequests";


describe('Update AnalysisConsultation  tests', () => {

    beforeEach(() => {

        initMockAxios();

        mockNotificationAndConfirmationModules();

    });

    afterEach(() => {
        resetMockAxios();
        jest.restoreAllMocks()
    });

    it('Update AnalysisConsultation  should load data by id', async () => {

        const id=21
        setupMocksForDoGetTestRequestByID(id)
        setupMocksForDoCompleteConsultation(id);

      const defaultUrl='/update-analysisConsultation/'+id;
      const routePath='/update-analysisConsultation/:id'

        const store= getStoreForLoggedInAnalysis()


       const mountedComponent= mountComponentWithStoreAndHistoryAndUrl( <UpdateAnalysisConsultation/>,{ store,defaultUrl,routePath})




        await mountedComponent.waitForDomLoad();



        const container= mountedComponent.getContainer()


        mountedComponent.setInputValue('#comments', 'nothing to worry')


        mountedComponent.setValue('[id="suggestionSelect"]', "HOME_QUARANTINE")


        await mountedComponent.submitForm("form")

        await mountedComponent.reload();
        mountedComponent.expectLocationToBe("/analysisConsultation-history")







    });



});
