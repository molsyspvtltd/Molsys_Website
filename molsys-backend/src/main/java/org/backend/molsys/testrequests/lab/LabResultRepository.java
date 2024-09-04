package org.backend.molsys.testrequests.lab;

import org.backend.molsys.users.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.backend.molsys.testrequests.TestRequest;

import java.util.List;
import java.util.Optional;


public interface LabResultRepository extends JpaRepository<LabResult,Long> {


    Optional<LabResult> findById(Long id);



    void deleteById(Long id);





    List<LabResult> findBySales(User user);
    Optional<LabResult> findBySalesAndRequest(User user,TestRequest testRequest);
    Optional<LabResult> findByRequest(TestRequest request);



}
