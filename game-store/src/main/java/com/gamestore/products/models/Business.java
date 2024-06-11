package com.gamestore.products.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

@Getter
@Setter
@AllArgsConstructor
public class Business extends BaseEntity {
    @NotNull
    public String cif;
    @NotNull
    public String buisnessName;
}