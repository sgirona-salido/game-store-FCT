package com.gamestore.products.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

import java.util.List;
@NoArgsConstructor
@Getter
@Setter
public class Board extends Game{
    @NotNull
    public List<Rule> rulesList;

}
