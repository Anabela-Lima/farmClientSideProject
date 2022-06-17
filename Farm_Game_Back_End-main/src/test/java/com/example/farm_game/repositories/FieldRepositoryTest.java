package com.example.farm_game.repositories;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class FieldRepositoryTest {

    @Autowired
    FieldRepository fieldRepository;

    @Test
    void testDoubleMoneyWorksOnRightSoilType() {
        assertEquals(140, fieldRepository.doubleYieldTotals(1l));
    }

    @Test
    void testHalfMoneyWorksWhenNotInSoilType() {
        assertEquals(70, fieldRepository.halfYieldTotals(2l));
    }

    @Test
    void testNormalMoneyBackWhenSoilEffectsIs1() {
        assertEquals(90, fieldRepository.normalYieldTotals(3l));
    }


}