package com.sencheng.AssignmentSubmissionApp.repository;

import com.sencheng.AssignmentSubmissionApp.entity.Pet;
import com.sencheng.AssignmentSubmissionApp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface PetsRepo extends JpaRepository<Pet,Long> {

    Set<Pet> findByUser(User user);
    List<Pet> findAll();

//
}
