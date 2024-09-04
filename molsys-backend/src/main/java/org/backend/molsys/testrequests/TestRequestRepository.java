package org.backend.molsys.testrequests;

import org.backend.molsys.users.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface TestRequestRepository extends JpaRepository<TestRequest,Long> {


	Optional<TestRequest> findByOrderID(Long id);

	List<TestRequest> findByCreatedBy(User user);

//	Optional<TestRequest> findByRequestIdAndStatus(Long id,RequestStatus status);
Optional<TestRequest> findByOrderIDAndStatus(Long id, RequestStatus status);
	Optional<TestRequest> findByCreatedByAndOrderID(User user, Long id);
//	Optional<TestRequest> findByCreatedByAndRequestId(User user,Long id);
//	List<TestRequest> findByEmail(String email);
//	List<TestRequest> findByEmailOrPhoneNumber(String email,String phoneNumber);

//	List<TestRequest> findByPhoneNumber(String phoneNumber);



	void deleteById(Long id);




	
	List<TestRequest> findByService(String service);
//	List<TestRequest> findByCategory(String category);

	List<TestRequest> findByStatus(RequestStatus status);






}
