package com.gamestore.products.controllers;

import com.gamestore.products.models.Tag;
import com.gamestore.products.services.EntityService;
import com.gamestore.products.services.TagService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Class for tag that execute CRUD
 */
@RestController
@RequestMapping(path = "/api/tags")
@RequiredArgsConstructor
public class TagController extends EntityController<Tag>{
    @Override
    protected EntityService<Tag> getService() {
        return tagService;
    }

    private final TagService tagService;

    /**
     * Function that search all existing Tags
     * @return Returns a list of Tags
     */
    @GetMapping("/")
    public List<Tag> getAllTag(@RequestParam(required = false) List<String> ids){
        return tagService.getByIdIn(ids);
    }

    /**
     * Function used to post a list of Tag
     * @param tags List of tags have to be posted
     * @return Returns the list of tags posted
     */
    @PostMapping("/multi")
    public List<Tag> multiPost(@RequestBody List<Tag> tags){
        return tagService.postAll(tags);
    }
}
