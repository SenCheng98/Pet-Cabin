package com.sencheng.AssignmentSubmissionApp.controller;



import com.sencheng.AssignmentSubmissionApp.entity.MyUserDetails;
import com.sencheng.AssignmentSubmissionApp.entity.Pet;
import com.sencheng.AssignmentSubmissionApp.entity.User;
import com.sencheng.AssignmentSubmissionApp.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;


@RestController
@RequestMapping("/myServer/pet")
public class PetController {

    @Autowired
    PetService petService;

    @PostMapping("/postAds")
    public ResponseEntity<?> postPets(@RequestBody Pet pet, @AuthenticationPrincipal MyUserDetails myUserDetails){

        return ResponseEntity.ok(petService.addAPet(pet,myUserDetails.getUser()));
    }

    @GetMapping("")
    public ResponseEntity<Set<Pet>> getPets(@AuthenticationPrincipal MyUserDetails myUserDetails){

        return ResponseEntity.ok(petService.findByUser(myUserDetails.getUser()));

    }
    @GetMapping("/getAll")
    public ResponseEntity<?> getAllPets(){

        System.out.println("get in...");
        return ResponseEntity.ok(petService.findAll());
    }

    @GetMapping("/getPetDetails/{id}")
    public ResponseEntity<?> getPetDetails(@PathVariable Long id){

        System.out.println("getting petDetails... id=" + id);
        Optional<Pet> pet = petService.findById(id);
        return ResponseEntity.ok(pet);
    }

    @GetMapping("/searchPets/{keyword}")
    public ResponseEntity<?> getPetsByKeyWord(@PathVariable String keyword){
        List<Pet> pet = petService.findByKeyWord(keyword);
        return ResponseEntity.ok(pet);
    }


    @GetMapping("/getByType/{type}")
    public ResponseEntity<?> getByType(@PathVariable String type){

        System.out.println("get in");
        return ResponseEntity.ok(petService.findByType(type));
    }

}
