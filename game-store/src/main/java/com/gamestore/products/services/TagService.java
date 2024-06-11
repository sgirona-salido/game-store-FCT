package com.gamestore.products.services;

import com.gamestore.products.models.Tag;
import com.gamestore.products.repositories.TagRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@AllArgsConstructor
public class TagService extends EntityService<Tag>{

    private final TagRepository tagRepository;

    @Override
    protected MongoRepository<Tag, String> getRepository() {
        return tagRepository;
    }

    public List<Tag> getByIdIn(List<String> ids) {
        if (ids == null) {
            return tagRepository.findAll();
        } else {
            return tagRepository.findByIdIn(ids);
        }
    }
    public List<Tag> postAll(List<Tag> tags) {
        return tagRepository.saveAll(tags);
    }

}
