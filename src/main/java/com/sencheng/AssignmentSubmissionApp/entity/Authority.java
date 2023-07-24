package com.sencheng.AssignmentSubmissionApp.entity;

import lombok.Data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Entity
@Data
public class Authority implements GrantedAuthority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //indicate persistent provider must assign primary key
    private Long id;
    private String role;

    @ManyToOne()
    private User user;

    public Authority(String role){

        this.role = role;
    }
    @Override
    public String getAuthority() {
        return this.role;
    }
}
