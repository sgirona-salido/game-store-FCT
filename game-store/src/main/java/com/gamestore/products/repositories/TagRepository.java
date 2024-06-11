package com.gamestore.products.repositories;

import com.gamestore.products.models.Tag;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;


public interface TagRepository extends MongoRepository<Tag, String> {
    @Query(value = "{'_id': {'$in':?0}}")
    List<Tag> findByIdIn(List<String> ids);
}
