package com.gamestore.products.repositories;

import com.gamestore.products.models.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ProductRepository extends MongoRepository<Product, String> {
    List<Product> findByTags(String tags);
    @Query(value = "{'name': {$regex : ?0, $options: 'i'}}")
    List<Product> findByNameRegex(String name);
}
