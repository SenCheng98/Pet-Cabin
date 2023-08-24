package com.sencheng.AssignmentSubmissionApp.repository;

import com.sencheng.AssignmentSubmissionApp.entity.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;


import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class UserRepoTest {

    @Autowired
    private UserRepo undertest;

    @AfterEach
    void tearDown(){
        undertest.deleteAll();
    }

    @Test
    void checkIfUserSaved(){

        User user = new User();
        user.setUsername("Test1");
        user.setPassword("123");
        user.setPostcode("G20 6BS");
        user.setPhone("123");


        User savedUser = undertest.save(user);
        assertNotNull(savedUser); // Assert that the savedUser is not null
        assertNotNull(savedUser.getId()); // Assuming User has an ID field, assert that it's generated and not null
        assertEquals("Test1", savedUser.getUsername()); // Assert username matches
        assertEquals("G20 6BS", savedUser.getPostcode()); // Assert postcode matches
        assertEquals("123", savedUser.getPhone()); // Assert phone number matches
    }

    @Test
    void checkIfUserExistingUsername() {
        User user = new User();
        user.setUsername("Test1");
        user.setPassword("123");
        user.setPostcode("G20 6BS");
        user.setPhone("123");

        undertest.save(user);

        User checkUser = undertest.findByUsername("Test1");
        assertNotNull(checkUser); // Assert that the savedUser is not null
        assertNotNull(checkUser.getId()); // Assuming User has an ID field, assert that it's generated and not null
        assertEquals("Test1", checkUser.getUsername()); // Assert username matches
        assertEquals("G20 6BS", checkUser.getPostcode()); // Assert postcode matches
        assertEquals("123", checkUser.getPhone()); // Assert phone number matches
    }

}