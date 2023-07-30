package com.sencheng.AssignmentSubmissionApp.service;

import com.sencheng.AssignmentSubmissionApp.entity.Pet;
import com.sencheng.AssignmentSubmissionApp.entity.User;
import com.sencheng.AssignmentSubmissionApp.repository.PetsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Set;

@Service
public class PetService {

    @Autowired
    PetsRepo petsRepo;

    public Pet addAPet(Pet pet, User user){

        pet.setUser(user);
        pet.setAdvertStatus("waiting for a new owner!");

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd");
        LocalDateTime now = LocalDateTime.now();
        pet.setPostedTime(dtf.format(now));
        return petsRepo.save(pet);
    }

    public Set<Pet> findByUser(User user){

        return petsRepo.findByUser(user);

    }
}
