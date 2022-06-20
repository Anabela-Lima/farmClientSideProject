package com.example.farm_game.controllers;

import com.example.farm_game.enums.SoilTypes;
import com.example.farm_game.models.Crop;
import com.example.farm_game.models.Field;
import com.example.farm_game.service.CropService;
import com.example.farm_game.service.FarmService;
import com.example.farm_game.service.FieldService;
import com.example.farm_game.service.FieldTypeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fields")
@CrossOrigin(origins = "http://localhost:3000")
public class FieldController {

    public final FieldService fieldService;
    public final FieldTypeService fieldTypeService;
    public final FarmService farmService;
    public final CropService cropService;

    public FieldController(FieldService fieldService, FieldTypeService fieldTypeService,
                           FarmService farmService, CropService cropService) {
        this.fieldService = fieldService;
        this.fieldTypeService = fieldTypeService;
        this.farmService = farmService;
        this.cropService = cropService;
    }

    @GetMapping("/fields")
    public ResponseEntity<List<Field>> getAllFields() {
        List<Field> fields = fieldService.getField();
        return ResponseEntity.ok().body(fields);
    }

    @GetMapping("/field/{id}")
    public ResponseEntity<Field> getSpecificField(Long id) {
        Field field = fieldService.getField(id);
        return ResponseEntity.ok().body(field);
    }

    @PostMapping("/fields")
    public void createField(@RequestParam String fieldName, @RequestParam SoilTypes soilType,
                            @RequestParam Long farmID,
                            @RequestParam Long fieldTypeID) {
        if (fieldTypeService.getFieldType(fieldTypeID) != null
        && farmService.getFarm(farmID) != null) {
            Field newField = new Field(null, fieldName, 0, soilType,
                    fieldTypeService.getFieldType(fieldTypeID),
                    null, farmService.getFarm(farmID));
            fieldService.saveField(newField);
        }
    }

    @PatchMapping(value = "/CropInField")
    public ResponseEntity<Crop> putCropInField(@RequestParam Long fieldID, @RequestParam Long cropID) {
        if (cropService.getCrop(cropID) != null && fieldService.getField(fieldID) != null) {
            fieldService.putCropInField(fieldID, cropID);
        }

        return ResponseEntity.ok().body(fieldService.getField(cropID).getCrop());
    }

    @DeleteMapping("/deleteField/{id}")
    public void deleteField(@PathVariable Long id){fieldService.deleteField(fieldService.getField(id));
    }

}
