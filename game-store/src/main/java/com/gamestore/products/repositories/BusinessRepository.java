package com.gamestore.products.repositories;

import com.gamestore.products.models.Business;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BusinessRepository extends MongoRepository<Business, String> {
}
