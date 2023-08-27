package com.sencheng.AssignmentSubmissionApp.service;


import com.sencheng.AssignmentSubmissionApp.entity.Application;
import com.sencheng.AssignmentSubmissionApp.entity.Pet;
import com.sencheng.AssignmentSubmissionApp.entity.User;
import com.sencheng.AssignmentSubmissionApp.repository.ApplicationRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@AllArgsConstructor
@Service
public class ApplicationService {


    @Autowired
    ApplicationRepo applicationRepo;

    public Application addApplication(User user, Long id){

        Application application = new Application(user, id,1);
        if(applicationRepo.isApplicationExisting(user, id) == null){

            return applicationRepo.save(application);
        }else{
            return applicationRepo.isApplicationExisting(user, id);
        }
    }

    public Integer getStatus(User user, Long id){

        if(applicationRepo.isApplicationExisting(user, id) == null){

            return 0;
        }else{
            return applicationRepo.isApplicationExisting(user, id).getStatus();
        }
    }


}
