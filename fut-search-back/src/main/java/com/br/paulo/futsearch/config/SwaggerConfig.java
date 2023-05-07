package com.br.paulo.futsearch.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("RESTful API Fifa Search")
                        .version("v1")
                        .description("A RESTful API containing 4 end-points (Card, TypeCard, Club & Nation)" +
                                " Where Card is player information and attributes; " +
                                "TypeCard associating the fifa version with the respective " +
                                "card type and the corresponding URL; " +
                                "Club takes the club name and URL corresponding to the symbol; " +
                                "Nation follows the same idea as Club, but with existing nationalities.")
                        .termsOfService("https://www.openapis.org/")
                        .license(
                                new License()
                                        .name("Apache 2.0")
                                        .url("")
                        )
                );

    }
}
