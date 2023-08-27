package com.sencheng.AssignmentSubmissionApp.service;

import com.sencheng.AssignmentSubmissionApp.entity.Pet;
import com.sencheng.AssignmentSubmissionApp.entity.User;
import com.sencheng.AssignmentSubmissionApp.repository.PetsRepo;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;


import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class PetServiceTest {


    @Mock
    PetsRepo petsRepo;

    private PetService undertest;
    private AutoCloseable autoClosable;

    @BeforeAll
    void setUp(){
        autoClosable = MockitoAnnotations.openMocks(this); // Initialize mocks
        undertest = new PetService(petsRepo);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoClosable.close();
    }


    @Test
    void addAPet() {
        User user = new User();
        user.setUsername("Test1");
        user.setPassword("123");
        user.setPostcode("G20 6BS");
        user.setPhone("123");

        Pet pet = new Pet();
        pet.setBreed("bull dog");
        pet.setAdvertStatus("0");
        pet.setPrice(900);
        pet.setType("dog");

            //when
            undertest.addAPet(pet, user);
            //then
            ArgumentCaptor<Pet> petArgumentCaptor = ArgumentCaptor.forClass(Pet.class);

            verify(petsRepo).save(petArgumentCaptor.capture());

            Pet capturedPet = petArgumentCaptor.getValue();

            assertThat(capturedPet).isEqualTo(pet);

    }

    @Test
    void findByUser() {
    }

    @Test
    void findAll() {

        //when
        undertest.findAll();
        //then
        verify(petsRepo).findAll();
    }

    @Test
    void findById() {
    }

    @Test
    void findByKeyWord() {
    }

    @Test
    void findByType() {
    }
}