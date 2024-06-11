package com.gamestore.products.models;

import lombok.Getter;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

@Getter
@Setter
public class Accesories extends Product{

    @NotNull
    public String color;

}
