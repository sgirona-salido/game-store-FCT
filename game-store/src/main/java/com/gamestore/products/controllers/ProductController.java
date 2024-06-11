package com.gamestore.products.controllers;

import com.gamestore.products.dto.ProductItemDto;
import com.gamestore.products.models.*;
import com.gamestore.products.services.EntityService;
import com.gamestore.products.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Class for products and his children that execute CRUD
 */
@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController extends EntityController<Product>{
    @Override
    protected EntityService<Product> getService() {
        return productServices;
    }
    private final ProductService productServices;

    //region Products
    @GetMapping("/items")
    public List<ProductItemDto> getProductItemsDto(){
        return productServices.getProductItemsDto();
    }
    /**
     * Function to get a list of products that have the same Tag ID
     * @param tagId Tag ID
     * @return Returns a Products list that contains the tag
     */
    @GetMapping(path = "/tag/{tagId}")
    public List<Product> getByTagId(@PathVariable("tagId") String tagId){
        return  productServices.findByTags(tagId);
    }

    /**
     * Function used to search any product that contains name
     * @param name Regex want to search
     * @return Returns a list of Products where product name contains name
     */
    @GetMapping(path = "/name/{name}")
    public List<ProductItemDto> getByName(@PathVariable("name") String name) {
        return productServices.findByNameRegex(name);
    }

    @GetMapping("/countTags")
    public Map<String, Long> getCountByTag(){
        return productServices.countAllTags();
    }
    //endregion

    //region Videogame
    /**
     * Function to create a new Videogame
     * @param video Json that contains Video Obj
     * @return Returns the created product
     */
    @PostMapping("/videogame")
    public Product createVideogame(@RequestBody Video video){
        return productServices.addProduct(video);
    }
    //endregion

    //region Boardgame
    /**
     * Function to create a new Boardgame
     * @param board Json that contains Board Obj
     * @return Returns the created product
     */
    @PostMapping("/boardgame")
    public Product createBoardgame(@Validated @RequestBody Board board){
        return productServices.addProduct(board);
    }
    //endregion

    //region Accesory
    /**
     * Function to create a new Accessory
     * @param accesories Json that contains Accesories Obj
     * @return Returns the created product
     */
    @PostMapping("/accesories")
    public Product createAccesory(@RequestBody Accesories accesories){
        return productServices.addProduct(accesories);
    }
    //endregion
}
