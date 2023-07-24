package com.sencheng.AssignmentSubmissionApp.entity;


import lombok.Data;

import javax.persistence.*;


@Entity //will create table in database called assignment(based on Class name)
@Data
public class Assignment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //indicate persistent provider must assign primary key
    private Long id;
    private String status;
    private String githubUrl;
    private String branch;
    private String codeReviewUrl;
    //TODO: private User assignTo;

    @ManyToOne(optional = false)
    private User user;

}
