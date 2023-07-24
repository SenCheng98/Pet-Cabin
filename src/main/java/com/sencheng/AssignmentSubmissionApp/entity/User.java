package com.sencheng.AssignmentSubmissionApp.entity;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "users")
@Data
public class User implements UserDetails {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) //indicate persistent provider must assign primary key
    private Long id;
    private String username;
    private String password;
    private String fullname;
    private String email;
    private String address;
    private String phone;
    private LocalDate cohortStartDate;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        List<GrantedAuthority> roles = new ArrayList<>();
        roles.add(new Authority("ROLE_STUDENT"));
        return roles;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    //private List<Assignment> assignments = new ArrayList<>();



}
