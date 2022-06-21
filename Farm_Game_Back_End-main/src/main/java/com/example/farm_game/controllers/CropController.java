package com.example.farm_game.controllers;

import com.example.farm_game.enums.SoilEffects;
import com.example.farm_game.enums.SoilTypes;
import com.example.farm_game.models.Crop;
import com.example.farm_game.repositories.CropRepository;
import com.example.farm_game.service.CropService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.webjars.NotFoundException;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("crops")
@CrossOrigin(origins = "http://localhost:3000")
public class CropController {

    public final CropService cropService;

    public CropController(CropService cropService) {
        this.cropService = cropService;
    }

    @GetMapping("/crops")
    public ResponseEntity<List<Crop>> getAllCrops() {
        List<Crop> crops = cropService.getCrop();
        return ResponseEntity.ok().body(crops);
    }

    @GetMapping("/crop/{id}")
    public ResponseEntity<Crop> getSpecificCrop(Long id) {
        Crop crop = cropService.getCrop(id);
        return ResponseEntity.ok().body(crop);
    }

    @PostMapping("/postCrop")
    public void createCrop(@RequestParam String cropName, @RequestParam int price, @RequestParam int stock,
                           @RequestParam int growTime, @RequestParam int sellPrice,
                           @RequestParam(required = false) List<SoilTypes> soilTypes,
                           @RequestParam(required = false) List<SoilEffects> soilEffects) {
        Crop newCrop = new Crop(null, cropName, price, stock, growTime, sellPrice, soilTypes, soilEffects, null);
        cropService.saveCrop(newCrop);
    }

    @DeleteMapping("/deleteCrop/{id}")
    public void deleteCrop(@PathVariable Long id){cropService.deleteCrop(cropService.getCrop(id));
    }

    @PutMapping("/updateCrop/{id}")
    @Transactional
    public void updateCrop(@PathVariable Long id,
                           @RequestParam(required = false) String name,
                           @RequestParam(required = false) Integer price,
                           @RequestParam(required = false) Integer stock,
                           @RequestParam(required = false) Integer growTime){
        Crop crop = cropService.cropRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("A crop with ID " + id + " is not found. Please try again."));
        if (name != null) {
            crop.setName(name);
        }
        if (price != null) {
            crop.setPrice(price);
        }
        if (stock != null) {
            crop.setStock(stock);
        }
        if (growTime != null) {
            crop.setGrowTime(growTime);
        }
    }

}
