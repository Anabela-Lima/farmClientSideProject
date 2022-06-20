package com.example.farm_game.controllers;

import com.example.farm_game.exception.ApiRequestException;
import com.example.farm_game.models.Farm;
import com.example.farm_game.models.Field;
import com.example.farm_game.models.FieldType;
import com.example.farm_game.repositories.FarmRepository;
import com.example.farm_game.service.CropService;
import com.example.farm_game.service.FarmService;
import com.example.farm_game.service.FieldService;
import com.example.farm_game.service.FieldTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/farms")
@CrossOrigin(origins = "http://localhost:3000")
public class FarmController {

    public final FieldService fieldService;
    public final FieldTypeService fieldTypeService;
    public final FarmService farmService;
    public final CropService cropService;

    public FarmController(FieldService fieldService, FieldTypeService fieldTypeService,
                           FarmService farmService, CropService cropService) {
        this.fieldService = fieldService;
        this.fieldTypeService = fieldTypeService;
        this.farmService = farmService;
        this.cropService = cropService;
    }

    @GetMapping("/farms")
    public ResponseEntity<List<Farm>> getAllFarms() {
        List<Farm> farms = farmService.getFarm();
        return ResponseEntity.ok().body(farms);
    }

    @GetMapping("/farm/{id}")
    public ResponseEntity<Farm> getSpecificFarm(Long id) {
        Farm farm = farmService.getFarm(id);
        return ResponseEntity.ok().body(farm);
    }

    @PostMapping("/addFarm")
    public void createFarm(@RequestParam String farmName) {
        Farm newFarm = new Farm(null, farmName, 1000, 0, null);
        farmService.saveFarm(newFarm);
    }

    @PutMapping("/farm/buyfield")
    public ResponseEntity<Field> buyField(@RequestParam String fieldName, Long idfieldtype, Long idfarm) {
        FieldType newFieldType = fieldTypeService.getFieldType(idfieldtype);
        Farm farm = farmService.getFarm(idfarm);
        if(farm.getFunds() >= newFieldType.getCost()) {
            farm.setFunds(farm.getFunds()-newFieldType.getCost());
            Field newField = farmService.purchaseField(farm, fieldName, newFieldType);
            fieldService.saveField(newField);
            farmService.saveFarm(farm);
            return ResponseEntity.ok().body(newField);
        }
        else {
            throw new ApiRequestException("Not enough funds for purchase");
        }
    }
    @DeleteMapping("/deleteFarm/{id}")
    public void deleteFarm(@PathVariable Long id){farmService.deleteFarm(farmService.getFarm(id));
    }

    @PutMapping("/newDay/{id}")
    public ResponseEntity<Integer> dawnDay(@PathVariable Long id) {
        Farm farm = farmService.getFarm(id);
        farmService.nextDay(farm);
        farmService.saveFarm(farm);
        int moneyMade = fieldService.sellReadyCropsInFields(id);
        farmService.updateMoneyWhenCropsSold(id, moneyMade);
        return ResponseEntity.ok().body(moneyMade);

    }

}
