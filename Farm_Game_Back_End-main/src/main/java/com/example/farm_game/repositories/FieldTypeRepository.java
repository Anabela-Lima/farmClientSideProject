package com.example.farm_game.repositories;

import com.example.farm_game.models.FieldType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FieldTypeRepository extends JpaRepository<FieldType,Long> {
}
