package com.gamestore.products.controllers;

import com.gamestore.products.models.Business;
import com.gamestore.products.services.BusinessService;
import com.gamestore.products.services.EntityService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

/**
 * Class for business used to execute CRUD
 */
@RestController
@RequestMapping("/api/business")
@RequiredArgsConstructor
public class BusinessController extends EntityController<Business> {
    @Override
    protected EntityService<Business> getService() {
        return businessService;
    }

    private final BusinessService businessService;

}
