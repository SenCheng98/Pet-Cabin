package com.sencheng.AssignmentSubmissionApp.repository;

import com.sencheng.AssignmentSubmissionApp.entity.Application;
import com.sencheng.AssignmentSubmissionApp.entity.Pet;
import com.sencheng.AssignmentSubmissionApp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ApplicationRepo extends JpaRepository<Application,Long> {

    @Query("SELECT p FROM Application p WHERE p.user= :user AND p.petId= :id")
    Application isApplicationExisting(@Param("user") User user, @Param("id") Long id);
}
