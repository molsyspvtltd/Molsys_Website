import {initMockAxios, resetMockAxios} from "../../../__testshared/shared/frameworks/mock-http";
import {mountComponentWithStoreAndHistory} from "../../../__testshared/shared/component-helper";
import {getStoreForGovernmentAuthority} from "../../../__testshared/shared/store/mock-store-service";
import React from "react";
import AnalysisConsultationHistory from "../../analysisConsultation/AnalysisConsultationHistory";
import {setupMocksForGetMyConsultationHistory} from "../../../__testshared/shared/api/mock-consultation";


describe('View AnalysisConsultation Request History tests', () => {

    beforeEach(() => {
        initMockAxios();

    });

    afterEach(() => {
        resetMockAxios();
        jest.restoreAllMocks()
    });

    it('AnalysisConsultation Request History should load all data', async () => {

        setupMocksForGetMyConsultationHistory();


        const mountedComponent = mountComponentWithStoreAndHistory(<AnalysisConsultationHistory/>,
            getStoreForGovernmentAuthority())


        await mountedComponent.waitForDomLoad();



        const container= mountedComponent.getContainer()

        const buttons =container.find("button").filterWhere((node) => {
            return node.html().toUpperCase().indexOf("UPDATE") >=0;

        });



        expect(buttons).not.toBeNull()
        expect(buttons.length).toBeGreaterThan(0)


        buttons.at(0).simulate('click');
        await mountedComponent.reload();

        mountedComponent.expectLocationContains("update-analysisConsultation")




    });




});

