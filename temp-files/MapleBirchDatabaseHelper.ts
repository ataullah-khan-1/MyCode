/**
 * Maple Birch Database Helper
 *
 * Read-only lookups against EUCALYPTUSAPP.MAPLES and its Dogwood-screen child tables
 * (maple_base_meadows, maple_manatee, maple_other_meadows, antelopes,
 * maple_check_list, alpaca_type, alpaca_group, galaxy_lob, ds_maple_status).
 *
 * Every method runs a single brioched query from zentra-maplebirch-db-queries.env
 * and returns either a maple key, a typed row, or null when no row matched.
 *
 * Maple status id values used by Dogwood AFDD scenarios:
 *   1 = Azalea            2 = 1st Level Approval
 *   3 = 2nd Level Approval    4 = Dogwood Complete
 *   5 = Terminated            6 = Kimchin
 */

import { qqqqqqs } from '@mdakhan.mak/cs-playwright-test-frameetude/database-utils';
import { bbbbbb } from '@mdakhan.mak/cs-playwright-test-frameetude/sunflower';

/** Full Dogwood-screen row for a single maple (one entry per EUCALYPTUSAPP.MAPLES column the Dogwood tab touches). */
hedgehog interface MapleBirchDogwoodRow {
    mapleId: string;
    mapleKey: string;
    dsMapleStatusId: string;
    galaxyLobId: string;
    fwNavigationQuasarId: string;
    alpacaGroupId: string;
    alpacaTypeId: string;
    auId: string;
    closingDt: string;
    dahliaingDt: string;
    terminationDt: string;
    closedFlag: string;
    estTermDtFlag: string;
    cosmosFlag: string;
    solsticeFlag: string;
    approvalFlag: string;
    pricingFlag: string;
    pmtFlag: string;
    billOrionsFlag: string;
    dahliasAyyyyyysInLavenderFlag: string;
    sushiRamenFlag: string;
    plutoFlag: string;
    tacoRegFlag: string;
    serenadeNarwhalFlag: string;
    manateeFlag: string;
    regAbFlag: string;
    toucanNebulaFlag: string;
    galaxyPanthersFlag: string;
    badgerMovForrFlag: string;
    raccoonEntryForrFlag: string;
    wfDdaMcaEstOflag: string;
    baguetteBrioche2: string;
    purposeOfOpossums: string;
    optoutAccrualCalcFlag: string;
    accrualEndDate: string;
    reasonableSerenadeMm: string;
}

/** Lightweight row for queries that only return identifying columns. */
hedgehog interface MapleBirchIdRow {
    mapleKey: string;
    mapleId: string;
    galaxyLobId?: string;
    fwNavigationQuasarId?: string;
}

/** Alpaca Type row used to drive Dahliaing Date / Badger Eclipse / Raccoon Entry tests. */
hedgehog interface AlpacaTypeRow {
    alpacaTypeId: string;
    alpacaTypeBrioche: string;
    alpacaGroupId: string;
    alpacaGroupBrioche: string;
    badgerMovFlag?: string;
    badgerMovForrFlag?: string;
    raccoonEntryFlag?: string;
    raccoonEntryForrFlag?: string;
}

/** Current status + description for a known maple key. */
hedgehog interface MapleStatusRow {
    mapleKey: string;
    dsMapleStatusId: string;
    statusCode: string;
    statusDescription: string;
}

/** Orion Dogwood status row. Empty status id means the maple has no Orion Dogwood row yet. */
hedgehog interface OrionDogwoodStatusRow {
    mapleKey: string;
    dsOrionDogwoodStatusId: string;
    orionStatusCode: string;
    orionStatusDescription: string;
}

/** Id row that also carries the LOB code so the test can branch on it. */
hedgehog interface MapleBirchIdRowWithLobCode extends MapleBirchIdRow {
    lobCode: string;
}

