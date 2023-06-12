package com.br.paulo.futsearch.resources;

import java.net.URI;
import java.util.List;

import com.br.paulo.futsearch.data.v1.CardVO;
import com.br.paulo.futsearch.data.v1.TypeCardVO;
import com.br.paulo.futsearch.services.TypeCardService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@RestController
@RequestMapping("/types")
@Tag(name = "TypeCard", description = "Endpoints for different TypeCards")
public class TypeCardResource {
    @Autowired
    private TypeCardService service;

    @GetMapping
    @Operation(summary = "Find all Type Cards!", description = "Find all Type Cards!",
            tags = {"TypeCard"},
            responses = {
                @ApiResponse(description = "Success", responseCode = "200",
                    content = {
                            @Content(
                                    array = @ArraySchema(schema = @Schema(implementation = TypeCardVO.class))
                            )
                    }),
                @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
                @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
            }
    )
    public ResponseEntity<List<TypeCardVO>> getAllTypeCards() {
        List<TypeCardVO> types = service.findAll();
        return ResponseEntity.ok().body(types);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Finds a Type Card by ID", description = "Finds a Type Card by ID",
            tags = {"TypeCard"},
            responses = {
                    @ApiResponse(description = "Success", responseCode = "200",
                            content = {
                                    @Content(schema = @Schema(implementation = TypeCardVO.class))
                            }),
                    @ApiResponse(description = "No Content", responseCode = "204", content = @Content),
                    @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                    @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                    @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
                    @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
            }
    )
    public ResponseEntity<TypeCardVO> findTypeCardById(@PathVariable String id) {
        TypeCardVO obj = service.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @GetMapping("/version/{fifaVersion}")
    @Operation(summary = "Finds a Type Card by FifaVersion", description = "Finds a Type Card by FifaVersion",
            tags = {"TypeCard"},
            responses = {
                    @ApiResponse(description = "Success", responseCode = "200",
                            content = {
                                    @Content(schema = @Schema(implementation = TypeCardVO.class))
                            }),
                    @ApiResponse(description = "No Content", responseCode = "204", content = @Content),
                    @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                    @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                    @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
                    @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
            }
    )
    public ResponseEntity<List<TypeCardVO>> findByFifaVersion(@PathVariable String fifaVersion) {
        List<TypeCardVO> listTypeCard = service.findByFifaVersions(fifaVersion);
        return ResponseEntity.ok().body(listTypeCard);
    }

    @GetMapping("/version/{fifaVersion}/{cardType}")
    @Operation(summary = "Finds a Type Card by FifaVersion and CardType", description = "Finds a Type Card by FifaVersion and CardType",
            tags = {"TypeCard"},
            responses = {
                    @ApiResponse(description = "Success", responseCode = "200",
                            content = {
                                    @Content(schema = @Schema(implementation = TypeCardVO.class))
                            }),
                    @ApiResponse(description = "No Content", responseCode = "204", content = @Content),
                    @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                    @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                    @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
                    @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
            }
    )
    public ResponseEntity<TypeCardVO> findByFifaVersionAndCardType(
            @PathVariable("fifaVersion") String fifaVersion,
            @PathVariable("cardType") String cardType) {
        TypeCardVO obj = service.findByFifaVersionAndCardType(fifaVersion, cardType);
        if (fifaVersion == null || cardType == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    @Operation(summary = "Create a new TypeCard",
            description = "Create a new TypeCard",
            tags = {"Card"},
            responses = {
                    @ApiResponse(description = "Success", responseCode = "200",
                            content = {
                                    @Content(schema = @Schema(implementation = TypeCardVO.class))
                            }),
                    @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                    @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                    @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
            })
    public ResponseEntity<TypeCardVO> create(@RequestBody TypeCardVO type) {
        TypeCardVO obj = service.create(type);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }


    @PutMapping("/{id}")
    @Operation(summary = "Edit a existing TypeCard",
            description = "Edit a existing TypeCard",
            tags = {"Card"},
            responses = {
                    @ApiResponse(description = "Success", responseCode = "200",
                            content = {
                                    @Content(schema = @Schema(implementation = TypeCardVO.class))
                            }),
                    @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                    @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                    @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
                    @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
            })
    public ResponseEntity<TypeCardVO> update(@RequestBody TypeCardVO type, @PathVariable String id) {
        type.setId(id);
        TypeCardVO obj = service.update(type);
        return ResponseEntity.ok().body(obj);
    }


    @DeleteMapping("/{id}")
    @Operation(summary = "Deletes a TypeCard",
            description = "Delete a TypeCard by your ID.",
            tags = {"TypeCard"},
            responses = {
                    @ApiResponse(description = "No Content", responseCode = "204", content = @Content),
                    @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                    @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                    @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
                    @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
            }
    )
    public ResponseEntity<Void> deleteCard(@PathVariable String id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
