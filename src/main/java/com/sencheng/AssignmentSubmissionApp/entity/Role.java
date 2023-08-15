package com.sencheng.AssignmentSubmissionApp.entity;

import lombok.Data;
import org.hibernate.annotations.Proxy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Data

public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //indicate persistent provider must assign primary key

    private Long id;
    private String name;

}
