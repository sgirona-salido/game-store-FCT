package com.gamestore.products.models;

import lombok.*;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Document("videogames")
public class Video extends Game{
    public List<String> platforms = new ArrayList<>();
    @NotNull public Boolean digital;
    @NotNull public Boolean physical;
}
