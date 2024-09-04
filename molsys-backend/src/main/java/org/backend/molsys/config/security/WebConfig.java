// package org.backend.molsys.config.security;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration
// public class WebConfig implements WebMvcConfigurer {

//     @Override
//     public void addCorsMappings(CorsRegistry registry) {
//         registry.addMapping("/**")
//                 .allowedMethods("*")
//                 .allowedOrigins("*")
//                 .allowedHeaders("*")
//                 .exposedHeaders("Location", "Access-Control-Allow-Origin");

//     }
// }

package org.backend.molsys.config.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedMethods("*")
                .allowedOrigins("https://molsys.in")  // Allow only your domain
                .allowedHeaders("*")
                .exposedHeaders("Location", "Access-Control-Allow-Origin");
    }
}
