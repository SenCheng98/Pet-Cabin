package com.sencheng.AssignmentSubmissionApp.controller;



import com.sencheng.AssignmentSubmissionApp.entity.Pet;
import com.sencheng.AssignmentSubmissionApp.entity.User;
import com.sencheng.AssignmentSubmissionApp.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/api/pet")
public class PetController {

    @Autowired
    PetService petService;


    @PostMapping("/postAds")
    public ResponseEntity<?> postPets(@RequestBody Pet pet, @AuthenticationPrincipal User user){

        return ResponseEntity.ok(petService.addAPet(pet,user));
    }

    @GetMapping("")
    public ResponseEntity<?> getPets(@AuthenticationPrincipal User user){

        return ResponseEntity.ok(petService.findByUser(user));
    }
    @GetMapping("/getAll")
    public ResponseEntity<?> getAllPets(){

        return ResponseEntity.ok(petService.findAll());
    }

    @GetMapping("/getPetDetails/{id}")
    public ResponseEntity<?> getPetDetails(@PathVariable Long id){

        System.out.println("getting petDetails... id=" + id);
        Optional<Pet> pet = petService.findById(id);
        return ResponseEntity.ok(pet);
    }
}
