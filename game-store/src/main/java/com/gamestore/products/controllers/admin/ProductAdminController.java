package com.gamestore.products.controllers.admin;

import com.gamestore.products.controllers.EntityController;
import com.gamestore.products.models.Product;
import com.gamestore.products.models.Video;
import com.gamestore.products.services.EntityService;
import com.gamestore.products.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/products")
@RequiredArgsConstructor
public class ProductAdminController extends EntityController<Product> {
    @Override
    protected EntityService<Product> getService() {
        return productServices;
    }
    private final ProductService productServices;

    //region Videogame
    @PostMapping("/videogame")
    public Product createVideogame(@RequestBody Video video){
        return productServices.addProduct(video);
    }
    //endregion

}
