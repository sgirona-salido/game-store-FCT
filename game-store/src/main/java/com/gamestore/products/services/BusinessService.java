package com.gamestore.products.services;

import com.gamestore.products.models.Business;
import com.gamestore.products.repositories.BusinessRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class BusinessService extends EntityService<Business>{

    private final BusinessRepository businessRepository;

    @Override
    protected MongoRepository<Business, String> getRepository() {
        return businessRepository;
    }
}
