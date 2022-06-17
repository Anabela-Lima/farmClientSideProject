package com.example.farm_game.models;

import com.example.farm_game.enums.SoilTypes;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "Fields")
public class Field {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String name;

    @Column(name = "Timeleft")
    private int timeLeft;

    @Column(name = "Soiltype")
    private SoilTypes soilType;

    @ManyToOne
    @JoinColumn(name = "field_id")
    private FieldType fieldType;

    @ManyToOne
    @JoinColumn(name = "crop_id")
    private Crop crop;

    @ManyToOne
    @JoinColumn(name = "farm_id")
    @JsonIgnoreProperties({"ownFields"})
    private Farm farm;

    public Field(Long id, String name, int timeLeft, SoilTypes soilType, FieldType fieldType, Crop crop, Farm farm) {
        this.id = id;
        this.name = name;
        this.timeLeft = timeLeft;
        this.soilType = soilType;
        this.fieldType = fieldType;
        this.crop = crop;
        this.farm = farm;
    }

    public Field() {
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

    public int getTimeLeft() {
        return timeLeft;
    }

    public void setTimeLeft(int timeLeft) {
        this.timeLeft = timeLeft;
    }

    public FieldType getFieldType() {
        return fieldType;
    }

    public void setFieldType(FieldType fieldType) {
        this.fieldType = fieldType;
    }

    public Crop getCrop() {
        return crop;
    }

    public void setCrop(Crop crop) {
        this.crop = crop;
    }

    public Farm getFarm() {
        return farm;
    }

    public void setFarm(Farm farm) {
        this.farm = farm;
    }

    public SoilTypes getSoilType() {
        return soilType;
    }

    public void setSoilType(SoilTypes soilType) {
        this.soilType = soilType;
    }
}
