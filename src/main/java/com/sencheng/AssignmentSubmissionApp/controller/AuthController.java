package com.sencheng.AssignmentSubmissionApp.controller;


import com.sencheng.AssignmentSubmissionApp.dto.AuthCredentialsRequest;
import com.sencheng.AssignmentSubmissionApp.entity.MyUserDetails;
import com.sencheng.AssignmentSubmissionApp.entity.User;
import com.sencheng.AssignmentSubmissionApp.service.UserDetailsServiceImpl;
import com.sencheng.AssignmentSubmissionApp.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
public class AuthController {


    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    UserDetailsServiceImpl userDetailsService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthCredentialsRequest request) {
        try {

            System.out.println(request);
            Authentication authenticate = authenticationManager
                    .authenticate(
                            new UsernamePasswordAuthenticationToken(
                                    request.getUsername(), request.getPassword()
                            )
                    );

            //User user = (User) authenticate.getPrincipal();
            MyUserDetails myUserDetails = (MyUserDetails) authenticate.getPrincipal();

            //return a token
            return ResponseEntity.ok()
                    .header(
                            HttpHeaders.AUTHORIZATION,
                            jwtUtil.generateToken(myUserDetails)
                    )
                    .body(myUserDetails);
        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

//    @PostMapping("/sign-up")
//    public ResponseEntity<?> login(@RequestBody AuthCredentialsRequest request) {
//
//
//    }

    @PostMapping("/sign-up")
    public Boolean signUp(@RequestBody User user){

        userDetailsService.save(user);
        return true;
    }


}
