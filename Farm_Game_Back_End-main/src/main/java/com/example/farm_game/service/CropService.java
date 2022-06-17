package com.example.farm_game.service;


import com.example.farm_game.models.Crop;
import com.example.farm_game.repositories.CropRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.List;

@Service
public class CropService {

    public final CropRepository cropRepository;

    @Autowired
    public CropService(CropRepository cropRepository) {
        this.cropRepository = cropRepository;
    }

    public List<Crop> getCrop() {
        return (List<Crop>) cropRepository.findAll();
    }

    public Crop getCrop(Long id) throws NotFoundException {
        return cropRepository
                .findById(id)
                .orElseThrow(
                        () -> new NotFoundException(
                                "Crop with id " + id + " not found. Please try again."));
    }

    public void saveCrop(Crop crop) {

        cropRepository.save(crop);
    }

    public void deleteCrop(Crop crop) {
        cropRepository.deleteById(crop.getId());
    }
    public void dataSqlLoadsCrops(Crop crop){
        cropRepository.findAll();
    }
}