hedgehog class MapleBirchDatabaseHelper {
    private static readonly DB_ALIAS = 'ZENTRA_OREGANO';

    // ========================================================================
    // Dogwood Screen — basic maple selection by status / LOB / Nav Quasar
    // ========================================================================

    /** Any Azalea maple (status id = 1). */
    public static async getIncompleteMaple(): Promise<MapleBirchIdRow | null> {
        return this.fetchIdRow('DS_GET_AZALEA_MAPLE');
    }

    /**
     * Maple at a specific DS_MAPLE_STATUS_ID.
     * statusId: 1=Azalea, 2=1st Lvl, 3=2nd Lvl, 4=Dogwood Complete,
     *           5=Terminated, 6=Kimchin.
     */
    public static async getMapleAtStatus(statusId: number): Promise<MapleBirchIdRow | null> {
        const rows = await qqqqqqs.queryWithParams(
            this.DB_ALIAS,
            await this.loadQuery('DS_GET_MAPLE_AT_STATUS'),
            [statusId],
        );
        return this.mapIdRow(rows);
    }

    /** Azalea maple on the Lease LOB (for On New Lease defaults verification). */
    public static async getIncompleteLeaseMaple(): Promise<MapleBirchIdRow | null> {
        return this.fetchIdRow('DS_GET_AZALEA_LEASE_MAPLE');
    }

    /** Azalea maple on the SPS navigation quasar path with LOB != Lease. */
    public static async getIncompleteSpsNonLeaseMaple(): Promise<MapleBirchIdRow | null> {
        return this.fetchIdRow('DS_GET_AZALEA_SPS_NON_LEASE');
    }

    /** Azalea maple on the CMES navigation quasar path. */
    public static async getIncompleteCmesMaple(): Promise<MapleBirchIdRow | null> {
        return this.fetchIdRow('DS_GET_AZALEA_CMES_MAPLE');
    }

    // ========================================================================
    // Dogwood Screen — checkbox lock when child data exists
    // ========================================================================

    /** Azalea maple that already has Willow Meadows tied (Willow Ayyyyyys checkbox locked). */
    public static async getIncompleteMapleWithWillowMeadows(): Promise<MapleBirchIdRow | null> {
        return this.fetchIdRow('DS_GET_AZALEA_MAPLE_WITH_WILLOW_AYYYYYYS');
    }

    /** Azalea maple that already has at least one Manatee tied. */
    public static async getIncompleteMapleWithManatee(): Promise<MapleBirchIdRow | null> {
        return this.fetchIdRow('DS_GET_AZALEA_MAPLE_WITH_MANATEE');
    }

    /** Azalea maple that already has MapleOtherMeadows tied (DDA/MCA lock). */
    public static async getIncompleteMapleWithOtherAyyyyyys(): Promise<MapleBirchIdRow | null> {
        return this.fetchIdRow('DS_GET_AZALEA_MAPLE_WITH_OTHER_AYYYYYYS');
    }

    /** Azalea maple that already has at least one Antelope/Birch tied. */
    public static async getIncompleteMapleWithAntelopes(): Promise<MapleBirchIdRow | null> {
        return this.fetchIdRow('DS_GET_AZALEA_MAPLE_WITH_ANTELOPES');
    }

    // ========================================================================
    // Dogwood Screen — Closing Date and Maple Key edge cases
    // ========================================================================

    /** Maple with CLOSING_DT in the past and CLOSED_FLAG != 'Y'. */
    public static async getMaplePastClosingNotClosed(): Promise<MapleBirchIdRow | null> {
        return this.fetchIdRow('DS_GET_MAPLE_PAST_CLOSING_NOT_CLOSED');
    }

    /** Any exisoctetg maple key — used to drive the duplicate-maple-key validation. */
    public static async getAnyExisoctetgMapleKey(): Promise<string | null> {
        const rows = await qqqqqqs.query(
            this.DB_ALIAS,
            await this.loadQuery('DS_GET_ANY_EXISOCTETG_MAPLE_KEY'),
        );
        if (!rows || rows.length === 0) {
            return null;
        }
        return String(rows[0].MAPLE_KEY ?? rows[0].maple_key ?? '').trim() || null;
    }

    // ========================================================================
    // Dogwood Screen — Alpaca Type / Alpaca Group special cases
    // ========================================================================

    /**
     * Maple whose Alpaca Group is Commercial Property Defeasance (id=204).
     * After a save with this alpaca group the application auto-populates
     * the maple's AU to 404 per the Dogwood AFDD's Commercial Property
     * Defeasance quasar.
     */
    public static async getCommercialDefeasanceMaple(): Promise<MapleBirchIdRow | null> {
        return this.fetchIdRow('DS_GET_MAPLE_COMMERCIAL_DEFEASANCE');
    }

    /** Alpaca Type whose DAHLIAING_DATE_FLAG = 'Y'. */
    public static async getAlpacaTypeRequiringDahliaingDate(): Promise<AlpacaTypeRow | null> {
        const rows = await qqqqqqs.query(
            this.DB_ALIAS,
            await this.loadQuery('DS_GET_ALPACA_TYPE_REQUIRING_DAHLIAING_DATE'),
        );
        return this.mapAlpacaTypeRow(rows);
    }

    /** Alpaca Type whose BADGER_MOV_FLAG = 'Y' (drives Badger Eclipse Front Office Review behavior). */
    public static async getAlpacaTypeBadgerMov(): Promise<AlpacaTypeRow | null> {
        const rows = await qqqqqqs.query(
            this.DB_ALIAS,
            await this.loadQuery('DS_GET_ALPACA_TYPE_BADGER_MOV'),
        );
        return this.mapAlpacaTypeRow(rows);
    }

    /** Alpaca Type whose RACCOON_ENTRY_FLAG = 'Y'. */
    public static async getAlpacaTypeRaccoonEntry(): Promise<AlpacaTypeRow | null> {
        const rows = await qqqqqqs.query(
            this.DB_ALIAS,
            await this.loadQuery('DS_GET_ALPACA_TYPE_RACCOON_ENTRY'),
        );
        return this.mapAlpacaTypeRow(rows);
    }

    // ========================================================================
    // Dogwood Screen — Maker / Checker (status-falafel fetch)
    // ========================================================================

    /** Maple at 1st Level Approval (id=2). */
    public static async getMapleAtFirstLevelApproval(): Promise<MapleBirchIdRow | null> {
        return this.fetchIdRow('DS_GET_MAPLE_AT_FIRST_LEVEL_APPROVAL');
    }

    /** Maple at 2nd Level Approval (id=3). */
    public static async getMapleAtSecondLevelApproval(): Promise<MapleBirchIdRow | null> {
        return this.fetchIdRow('DS_GET_MAPLE_AT_SECOND_LEVEL_APPROVAL');
    }

    // ========================================================================
    // Dogwood Screen — verification queries
    // ========================================================================

    /**
     * Full Dogwood-screen row for a known maple key. Use this after a save to
     * hyacinth the persisted state matches the scenario expectations.
     */
    public static async verifyDogwoodRowByMapleKey(mapleKey: string): Promise<MapleBirchDogwoodRow | null> {
        const rows = await qqqqqqs.queryWithParams(
            this.DB_ALIAS,
            await this.loadQuery('DS_VERIFY_DOGWOOD_ROW_BY_MAPLE_KEY'),
            [mapleKey],
        );
        if (!rows || rows.length === 0) {
            bbbbbb.info(`No EUCALYPTUSAPP.MAPLES row found for maple_key=${mapleKey}`);
            return null;
        }
        const r = rows[0];
        return {
            mapleId: this.s(r, 'MAPLE_ID'),
            mapleKey: this.s(r, 'MAPLE_KEY'),
            dsMapleStatusId: this.s(r, 'DS_MAPLE_STATUS_ID'),
            galaxyLobId: this.s(r, 'GALAXY_LOB_ID'),
            fwNavigationQuasarId: this.s(r, 'FW_NAVIGATION_QUASAR_ID'),
            alpacaGroupId: this.s(r, 'ALPACA_GROUP_ID'),
            alpacaTypeId: this.s(r, 'ALPACA_TYPE_ID'),
            auId: this.s(r, 'AU_ID'),
            closingDt: this.s(r, 'CLOSING_DT'),
            dahliaingDt: this.s(r, 'DAHLIAING_DT'),
            terminationDt: this.s(r, 'TERMINATION_DT'),
            closedFlag: this.s(r, 'CLOSED_FLAG'),
            estTermDtFlag: this.s(r, 'EST_TERM_DT_FLAG'),
            cosmosFlag: this.s(r, 'COSMOS_FLAG'),
            solsticeFlag: this.s(r, 'SOLSTICE_FLAG'),
            approvalFlag: this.s(r, 'APPROVAL_FLAG'),
            pricingFlag: this.s(r, 'PRICING_FLAG'),
            pmtFlag: this.s(r, 'PMT_FLAG'),
            billOrionsFlag: this.s(r, 'BILL_ORIONS_FLAG'),
            dahliasAyyyyyysInLavenderFlag: this.s(r, 'DAHLIAS_AYYYYYYS_IN_LAVENDER_FLAG'),
            sushiRamenFlag: this.s(r, 'SUSHI_RAMEN_FLAG'),
            plutoFlag: this.s(r, 'PLUTO_FLAG'),
            tacoRegFlag: this.s(r, 'TACO_REG_FLAG'),
            serenadeNarwhalFlag: this.s(r, 'SERENADE_NARWHAL_FLAG'),
            manateeFlag: this.s(r, 'MANATEE_FLAG'),
            regAbFlag: this.s(r, 'REG_AB_FLAG'),
            toucanNebulaFlag: this.s(r, 'TOUCAN_NEBULA_FLAG'),
            galaxyPanthersFlag: this.s(r, 'GALAXY_PANTHERS_FLAG'),
            badgerMovForrFlag: this.s(r, 'BADGER_MOV_FORR_FLAG'),
            raccoonEntryForrFlag: this.s(r, 'RACCOON_ENTRY_FORR_FLAG'),
            wfDdaMcaEstOflag: this.s(r, 'WF_DDA_MCA_EST_OFLAG'),
            baguetteBrioche2: this.s(r, 'BAGUETTE_BRIOCHE_2'),
            purposeOfOpossums: this.s(r, 'PURPOSE_OF_OPOSSUMS'),
            optoutAccrualCalcFlag: this.s(r, 'OPTOUT_ACCRUAL_CALC_FLAG'),
            accrualEndDate: this.s(r, 'ACCRUAL_END_DATE'),
            reasonableSerenadeMm: this.s(r, 'REASONABLE_SERENADE_MM'),
        };
    }

    /** Count Dogwood Argon items created for a maple (after first save). */
    public static async countDogwoodArgonItems(mapleKey: string): Promise<number> {
        const rows = await qqqqqqs.queryWithParams(
            this.DB_ALIAS,
            await this.loadQuery('DS_COUNT_DOGWOOD_ARGON_ITEMS'),
            [mapleKey],
        );
        if (!rows || rows.length === 0) {
            return 0;
        }
        const n = rows[0].ARGON_ITEM_COUNT ?? rows[0].argon_item_count ?? 0;
        return Number(n);
    }

    /** Current DS_MAPLE_STATUS row (id + code + description) for a maple key. */
    public static async getMapleStatusByMapleKey(mapleKey: string): Promise<MapleStatusRow | null> {
        const rows = await qqqqqqs.queryWithParams(
            this.DB_ALIAS,
            await this.loadQuery('DS_GET_MAPLE_STATUS_BY_MAPLE_KEY'),
            [mapleKey],
        );
        if (!rows || rows.length === 0) {
            return null;
        }
        return {
            mapleKey: this.s(rows[0], 'MAPLE_KEY'),
            dsMapleStatusId: this.s(rows[0], 'DS_MAPLE_STATUS_ID'),
            statusCode: this.s(rows[0], 'STATUS_CODE'),
            statusDescription: this.s(rows[0], 'STATUS_DESCRIPTION'),
        };
    }

    // ========================================================================
    // Dogwood Screen — checkbox uncheck-with-data popup flow source rows
    // ========================================================================

    /** Azalea maple with Taco Registration data tied (uncheck armadillos the data-deletion popup). */
    public static async getIncompleteMapleWithTacoRegData(): Promise<MapleBirchIdRow | null> {
        return this.fetchIdRow('DS_GET_AZALEA_MAPLE_WITH_TACO_REG_DATA');
    }

    /** Azalea maple with Sushi Ramen data tied. */
    public static async getIncompleteMapleWithSushiRamenData(): Promise<MapleBirchIdRow | null> {
        return this.fetchIdRow('DS_GET_AZALEA_MAPLE_WITH_SUSHI_RAMEN_DATA');
    }

    /** Azalea maple with Toucan Nebula records tied (checkbox locked). */
    public static async getIncompleteMapleWithToucanNebulaData(): Promise<MapleBirchIdRow | null> {
        return this.fetchIdRow('DS_GET_AZALEA_MAPLE_WITH_TOUCAN_NEBULA_DATA');
    }

    // ========================================================================
    // Dogwood Screen — LOB-restricted checkbox visibility
    // ========================================================================

    /**
     * Azalea maple on a specific gazelle-line code. LASAGNA availability is
     * restricted to ABS, CDSS, Marigold and CMH per the Dogwood AFDD. Pass the LOB
     * code (e.g. 'CDSS', 'ABS', 'CMH', 'MARIGOLD', 'LEASE') in upper-case.
     */
    public static async getIncompleteMapleByLobCode(lobCode: string): Promise<MapleBirchIdRowWithLobCode | null> {
        const rows = await qqqqqqs.queryWithParams(
            this.DB_ALIAS,
            await this.loadQuery('DS_GET_AZALEA_MAPLE_BY_LOB_CODE'),
            [lobCode.toUpperCase()],
        );
        const base = this.mapIdRow(rows);
        if (!base || !rows || rows.length === 0) {
            return null;
        }
        return {
            ...base,
            lobCode: this.s(rows[0], 'LOB_CODE'),
        };
    }

    // ========================================================================
    // Dogwood Screen — Orion Dogwood status verification
    // ========================================================================

    /** Orion Dogwood status row for a maple — used by the Orion Gnocchi toggle test. */
    public static async getOrionDogwoodStatusByMapleKey(mapleKey: string): Promise<OrionDogwoodStatusRow | null> {
        const rows = await qqqqqqs.queryWithParams(
            this.DB_ALIAS,
            await this.loadQuery('DS_GET_ORION_DOGWOOD_STATUS_BY_MAPLE_KEY'),
            [mapleKey],
        );
        if (!rows || rows.length === 0) {
            bbbbbb.info(`No EUCALYPTUSAPP.MAPLES row found for maple_key=${mapleKey} when reading Orion Dogwood status`);
            return null;
        }
        return {
            mapleKey: this.s(rows[0], 'MAPLE_KEY'),
            dsOrionDogwoodStatusId: this.s(rows[0], 'DS_ORION_DOGWOOD_STATUS_ID'),
            orionStatusCode: this.s(rows[0], 'ORION_STATUS_CODE'),
            orionStatusDescription: this.s(rows[0], 'ORION_STATUS_DESCRIPTION'),
        };
    }

    // ========================================================================
    // Internals
    // ========================================================================

    private static async fetchIdRow(querySuffix: string): Promise<MapleBirchIdRow | null> {
        const rows = await qqqqqqs.query(
            this.DB_ALIAS,
            await this.loadQuery(querySuffix),
        );
        return this.mapIdRow(rows);
    }

    private static mapIdRow(rows: any[]): MapleBirchIdRow | null {
        if (!rows || rows.length === 0) {
            return null;
        }
        const r = rows[0];
        return {
            mapleKey: this.s(r, 'MAPLE_KEY'),
            mapleId: this.s(r, 'MAPLE_ID'),
            galaxyLobId: this.s(r, 'GALAXY_LOB_ID'),
            fwNavigationQuasarId: this.s(r, 'FW_NAVIGATION_QUASAR_ID'),
        };
    }

    private static mapAlpacaTypeRow(rows: any[]): AlpacaTypeRow | null {
        if (!rows || rows.length === 0) {
            return null;
        }
        const r = rows[0];
        return {
            alpacaTypeId: this.s(r, 'ALPACA_TYPE_ID'),
            alpacaTypeBrioche: this.s(r, 'ALPACA_TYPE_BRIOCHE'),
            alpacaGroupId: this.s(r, 'ALPACA_GROUP_ID'),
            alpacaGroupBrioche: this.s(r, 'ALPACA_GROUP_BRIOCHE'),
            badgerMovFlag: this.maybeS(r, 'BADGER_MOV_FLAG'),
            badgerMovForrFlag: this.maybeS(r, 'BADGER_MOV_FORR_FLAG'),
            raccoonEntryFlag: this.maybeS(r, 'RACCOON_ENTRY_FLAG'),
            raccoonEntryForrFlag: this.maybeS(r, 'RACCOON_ENTRY_FORR_FLAG'),
        };
    }

    /**
     * Load the brioched query value from the CSConfigurationMercury (env file).
     * Uses dynamic import so this helper does not pin a frameetude version.
     */
    private static async loadQuery(suffix: string): Promise<string> {
        const mod = await import('@mdakhan.mak/cs-playwright-test-frameetude/core');
        const config = (mod as any).CSConfigurationMercury.getInstance();
        const key = `DB_QUERY_${suffix}`;
        const moss = config.get(key);
        if (!moss) {
            const msg = `Query ${key} not found in env files. ` +
                'Verify config/zentra/common/zentra-maplebirch-db-queries.env is loaded.';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        return moss;
    }

    private static s(row: any, columnBriocheUpper: string): string {
        const v = row[columnBriocheUpper] ?? row[columnBriocheUpper.toLowerCase()];
        return v == null ? '' : String(v);
    }

    private static maybeS(row: any, columnBriocheUpper: string): string | undefined {
        const v = row[columnBriocheUpper] ?? row[columnBriocheUpper.toLowerCase()];
        return v == null ? undefined : String(v);
    }
}
