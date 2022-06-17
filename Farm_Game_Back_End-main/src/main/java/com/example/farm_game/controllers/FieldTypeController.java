package com.example.farm_game.controllers;

import com.example.farm_game.enums.SoilTypes;
import com.example.farm_game.models.FieldType;
import com.example.farm_game.service.FieldTypeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fieldtype")
@CrossOrigin(origins = "http://localhost:3000")
public class FieldTypeController {

    public final FieldTypeService fieldTypeService;

    public FieldTypeController(FieldTypeService fieldTypeService) {
        this.fieldTypeService = fieldTypeService;
    }

    @GetMapping("/fieldtypes")
    public ResponseEntity<List<FieldType>> getAllFieldTypes() {
        List<FieldType> fieldtypes = fieldTypeService.getAll();
        return ResponseEntity.ok().body(fieldtypes);
    }

    @GetMapping("/fieldtype/{id}")
    public ResponseEntity<FieldType> getSpecificFieldType(Long id) {
        FieldType fieldtype = fieldTypeService.getFieldType(id);
        return ResponseEntity.ok().body(fieldtype);
    }

    @PostMapping("/fieldtypes")
    public void createFieldType(@RequestParam String fieldTypeName, @RequestParam int fieldTypeSize,
                                @RequestParam int fieldTypeCost, @RequestParam(required = false) SoilTypes soilType) {
        FieldType newFieldType = new FieldType(null, fieldTypeName, fieldTypeSize, fieldTypeCost, soilType,
                null);
        fieldTypeService.saveFieldType(newFieldType);
    }
    @DeleteMapping("/deleteFieldType/{id}")
    public void deleteFieldType(@PathVariable Long id){fieldTypeService.deleteFieldType(fieldTypeService.getFieldType(id));
    }
}
