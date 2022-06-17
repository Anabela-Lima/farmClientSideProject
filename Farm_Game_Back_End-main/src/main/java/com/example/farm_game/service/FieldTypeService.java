package com.example.farm_game.service;

import com.example.farm_game.models.Farm;
import com.example.farm_game.models.Field;
import com.example.farm_game.models.FieldType;
import com.example.farm_game.repositories.FieldRepository;
import com.example.farm_game.repositories.FieldTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.List;

@Service
public class FieldTypeService {

    private final FieldTypeRepository fieldTypeRepository;

    @Autowired
    public FieldTypeService(
            FieldTypeRepository fieldTypeRepository) {
        this.fieldTypeRepository = fieldTypeRepository;
    }

    public List<FieldType> getAll() {
        return fieldTypeRepository.findAll();
    }

    public FieldType getFieldType(Long id) throws NotFoundException {
        return fieldTypeRepository
                .findById(id)
                .orElseThrow(
                        () -> new NotFoundException(
                                "Field Type with id " + id + " not found. Please try again."));
    }

    public void saveFieldType(FieldType fieldType) {
        fieldTypeRepository.save(fieldType);
    }
    public void deleteFieldType (FieldType fieldType){
        fieldTypeRepository.deleteById(fieldType.getId());
    }

}
