package com.gamestore.products.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public abstract class Product extends BaseEntity{
    @NotNull public String name;
    @NotNull public String description;
    @NotNull public String businessId;
    public List<String> tags = new ArrayList<>();
    @NotNull public String productImage;
    public List<String> sourceList = new ArrayList<>();
    @NotNull public String officialWebsite;
    public Double price = 0.0;
    public LocalDate releaseDate;
    public String productCover;
}