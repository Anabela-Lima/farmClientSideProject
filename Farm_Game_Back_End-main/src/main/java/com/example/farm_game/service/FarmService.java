package com.example.farm_game.service;

import com.example.farm_game.enums.SoilTypes;
import com.example.farm_game.models.Farm;
import com.example.farm_game.models.Field;
import com.example.farm_game.models.FieldType;
import com.example.farm_game.repositories.FarmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.List;
import java.util.Random;


@Service
public class FarmService {

    private final FarmRepository farmRepository;

    @Autowired
    public FarmService(
            FarmRepository farmRepository) {
        this.farmRepository = farmRepository;
    }

    public List<Farm> getFarm() {
        return farmRepository.findAll();
    }

    public Farm getFarm(Long id) throws NotFoundException {
        return farmRepository
                .findById(id)
                .orElseThrow(
                        () -> new NotFoundException(
                                "Farm with id " + id + " not found. Please try again."));
    }

    public void saveFarm(Farm farm) {
        farmRepository.save(farm);
    }

    public void deleteFarm (Farm farm){
        farmRepository.deleteById(farm.getId());
    }

    public Field purchaseField(Farm farm, String name, FieldType fieldType){
        if(fieldType == null) {
            throw new RuntimeException();
        } else {
            Field newField = new Field();
            newField.setName(name);
            newField.setFieldType(fieldType);
            newField.setFarm(farm);
            if (fieldType.getSoilType() == null) {
                newField.setSoilType(SoilTypes.values()[new Random().nextInt(SoilTypes.values().length)]);
            } else {
                newField.setSoilType(fieldType.getSoilType());
            }
            farm.addField(newField);
            return newField;
        }
    }

    public void updateMoneyWhenCropsSold(Long farmID, int moneyMade) {
        farmRepository.updateMoneyWhenFieldsCleared(moneyMade, farmID);
    }

    public void updateMoneyWhenCropBought(Long farmID, int cropPrice) {
        farmRepository.takeMoneyOffWhenCropPurchased(farmID, cropPrice);
    }

    public void nextDay(Farm farm){
        farm.incrementDay();
        farm.getOwnFields().stream().filter(f -> f.getTimeLeft() != 0).forEach(f -> f.setTimeLeft(f.getTimeLeft()-1));
    }

}