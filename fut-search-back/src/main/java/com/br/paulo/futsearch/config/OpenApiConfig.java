package com.br.paulo.futsearch.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI().info(new Info()
                .title("Fut Search Api")
                .version("v1")
                .description("End-points contendo os dados utilizados no Fut Search Front: Carta, tipo da carta, nacionalidade e clube.")
                .termsOfService("https://github.com/ParloNeto")
                .license(new License()
                        .name("Paulo Neto")
                        .url("https://github.com/ParloNeto")
                )
        );
    }
}
