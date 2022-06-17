package com.example.farm_game.repositories;

import com.example.farm_game.models.Farm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface FarmRepository extends JpaRepository<Farm,Long> {

    @Modifying
    @Query(value = "UPDATE FARMS SET FUNDS = FUNDS + :MONEY_MADE WHERE ID = :FARM_ID", nativeQuery = true)
    @Transactional
    public void updateMoneyWhenFieldsCleared(@Param("MONEY_MADE") int moneyMade,
                                             @Param("FARM_ID") Long farmID);

    @Modifying
    @Query(value = "UPDATE FARMS SET FUNDS = FUNDS - :CROP_PRICE WHERE ID = :FARM_ID", nativeQuery = true)
    @Transactional
    public void takeMoneyOffWhenCropPurchased(@Param("FARM_ID") Long farmID,
                                              @Param("CROP_PRICE") int cropPrice);
}
