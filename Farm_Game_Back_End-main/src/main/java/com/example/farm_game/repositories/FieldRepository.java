package com.example.farm_game.repositories;

import com.example.farm_game.models.Field;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface FieldRepository extends JpaRepository<Field,Long> {

    String tablesToFindTotal = "WITH NEW_TABLE AS (\n" +
            "SELECT \n" +
            "FIELDS.ID AS ID, FIELDS.FARM_ID AS farm, CROPS.SELLPRICE " +
            "as price, FIELD_TYPES.SIZE AS size, CROP_SOIL_TYPES.SOIL_TYPES as soil_types, " +
            "CROP_SOIL_EFFECTS.SOIL_EFFECTS as effects,\n" +
            "FROM FIELDS \n" +
            "INNER JOIN FIELD_TYPES\n" +
            "ON FIELDS.FIELD_ID = FIELD_TYPES.ID\n" +
            "INNER JOIN CROPS\n" +
            "ON FIELDS.CROP_ID = CROPS.ID\n" +
            "LEFT JOIN CROP_SOIL_EFFECTS \n" +
            "ON CROPS.ID = CROP_SOIL_EFFECTS.CROP_ID\n" +
            "LEFT JOIN CROP_SOIL_TYPES\n" +
            "ON FIELDS.SOILTYPE = CROP_SOIL_TYPES.SOIL_TYPES AND FIELDS.CROP_ID = CROP_SOIL_TYPES.CROP_ID\n" +
            "WHERE FIELDS.TIMELEFT = 0 AND FIELDS.CROP_ID IS NOT NULL),\n" +
            "\n" +
            "NO_DUPLICATE AS (SELECT\n" +
            "    ID, farm, price, size, soil_types, MAX(effects) AS max, MIN(CASE WHEN effects >= 2 THEN effects " +
            "ELSE NULL END) AS min\n" +
            "FROM\n" +
            "    NEW_TABLE\n" +
            "GROUP BY\n" +
            "    ID\n" +
            "),\n" +
            "\n" +
            "DOUBLE_YIELDS AS (SELECT * FROM NO_DUPLICATE WHERE MAX = 3 AND SOIL_TYPES IS NOT NULL),\n" +
            "\n" +
            "HALF_YIELDS AS (SELECT * FROM NO_DUPLICATE WHERE (MAX = 2 AND SOIL_TYPES IS NULL) OR " +
            "(MAX = 3 AND MIN = 2 AND SOIL_TYPES IS NULL)),\n" +
            "\n" +
            "STANDARD_YIELD AS (SELECT * FROM NO_DUPLICATE WHERE (SOIL_TYPES IS NULL AND MAX IS NULL)" +
            " OR (MAX IN (0,1,2) OR MAX IS NULL) AND NOT (MAX = 2 AND SOIL_TYPES IS NULL) " +
            "OR (MAX = MIN AND MAX = 3 AND SOIL_TYPES IS NULL))";

    @Query(value = tablesToFindTotal
            + " SELECT SUM(PRICE*SIZE*2) FROM DOUBLE_YIELDS WHERE FARM = :FARM_ID", nativeQuery = true)
    Integer doubleYieldTotals(@Param("FARM_ID") Long farmID);

    @Query(value = tablesToFindTotal +
            "SELECT ROUND(SUM(PRICE*SIZE*0.5)) FROM HALF_YIELDS WHERE FARM = :FARM_ID", nativeQuery = true)
    Integer halfYieldTotals(@Param("FARM_ID") Long farmID);

    @Query(value = tablesToFindTotal +
            " SELECT SUM(PRICE*SIZE) FROM STANDARD_YIELD WHERE FARM = :FARM_ID",
    nativeQuery = true)
    Integer normalYieldTotals(@Param("FARM_ID") Long farmID);

    @Modifying
    @Query(value = "UPDATE FIELDS SET (CROP_ID, TIMELEFT) = (:CROP_ID, :NEW_TIME) WHERE FIELDS.ID = :FIELD_ID",
            nativeQuery = true)
    @Transactional
    void assignCropToField(@Param("FIELD_ID") Long fieldID, @Param("CROP_ID") Long cropID,
                           @Param("NEW_TIME") int newTime);

    @Modifying
    @Query(value = "UPDATE FIELDS SET CROP_ID = NULL WHERE FARM_ID = :FARM_ID AND TIMELEFT=0", nativeQuery = true)
    @Transactional
    void emptyFields(@Param("FARM_ID") Long farmID);


}
