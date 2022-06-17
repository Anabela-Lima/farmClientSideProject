package com.example.farm_game.enums;

public enum SoilEffects {
    // a crop might be associated with several of the following soil effects.
    // the following comments describe the effects in more detail:
    NOGROWWITHOUT,
    // the crop cannot grow on any soil type not listed in its soil types
    TWICEGROW,
    // the crop will grow twice as fast if placed on a soil type listed in its soil types
    HALFYIELDWITHOUT,
    // if a crop isn't placed on one of its soil types, then it will sell for half its normal sell price
    DOUBLEYIELD
    // the crop will generate double its normal sell price if placed on a soil type listed in its soil types.
}
