package com.sencheng.AssignmentSubmissionApp.repository;


import com.sencheng.AssignmentSubmissionApp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//JPA, java persistence api
//JpaRepository<T,ID>
public interface UserRepo extends JpaRepository<User,Long> {


    User findByUsername(String username);

}
