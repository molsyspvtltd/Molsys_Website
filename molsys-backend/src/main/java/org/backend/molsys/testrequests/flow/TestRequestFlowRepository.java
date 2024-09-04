package org.backend.molsys.testrequests.flow;

import org.springframework.data.jpa.repository.JpaRepository;
import org.backend.molsys.testrequests.TestRequest;

import java.util.List;
import java.util.Optional;


public interface TestRequestFlowRepository extends JpaRepository<TestRequestFlow,Long> {


    Optional<TestRequestFlow> findById(Long id);



    void deleteById(Long id);





    List<TestRequestFlow> findByRequest(TestRequest request);


}
