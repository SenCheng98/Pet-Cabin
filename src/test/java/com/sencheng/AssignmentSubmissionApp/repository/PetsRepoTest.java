package com.sencheng.AssignmentSubmissionApp.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;


@DataJpaTest
public class PetsRepoTest {

    @Autowired
    private PetsRepo undertest;

    @Test
    void findByUser() {

    }

    @Test
    void findAll() {
    }

    @Test
    void searchByKeyWord() {
    }

    @Test
    void findByType() {
    }
}