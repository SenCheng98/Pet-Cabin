package com.sencheng.AssignmentSubmissionApp.entity;


import lombok.Data;
import org.hibernate.annotations.Proxy;

import javax.persistence.*;
import java.util.Date;


@Entity //will create table in database called assignment(based on Class name)
@Data

public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //indicate persistent provider must assign primary key
    private Long id;
    private String AdvertStatus;
    private String breed;
    private Integer price;
    private String name;
    private String description;
    private String type;
    private String imageUrl;
    private String postedTime;

    //TODO: private User assignTo;

    @ManyToOne(optional = false)
    private User user;

}
