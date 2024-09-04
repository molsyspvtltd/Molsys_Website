//package org.backend.molsys.product;// ProductServiceTest.java
//import org.backend.molsys.services.Product;
//import org.backend.molsys.services.ProductRepository;
//import org.backend.molsys.services.ProductService;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//
//import java.util.Arrays;
//import java.util.Optional;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.*;
//
//@SpringBootTest(classes = ProductServiceTestConfig.class)
//public class ProductServiceTest {
//
//    @Autowired
//    private ProductService productService;
//
//    @MockBean
//    private ProductRepository productRepository;
//
//    @Test
//    public void testGetAllProducts() {
//        when(productRepository.findAll()).thenReturn(Arrays.asList(
//                new Product("ABC123", "Product 1", "Description 1", 100.0, 90.0, "Category A"),
//                new Product("DEF456", "Product 2", "Description 2", 150.0, 120.0, "Category B")
//        ));
//
//        assertEquals(2, productService.getAllProducts().size());
//    }
//
//    @Test
//    public void testGetProductById() {
//        when(productRepository.findById(1L)).thenReturn(Optional.of(new Product("ABC123", "Product 1", "Description 1", 100.0, 90.0, "Category A")));
//
//        Product product = productService.getProductById(1L);
//
//        assertEquals("Product 1", product.getName());
//    }
//
//    @Test
//    public void testAddProduct() {
//        Product productToAdd = new Product("XYZ789", "New Product", "New Description", 200.0, 180.0, "Category C");
//
//        when(productRepository.save(productToAdd)).thenReturn(new Product("XYZ789", "New Product", "New Description", 200.0, 180.0, "Category C"));
//
//        Product addedProduct = productService.addProduct(productToAdd);
//
//        assertEquals(3L, addedProduct.getId());
//
//    }
//
//
//
//
//    @Test
//    public void testUpdateProduct() {
//        String productIdToUpdate = "1";
//        Product updatedProductInfo = new Product(null, "Updated Product", "Updated Description", 120.0, 100.0, "Category D");
//
//        when(productRepository.existsById(Long.valueOf(productIdToUpdate))).thenReturn(true);
//        when(productRepository.save(any())).thenReturn(new Product(productIdToUpdate, "Updated Product", "Updated Description", 120.0, 100.0, "Category D"));
//
//        Product updatedProduct = productService.updateProduct(Long.valueOf(productIdToUpdate), updatedProductInfo);
//
//        assertEquals("Updated Product", updatedProduct.getName());
//    }
//
//    @Test
//    public void testDeleteProduct() {
//        String productIdToDelete = "1";
//
//        productService.deleteProduct(Long.valueOf(productIdToDelete));
//
//        verify(productRepository, times(1)).deleteById(Long.valueOf(productIdToDelete));
//    }
//
//    @Test
//    public void testDeleteNonexistentProduct() {
//        String nonExistentProductId = "99";
//
//        doNothing().when(productRepository).deleteById(Long.valueOf(nonExistentProductId));
//
//        productService.deleteProduct(Long.valueOf(nonExistentProductId));
//
//        verify(productRepository, times(1)).deleteById(Long.valueOf(nonExistentProductId));
//    }
//    }
//
//    // Add similar tests for updateProduct and deleteProduct methods
//
