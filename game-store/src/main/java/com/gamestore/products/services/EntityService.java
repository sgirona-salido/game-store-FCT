package com.gamestore.products.services;

import com.gamestore.products.models.BaseEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public abstract class EntityService<T extends BaseEntity> {

    protected abstract MongoRepository<T, String> getRepository();

    public List<T> getAll(){
        return getRepository().findAll();
    }
    public Optional<T> getById(String id){
        return getRepository().findById(id);
    }
    public T post(T entity){
        return getRepository().save(entity);
    }
    public void deleteById(String id){
        getRepository().deleteById(id);
    }


}
