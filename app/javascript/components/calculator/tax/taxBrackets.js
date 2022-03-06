const TaxBrackets = {
    CA: {
        ABATEMENT: 0,
        TAX_CREDIT_RATE: 0.15,
        BASE_TAX_CREDIT: 14398,
        RATES: [{
            FROM: 0,
            TO: 50197,
            RATE: 0.15,
        }, {
            FROM: 50197,
            TO: 100392,
            RATE: 0.205,
        }, {
            FROM: 100392,
            TO: 155625,
            RATE: 0.26,
        }, {
            FROM: 155625,
            TO: 221708,
            RATE: 0.2938,
        }, {
            FROM: 221708,
            TO: 999999999,
            RATE: 0.33,
        }],
        SURTAX_RATES: [{
            FROM: 0,
            TO: 999999999,
            RATE: 0,
        }],
    },
    AB: {
        ABATEMENT: 0,
        TAX_CREDIT_RATE: 0.10,
        BASE_TAX_CREDIT: 19369,
        RATES: [{
            FROM: 0,
            TO: 131220,
            RATE: 0.10,
        }, {
            FROM: 131220,
            TO: 157464,
            RATE: 0.12,
        }, {
            FROM: 157464,
            TO: 209952,
            RATE: 0.13,
        }, {
            FROM: 209952,
            TO: 314928,
            RATE: 0.14,
        }, {
            FROM: 314928,
            TO: 999999999,
            RATE: 0.15,
        }],
        SURTAX_RATES: [{
            FROM: 0,
            TO: 999999999,
            RATE: 0,
        }],
    },
    BC: {
        ABATEMENT: 0,
        TAX_CREDIT_RATE: 0.0506,
        BASE_TAX_CREDIT: 11302,
        RATES: [{
            FROM: 0,
            TO: 43070,
            RATE: 0.0506,
        }, {
            FROM: 43070,
            TO: 86141,
            RATE: 0.077,
        }, {
            FROM: 86141,
            TO: 98901,
            RATE: 0.105,
        }, {
            FROM: 98901,
            TO: 120094,
            RATE: 0.1229,
        }, {
            FROM: 120094,
            TO: 162832,
            RATE: 0.147,
        }, {
            FROM: 162832,
            TO: 227091,
            RATE: 0.168,
        }, {
            FROM: 227091,
            TO: 999999999,
            RATE: 0.205,
        }],
        SURTAX_RATES: [{
            FROM: 0,
            TO: 999999999,
            RATE: 0,
        }],
    },
    MB: {
        ABATEMENT: 0,
        TAX_CREDIT_RATE: 0.108,
        BASE_TAX_CREDIT: 10145,
        RATES: [{
            FROM: 0,
            TO: 34431,
            RATE: 0.108,
        }, {
            FROM: 34431,
            TO: 74416,
            RATE: 0.1275,
        }, {
            FROM: 74416,
            TO: 999999999,
            RATE: 0.174,
        }],
        SURTAX_RATES: [{
            FROM: 0,
            TO: 999999999,
            RATE: 0,
        }],
    },
    NB: {
        ABATEMENT: 0,
        TAX_CREDIT_RATE: 0.094,
        BASE_TAX_CREDIT: 10817,
        RATES: [{
            FROM: 0,
            TO: 44887,
            RATE: 0.0940,
        }, {
            FROM: 44887,
            TO: 89775,
            RATE: 0.1482,
        }, {
            FROM: 89775,
            TO: 145955,
            RATE: 0.1652,
        }, {
            FROM: 145955,
            TO: 166280,
            RATE: 0.1784,
        }, {
            FROM: 166280,
            TO: 999999999,
            RATE: 0.2030,
        }],
        SURTAX_RATES: [{
            FROM: 0,
            TO: 999999999,
            RATE: 0,
        }],
    },
    NL: {
        ABATEMENT: 0,
        TAX_CREDIT_RATE: 0.087,
        BASE_TAX_CREDIT: 9804,
        RATES: [{
            FROM: 0,
            TO: 39147,
            RATE: 0.087,
        }, {
            FROM: 39147,
            TO: 78294,
            RATE: 0.145,
        }, {
            FROM: 78294,
            TO: 139780,
            RATE: 0.158,
        }, {
            FROM: 139780,
            TO: 195693,
            RATE: 0.178,
        }, {
            FROM: 195693,
            TO: 250000,
            RATE: 0.198,
        }, {
            FROM: 250000,
            TO: 500000,
            RATE: 0.208,
        }, {
            FROM: 500000,
            TO: 1000000,
            RATE: 0.213,
        }, {
            FROM: 1000000,
            TO: 999999999,
            RATE: 0.218,
        }],
        SURTAX_RATES: [{
            FROM: 0,
            TO: 999999999,
            RATE: 0,
        }],
    },
    NS: {
        ABATEMENT: 0,
        TAX_CREDIT_RATE: 0.0879,
        BASE_TAX_CREDIT: 8481,
        RATES: [{
            FROM: 0,
            TO: 29590,
            RATE: 0.0879,
        }, {
            FROM: 29590,
            TO: 59180,
            RATE: 0.1495,
        }, {
            FROM: 59180,
            TO: 93000,
            RATE: 0.1667,
        }, {
            FROM: 93000,
            TO: 150000,
            RATE: 0.175,
        }, {
            FROM: 150000,
            TO: 999999999,
            RATE: 0.21,
        }],
        SURTAX_RATES: [{
            FROM: 0,
            TO: 999999999,
            RATE: 0,
        }],
    },
    PE: {
        ABATEMENT: 0,
        TAX_CREDIT_RATE: 0.098,
        BASE_TAX_CREDIT: 11250,
        RATES: [{
            FROM: 0,
            TO: 31984,
            RATE: 0.098,
        }, {
            FROM: 31984,
            TO: 63969,
            RATE: 0.138,
        }, {
            FROM: 63969,
            TO: 999999999,
            RATE: 0.167,
        }],
        SURTAX_RATES: [{
            FROM: 0,
            TO: 12500,
            RATE: 0,
        }, {
            FROM: 12500,
            TO: 999999999,
            RATE: 0.10,
        }],
    },
    ON: {
        ABATEMENT: 0,
        TAX_CREDIT_RATE: 0.0505,
        BASE_TAX_CREDIT: 11141,
        RATES: [{
            FROM: 0,
            TO: 46226,
            RATE: 0.0505,
        }, {
            FROM: 46226,
            TO: 92454,
            RATE: 0.0915,
        }, {
            FROM: 92454,
            TO: 150000,
            RATE: 0.1116,
        }, {
            FROM: 150000,
            TO: 220000,
            RATE: 0.1216,
        }, {
            FROM: 220000,
            TO: 999999999,
            RATE: 0.1316,
        }],
        SURTAX_RATES: [{
            FROM: 0,
            TO: 4991,
            RATE: 0,
        }, {
            FROM: 4991,
            TO: 6387,
            RATE: 0.20,
        }, {
            FROM: 6387,
            TO: 999999999,
            RATE: 0.56, // 0.20 + 0.36
        }],
    },
    QC: {
        ABATEMENT: 0.165,
        TAX_CREDIT_RATE: 0.15,
        BASE_TAX_CREDIT: 16143,
        RATES: [{
            FROM: 0,
            TO: 46295,
            RATE: 0.15,
        }, {
            FROM: 46295,
            TO: 92580,
            RATE: 0.20,
        }, {
            FROM: 92580,
            TO: 112655,
            RATE: 0.24,
        }, {
            FROM: 112655,
            TO: 999999999,
            RATE: 0.2575,
        }],
        SURTAX_RATES: [{
            FROM: 0,
            TO: 999999999,
            RATE: 0,
        }],
    },
    SK: {
        ABATEMENT: 0,
        TAX_CREDIT_RATE: 0.105,
        BASE_TAX_CREDIT: 16615,
        RATES: [{
            FROM: 0,
            TO: 46773,
            RATE: 0.105,
        }, {
            FROM: 46773,
            TO: 133638,
            RATE: 0.125,
        }, {
            FROM: 133638,
            TO: 999999999,
            RATE: 0.145,
        }],
        SURTAX_RATES: [{
            FROM: 0,
            TO: 999999999,
            RATE: 0,
        }],
    },
    NT: {
        ABATEMENT: 0,
        TAX_CREDIT_RATE: 0.059,
        BASE_TAX_CREDIT: 15609,
        RATES: [{
            FROM: 0,
            TO: 45462,
            RATE: 0.059,
        }, {
            FROM: 45462,
            TO: 90927,
            RATE: 0.086,
        }, {
            FROM: 90927,
            TO: 147826,
            RATE: 0.122,
        }, {
            FROM: 147826,
            TO: 999999999,
            RATE: 0.1405,
        }],
        SURTAX_RATES: [{
            FROM: 0,
            TO: 999999999,
            RATE: 0,
        }],
    },
    NU: {
        ABATEMENT: 0,
        TAX_CREDIT_RATE: 0.04,
        BASE_TAX_CREDIT: 16862,
        RATES: [{
            FROM: 0,
            TO: 47862,
            RATE: 0.04,
        }, {
            FROM: 47862,
            TO: 95724,
            RATE: 0.07,
        }, {
            FROM: 95724,
            TO: 155625,
            RATE: 0.09,
        }, {
            FROM: 155625,
            TO: 999999999,
            RATE: 0.115,
        }],
        SURTAX_RATES: [{
            FROM: 0,
            TO: 999999999,
            RATE: 0,
        }],
    },
    YT: {
        ABATEMENT: 0,
        TAX_CREDIT_RATE: 0.064,
        BASE_TAX_CREDIT: 14398,
        RATES: [{
            FROM: 0,
            TO: 50197,
            RATE: 0.064,
        }, {
            FROM: 50197,
            TO: 100392,
            RATE: 0.09,
        }, {
            FROM: 100392,
            TO: 155625,
            RATE: 0.109,
        }, {
            FROM: 155625,
            TO: 221708,
            RATE: 0.1296,
        }, {
            FROM: 221708,
            TO: 500000,
            RATE: 0.128,
        }, {
            FROM: 500000,
            TO: 999999999,
            RATE: 0.15,
        }],
        SURTAX_RATES: [{
            FROM: 0,
            TO: 999999999,
            RATE: 0,
        }],
    },
};

export default TaxBrackets