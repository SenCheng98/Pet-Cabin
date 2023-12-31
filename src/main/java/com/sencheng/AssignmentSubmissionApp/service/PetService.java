package com.sencheng.AssignmentSubmissionApp.service;

import com.sencheng.AssignmentSubmissionApp.entity.Pet;
import com.sencheng.AssignmentSubmissionApp.entity.User;
import com.sencheng.AssignmentSubmissionApp.repository.PetsRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@AllArgsConstructor
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

    public List<Pet> findAll(){
        return petsRepo.findAll();
    }

    public Optional<Pet> findById(Long id){
        return petsRepo.findById(id);
    }

    public List<Pet> findByKeyWord(String keyword){

        return petsRepo.searchByKeyWord(keyword);
    }

    public List<Pet> findByType(String type){
        return petsRepo.findByType(type);
    }
}
