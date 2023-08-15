package com.sencheng.AssignmentSubmissionApp.repository;

import com.sencheng.AssignmentSubmissionApp.entity.Pet;
import com.sencheng.AssignmentSubmissionApp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface PetsRepo extends JpaRepository<Pet,Long> {

    Set<Pet> findByUser(User user);
    List<Pet> findAll();

    @Query("SELECT p FROM Pet p WHERE p.breed LIKE %?1%")
    List<Pet> searchByKeyWord(String keyword);
    List<Pet> findByType(String type);


}
