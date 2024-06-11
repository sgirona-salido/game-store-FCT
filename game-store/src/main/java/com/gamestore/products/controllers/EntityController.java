package com.gamestore.products.controllers;

import com.gamestore.products.models.BaseEntity;
import com.gamestore.products.services.EntityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

public abstract class EntityController<T extends BaseEntity> {

    protected abstract EntityService<T> getService();


    @GetMapping
    public List<T> getAll(){
        return getService().getAll();
    }

    @GetMapping("{id}")
    public Optional<T> getById(@PathVariable("id") String id){
        return getService().getById(id);
    }

    @PostMapping
    public T create(@RequestBody T entity){
        return getService().post(entity);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") String id){
        getService().deleteById(id);
    }
}
