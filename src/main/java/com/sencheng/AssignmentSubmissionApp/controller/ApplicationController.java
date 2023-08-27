package com.sencheng.AssignmentSubmissionApp.controller;


import com.sencheng.AssignmentSubmissionApp.entity.MyUserDetails;
import com.sencheng.AssignmentSubmissionApp.entity.Pet;
import com.sencheng.AssignmentSubmissionApp.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/myServer/apply")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @PostMapping("/{id}")
    public ResponseEntity<?> addApplication(@AuthenticationPrincipal MyUserDetails myUserDetails, @PathVariable Long id){

        System.out.println("applying... id=" + id);

        return ResponseEntity.ok(applicationService.addApplication(myUserDetails.getUser(), id));
    }

    @GetMapping("/getstatus/{id}")
    public ResponseEntity<?> getStatus(@AuthenticationPrincipal MyUserDetails myUserDetails, @PathVariable Long id){

        return ResponseEntity.ok(applicationService.getStatus(myUserDetails.getUser(), id));
    }

}
