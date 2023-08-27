package com.sencheng.AssignmentSubmissionApp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.Optional;

@Entity
@Table(name = "application")
@Data
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //indicate persistent provider must assign primary key
    private Long id;
    private Integer status;
    private Long petId;

    @ManyToOne
    private User user;

    public Application (){}
    public  Application (User user, Long id, Integer status){
        this.user = user;
        this.petId = id;
        this.status = status;
    }

}
