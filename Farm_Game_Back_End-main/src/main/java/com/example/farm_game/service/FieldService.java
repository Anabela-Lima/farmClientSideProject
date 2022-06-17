package com.example.farm_game.service;

import com.example.farm_game.enums.SoilEffects;
import com.example.farm_game.models.Crop;
import com.example.farm_game.models.Field;
import com.example.farm_game.repositories.CropRepository;
import com.example.farm_game.repositories.FarmRepository;
import com.example.farm_game.repositories.FieldRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.List;


@Service
public class FieldService {

    private final FieldRepository fieldRepository;
    private final CropRepository cropRepository;
    public final FarmService farmService;
    public final FarmRepository farmRepository;

    @Autowired
    public FieldService(
            FieldRepository fieldRepository, CropRepository cropRepository, FarmService farmService,
            FarmRepository farmRepository) {
        this.fieldRepository = fieldRepository;
        this.cropRepository = cropRepository;
        this.farmService = farmService;
        this.farmRepository = farmRepository;
    }

    public List<Field> getField() {
        return fieldRepository.findAll();
    }

    public Field getField(Long id) throws NotFoundException {
        return fieldRepository
                .findById(id)
                .orElseThrow(
                        () -> new NotFoundException(
                                "Field with id " + id + " not found. Please try again."));
    }

    public void saveField(Field field) {
        fieldRepository.save(field);
    }
    public void deleteField (Field field){
        fieldRepository.deleteById(field.getId());
    }


    public void putCropInField(Long fieldID, Long cropID) {
        Long farmID = fieldRepository.getReferenceById(fieldID).getFarm().getId();
        int farmMoney = farmRepository.getReferenceById(farmID).getFunds();
        Crop crop = cropRepository.getReferenceById(cropID);
        Field field = fieldRepository.getReferenceById(fieldID);
        int growthMult = 1;
        int fieldSize = fieldRepository.getReferenceById(fieldID).getFieldType().getSize();
        if (crop.getSoilTypes().contains(field.getSoilType()) && crop.getSoilEffects().contains(SoilEffects.TWICEGROW)) {
            growthMult *= 2;
        }
        if (crop.getStock()>=0 && crop.getPrice()*fieldSize<=farmMoney && !crop.getSoilEffects().contains(SoilEffects.NOGROWWITHOUT)
                || crop.getSoilTypes().contains(field.getSoilType())) {
            fieldRepository.assignCropToField(fieldID, cropID, Math.round(crop.getGrowTime() / growthMult));
            farmService.updateMoneyWhenCropBought(farmID, crop.getPrice()*fieldSize);
            cropRepository.reduceStockByFieldSize(cropID, fieldSize);
        }

    }

    public int sellReadyCropsInFields(Long farmID) {
        Integer moneyMade = 0;
        if (fieldRepository.doubleYieldTotals(farmID) != null) {
            moneyMade = fieldRepository.doubleYieldTotals(farmID);
        }
        if (fieldRepository.halfYieldTotals(farmID) != null) {
            moneyMade += fieldRepository.halfYieldTotals(farmID);
        }
        if (fieldRepository.normalYieldTotals(farmID) != null) {
            moneyMade += fieldRepository.normalYieldTotals(farmID);
        }
        fieldRepository.emptyFields(farmID);
        if (moneyMade != null){
            int moneyOut = moneyMade;
            return moneyOut;
        } else {
            int moneyOut = 0;
            return moneyOut;
        }
    }


}