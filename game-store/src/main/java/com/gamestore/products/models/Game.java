package com.gamestore.products.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public abstract class Game extends Product {

    @NotNull
    public Integer minPlayers;
    @NotNull
    public Integer maxPlayers;

}
