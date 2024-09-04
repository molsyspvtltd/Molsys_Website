package org.backend.molsys.services.subcategory;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subcategories")
public class SubcategoryController {
    @Autowired
    private SubcategoryService subcategoryService;

    @GetMapping
    public List<Subcategory> getAllSubcategories() {
        return subcategoryService.getAllSubcategories();
    }

    @PostMapping
    public Subcategory saveSubcategory(@RequestBody Subcategory subcategory) {
        return subcategoryService.saveSubcategory(subcategory);
    }
}


