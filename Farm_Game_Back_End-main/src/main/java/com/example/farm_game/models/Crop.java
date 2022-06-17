package com.example.farm_game.models;

import com.example.farm_game.enums.SoilEffects;
import com.example.farm_game.enums.SoilTypes;
import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.databind.annotation.JsonTypeIdResolver;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Crops")
public class Crop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String name;

    @Column
    private int price;

    @Column
    private int stock;

    @Column
    @Enumerated
    @ElementCollection(targetClass = SoilTypes.class)
    private List<SoilTypes> soilTypes;

    @Column
    @Enumerated
    @ElementCollection(targetClass = SoilEffects.class)
    private List<SoilEffects> soilEffects;

    @Column(name = "Growtime")
    private int growTime;

    @Column(name = "SELLPRICE")
    private int sellPrice;

    @JsonIgnore
    @OneToMany(mappedBy = "crop", cascade = CascadeType.REMOVE)
    private List<Field> fields;


    public Crop(Long id, String name, int price, int stock, int growtime, int sellPrice,
        List<SoilTypes> soilTypes, List<SoilEffects> soilEffects, List<Field> fields) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.growTime = growtime;
        this.soilTypes = soilTypes;
        this.soilEffects = soilEffects;
        this.fields = fields;
        this.sellPrice = sellPrice;
    }

    public Crop() {
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

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public int getGrowTime() {
        return growTime;
    }

    public void setGrowTime(int growTime) {
        this.growTime = growTime;
    }

    public List<SoilTypes> getSoilTypes() {
        return soilTypes;
    }

    public void setSoilTypes(List<SoilTypes> soilTypes) {
        this.soilTypes = soilTypes;
    }

    public List<SoilEffects> getSoilEffects() {
        return soilEffects;
    }

    public void setSoilEffects(List<SoilEffects> soilEffects) {
        this.soilEffects = soilEffects;
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
