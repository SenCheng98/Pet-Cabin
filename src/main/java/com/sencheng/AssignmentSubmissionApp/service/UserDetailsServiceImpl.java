package com.sencheng.AssignmentSubmissionApp.service;

import com.sencheng.AssignmentSubmissionApp.entity.MyUserDetails;
import com.sencheng.AssignmentSubmissionApp.entity.User;
import com.sencheng.AssignmentSubmissionApp.repository.UserRepo;
import com.sencheng.AssignmentSubmissionApp.util.MyPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {

//the UserDetailsService interface is used by other class in Spring.
//The benefit of use this interface is we can define our own way  to retrieve userDetails only by using @Bean

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private MyPasswordEncoder myPasswordEncoder;


    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        User user = userRepo.findByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("Could not find user");
        }

        return new MyUserDetails(user);
    }

    public void save(User user){

        user.setPassword(myPasswordEncoder.encodePassword(user.getPassword()));
        userRepo.save(user);
    }


}
