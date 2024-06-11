package com.gamestore.products.services;

import com.gamestore.products.dto.ProductItemDto;
import com.gamestore.products.models.Product;
import com.gamestore.products.repositories.BusinessRepository;
import com.gamestore.products.repositories.ProductRepository;
import com.gamestore.products.repositories.TagRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProductService extends EntityService<Product> {
    @Override
    protected MongoRepository<Product, String> getRepository() {
        return productRepository;
    }

    private final ProductRepository productRepository;
    private final TagRepository tagRepository;
    private final BusinessRepository businessRepository;

    public Product addProduct(Product product) {
        for (String tagId : product.tags) {
            tagRepository.findById(tagId)
                    .orElseThrow(() -> new NoSuchElementException("Tag with id " + tagId + " no exists"));
        }
        return productRepository.save(product);
    }

    public List<Product> findByTags(String tagId) {
        tagRepository.findById(tagId)
                .orElseThrow(() -> new NoSuchElementException("Tag with id " + tagId + " not exists"));
        return productRepository.findByTags(tagId);
    }

    public List<ProductItemDto> findByNameRegex(String name) {
        return productRepository.findByNameRegex(name).stream()
                .map(product -> new ProductItemDto(product, businessRepository.findById(product.businessId).orElseThrow()))
                .collect(Collectors.toList());
    }


    /**
     * Funció que retorna tots els tags amb les vegades que estan repetits
     *
     * @return Un Map amb el tagId i el número de repeticions
     */
    public Map<String, Long> countAllTags() {
        return productRepository.findAll().stream()
                .flatMap(product -> product.getTags().stream())
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
    }

    public List<ProductItemDto> getProductItemsDto() {
        return this.productRepository.findAll().stream()
                .map(product -> new ProductItemDto(product,
                        businessRepository.findById(product.businessId).orElseThrow()))
                .collect(Collectors.toList());
    }
}
