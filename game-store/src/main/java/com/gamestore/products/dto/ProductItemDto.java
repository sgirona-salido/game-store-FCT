package com.gamestore.products.dto;

import com.gamestore.products.models.Business;
import com.gamestore.products.models.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductItemDto {
    private Product product;
    private Business business;
}
