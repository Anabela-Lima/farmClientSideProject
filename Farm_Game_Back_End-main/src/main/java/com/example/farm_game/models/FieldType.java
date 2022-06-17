package com.example.farm_game.models;


import com.example.farm_game.enums.SoilTypes;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Field_Types")
public class FieldType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String name;

    @Column
    private int size;

    @Column
    private int cost;

    @Column(name = "Soiltype")
    private SoilTypes soilType;

    @JsonIgnore
    @OneToMany(mappedBy = "fieldType", cascade = CascadeType.REMOVE)
    private List<Field> fields;

    public FieldType(Long id, String name, int size, int cost, SoilTypes soilType, List<Field> fields) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.cost = cost;
        this.soilType = soilType;
        this.fields = fields;
    }

    public FieldType() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public SoilTypes getSoilType() {
        return soilType;
    }

    public void setSoilType(SoilTypes soilType) {
        this.soilType = soilType;
    }

    public List<Field> getFields() {
        return fields;
    }

    public void setFields(List<Field> fields) {
        this.fields = fields;
    }

    public void addField(Field field) {
        this.fields.add(field);
    }

    public void deleteField(int fieldId) {
        this.fields.remove(fieldId);
    }
}
