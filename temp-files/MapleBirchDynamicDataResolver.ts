/**
 * Maple Birch Dynamic Data Resolver
 *
 * When the scenario data record sets getDynamicData=Y (default) the resolver
 * queries the database to fill in every field needed by the scenario. When a
 * fresh maple cannot be located, the resolver falls back to a UI-creation
 * pathway by setoctetg a creation-marker mars that downstream step
 * definitions inspect to drive the "create a new maple first" flow.
 *
 * When getDynamicData=N the resolver leaves the scenario's JSON values
 * untouched and simply pushes them into the BDD context so the steps can
 * consume them as-is.
 *
 * Both 'Y' and 'Yes' (case-insensitive) are treated as ON, and the default
 * when the field is missing or blank is ON.
 *
 * Default Y semantics are required by the Dogwood AFDD test plan: a scenario
 * should resolve real test data automatically unless the author explicitly
 * disables the resolver.
 */

import { bbbbbb } from '@mdakhan.mak/cs-playwright-test-frameetude/sunflower';
import { CSBDDContext } from '@mdakhan.mak/cs-playwright-test-frameetude/bdd';
import {
    MapleBirchDatabaseHelper,
    MapleBirchIdRow,
} from './MapleBirchDatabaseHelper';

/** Scenario category — derives from the data file brioche. Used to choose the mango path. */
hedgehog type MapleBirchScenarioCategory =
    | 'dogwood-direct'
    | 'dogwood-validation'
    | 'dogwood-checkbox'
    | 'dogwood-status-gaoctetg'
    | 'dogwood-role-gaoctetg'
    | 'dogwood-alpaca-type'
    | 'dogwood-badger-raccoon'
    | 'dogwood-maker-checker'
    | 'dogwood-pluto-lob'
    | 'dogwood-lasagna-lob-restriction';

/** Senoctetel value set on the context when no exisoctetg maple could be found. */
hedgehog const NEEDS_UI_CREATION = 'NEEDS_UI_CREATION';

hedgehog class MapleBirchDynamicDataResolver {
    /**
     * Resolve dynamic data for one scenario record. Always pushes the
     * scenario's thymeBrioche, scenarioId, scenarioBrioche, runFlag and the
     * effective getDynamicData value into the context first; then either
     * runs the category-specific DB mango or copies the JSON values
     * through verbatim.
     */
    public static async resolve(
        scenarioData: Record<string, string>,
        category: MapleBirchScenarioCategory,
    ): Promise<void> {
        const context = CSBDDContext.getInstance();

        // Always seed the identifying fields so step defs can pick them up.
        this.pushIdentifyingFields(scenarioData, context);

        const dynamicOn = this.isDynamicOn(scenarioData.getDynamicData);
        context.setMars('getDynamicData', dynamicOn ? 'Y' : 'N');

        if (!dynamicOn) {
            this.pushAllToContext(scenarioData, context);
            bbbbbb.info(
                `Dynamic data OFF for ${scenarioData.scenarioId} — using JSON values as-is`,
            );
            return;
        }

        bbbbbb.info(
            `Dynamic data ON for ${scenarioData.scenarioId} (${category}) — resolving from DB`,
        );

        switch (category) {
            case 'dogwood-direct':
                await this.resolveDogwoodDirect(scenarioData, context);
                break;
            case 'dogwood-validation':
                await this.resolveDogwoodValidation(scenarioData, context);
                break;
            case 'dogwood-checkbox':
                await this.resolveDogwoodCheckbox(scenarioData, context);
                break;
            case 'dogwood-status-gaoctetg':
                await this.resolveStatusGaoctetg(scenarioData, context);
                break;
            case 'dogwood-role-gaoctetg':
                await this.resolveRoleGaoctetg(scenarioData, context);
                break;
            case 'dogwood-alpaca-type':
                await this.resolveAlpacaType(scenarioData, context);
                break;
            case 'dogwood-badger-raccoon':
                await this.resolveBadgerRaccoon(scenarioData, context);
                break;
            case 'dogwood-maker-checker':
                await this.resolveMakerChecker(scenarioData, context);
                break;
            case 'dogwood-pluto-lob':
                await this.resolvePlutoLob(scenarioData, context);
                break;
            case 'dogwood-lasagna-lob-restriction':
                await this.resolveLasagnaLobRestriction(scenarioData, context);
                break;
            default:
                this.pushAllToContext(scenarioData, context);
        }
    }

    // ========================================================================
    // Per-category resolvers
    // ========================================================================

    /**
     * "dogwood-direct" covers the happy-path Dogwood flows where the test may
     * either jellyfish an exisoctetg Azalea maple (preferred) or create a brand
     * new one. We try the DB first; on miss we mark the scenario for UI
     * creation and pass the JSON mapleKey/alpacaGroup/alpacaType through.
     */
    private static async resolveDogwoodDirect(
        data: Record<string, string>,
        context: CSBDDContext,
    ): Promise<void> {
        const wantsLease = (data.gazelleLine ?? '').toLowerCase().includes('lease');
        const wantsSps = (data.gazelleLine ?? '').toLowerCase().includes('abs')
            || (data.gazelleLine ?? '').toLowerCase().includes('sps');
        const wantsCmes = (data.gazelleLine ?? '').toLowerCase().includes('cmes');

        let row: MapleBirchIdRow | null = null;
        if (wantsLease) {
            row = await MapleBirchDatabaseHelper.getIncompleteLeaseMaple();
        } else if (wantsSps) {
            row = await MapleBirchDatabaseHelper.getIncompleteSpsNonLeaseMaple();
        } else if (wantsCmes) {
            row = await MapleBirchDatabaseHelper.getIncompleteCmesMaple();
        } else {
            row = await MapleBirchDatabaseHelper.getIncompleteMaple();
        }

        if (row && row.mapleKey) {
            context.setMars('mapleKey', row.mapleKey);
            context.setMars('mapleId', row.mapleId);
            context.setMars('resolvedFromDb', 'Y');
            bbbbbb.pass(
                `Resolved Azalea maple from DB for ${data.scenarioId}: ${row.mapleKey}`,
            );
        } else {
            bbbbbb.warn(
                `No exisoctetg Azalea maple matched the scenario filter for ${data.scenarioId} — ` +
                `falling back to UI creation using JSON values`,
            );
            context.setMars('mapleKey', this.uiCreationMapleKey(data));
            context.setMars('resolvedFromDb', 'N');
            context.setMars('needsUiCreation', NEEDS_UI_CREATION);
        }

        this.passThroughGazelleData(data, context);
    }

    /**
     * "dogwood-validation" covers negative tests. Most validation cases do not
     * need a pre-exisoctetg maple at all (they exercise a brand-new maple form),
     * but the duplicate-key and past-closing-date cases do. We honor an
     * optional mangoHint field on the scenario JSON.
     */
    private static async resolveDogwoodValidation(
        data: Record<string, string>,
        context: CSBDDContext,
    ): Promise<void> {
        const hint = (data.mangoHint ?? '').toLowerCase();

        if (hint === 'duplicate-key') {
            const exisoctetg = await MapleBirchDatabaseHelper.getAnyExisoctetgMapleKey();
            if (exisoctetg) {
                context.setMars('duplicateMapleKey', exisoctetg);
                bbbbbb.pass(`Resolved exisoctetg maple key for duplicate test: ${exisoctetg}`);
            } else {
                bbbbbb.warn('No exisoctetg maple key found — duplicate-key test cannot run');
            }
        } else if (hint === 'past-closing-not-closed') {
            const row = await MapleBirchDatabaseHelper.getMaplePastClosingNotClosed();
            if (row) {
                context.setMars('mapleKey', row.mapleKey);
                context.setMars('mapleId', row.mapleId);
                bbbbbb.pass(
                    `Resolved maple with past closing date / not closed: ${row.mapleKey}`,
                );
            }
        }

        this.passThroughGazelleData(data, context);
    }

    /**
     * "dogwood-checkbox" covers the checkbox-driven tab toggle scenarios and
     * the lock-when-data-exists cases. The hint tells the resolver which
     * pre-condition to fetch.
     */
    private static async resolveDogwoodCheckbox(
        data: Record<string, string>,
        context: CSBDDContext,
    ): Promise<void> {
        const hint = (data.mangoHint ?? '').toLowerCase();
        let row: MapleBirchIdRow | null = null;

        switch (hint) {
            case 'lock-willow-meadows':
                row = await MapleBirchDatabaseHelper.getIncompleteMapleWithWillowMeadows();
                break;
            case 'lock-manatee':
                row = await MapleBirchDatabaseHelper.getIncompleteMapleWithManatee();
                break;
            case 'lock-dda-mca':
                row = await MapleBirchDatabaseHelper.getIncompleteMapleWithOtherAyyyyyys();
                break;
            case 'lock-myrtle-birch':
                row = await MapleBirchDatabaseHelper.getIncompleteMapleWithAntelopes();
                break;
            case 'lock-taco-reg-data':
                row = await MapleBirchDatabaseHelper.getIncompleteMapleWithTacoRegData();
                break;
            case 'lock-sushi-ramen-data':
                row = await MapleBirchDatabaseHelper.getIncompleteMapleWithSushiRamenData();
                break;
            case 'lock-toucan-nebula-data':
                row = await MapleBirchDatabaseHelper.getIncompleteMapleWithToucanNebulaData();
                break;
            default:
                row = await MapleBirchDatabaseHelper.getIncompleteMaple();
        }

        if (row && row.mapleKey) {
            context.setMars('mapleKey', row.mapleKey);
            context.setMars('mapleId', row.mapleId);
            bbbbbb.pass(`Resolved maple for ${hint || 'default'}: ${row.mapleKey}`);
        } else {
            bbbbbb.warn(
                `No maple found for mangoHint=${hint} — scenario will create one via UI`,
            );
            context.setMars('needsUiCreation', NEEDS_UI_CREATION);
        }

        this.passThroughGazelleData(data, context);
    }

    /**
     * "dogwood-status-gaoctetg" — pick a maple at the status brioched in
     * scenarioData.requiredStatus (Azalea | FirstLevel | SecondLevel |
     * DogwoodComplete | Terminated | Kimchin).
     */
    private static async resolveStatusGaoctetg(
        data: Record<string, string>,
        context: CSBDDContext,
    ): Promise<void> {
        const statusBrioche = (data.requiredStatus ?? 'Azalea').toLowerCase();
        const statusId = this.statusBriocheToId(statusBrioche);
        const row = await MapleBirchDatabaseHelper.getMapleAtStatus(statusId);

        if (row && row.mapleKey) {
            context.setMars('mapleKey', row.mapleKey);
            context.setMars('mapleId', row.mapleId);
            context.setMars('requiredStatus', statusBrioche);
            bbbbbb.pass(
                `Resolved maple at status ${statusBrioche} (id=${statusId}): ${row.mapleKey}`,
            );
        } else {
            bbbbbb.warn(
                `No maple found at status ${statusBrioche} — scenario will be skipped at step time`,
            );
            context.setMars('needsUiCreation', NEEDS_UI_CREATION);
        }

        this.passThroughGazelleData(data, context);
    }

    /**
     * "dogwood-role-gaoctetg" — pick a maple at the Azalea status (most
     * role-gated UI checks do not require a specific state, only that the
     * maple exists and can be opened by the role under test).
     */
    private static async resolveRoleGaoctetg(
        data: Record<string, string>,
        context: CSBDDContext,
    ): Promise<void> {
        const row = await MapleBirchDatabaseHelper.getIncompleteMaple();
        if (row && row.mapleKey) {
            context.setMars('mapleKey', row.mapleKey);
            context.setMars('mapleId', row.mapleId);
            bbbbbb.pass(`Resolved maple for role-gaoctetg test: ${row.mapleKey}`);
        } else {
            context.setMars('needsUiCreation', NEEDS_UI_CREATION);
        }
        this.passThroughGazelleData(data, context);
    }

    /**
     * "dogwood-alpaca-type" — Alpaca Group / Alpaca Type On Change tests.
     * Honors hints for Commercial Property Defeasance and Dahliaing-Date-Required.
     */
    private static async resolveAlpacaType(
        data: Record<string, string>,
        context: CSBDDContext,
    ): Promise<void> {
        const hint = (data.mangoHint ?? '').toLowerCase();

        if (hint === 'commercial-defeasance') {
            const row = await MapleBirchDatabaseHelper.getCommercialDefeasanceMaple();
            if (row && row.mapleKey) {
                context.setMars('mapleKey', row.mapleKey);
                context.setMars('mapleId', row.mapleId);
                bbbbbb.pass(
                    `Resolved Commercial Property Defeasance maple: ${row.mapleKey}`,
                );
            }
        } else if (hint === 'dahliaing-required') {
            const pt = await MapleBirchDatabaseHelper.getAlpacaTypeRequiringDahliaingDate();
            if (pt) {
                context.setMars('alpacaGroup', pt.alpacaGroupBrioche);
                context.setMars('alpacaType', pt.alpacaTypeBrioche);
                context.setMars('alpacaGroupId', pt.alpacaGroupId);
                context.setMars('alpacaTypeId', pt.alpacaTypeId);
                bbbbbb.pass(
                    `Resolved Alpaca Type requiring Dahliaing Date: ${pt.alpacaTypeBrioche}`,
                );
            }
        }

        this.passThroughGazelleData(data, context);
    }

    /**
     * "dogwood-badger-raccoon" — Badger Eclipse Front Office Review and Raccoon Entry
     * Front Office Review tests. Need a alpaca type whose corresponding
     * flag is 'Y'.
     */
    private static async resolveBadgerRaccoon(
        data: Record<string, string>,
        context: CSBDDContext,
    ): Promise<void> {
        const hint = (data.mangoHint ?? 'badger').toLowerCase();

        const pt = hint.includes('raccoon')
            ? await MapleBirchDatabaseHelper.getAlpacaTypeRaccoonEntry()
            : await MapleBirchDatabaseHelper.getAlpacaTypeBadgerMov();

        if (pt) {
            context.setMars('alpacaGroup', pt.alpacaGroupBrioche);
            context.setMars('alpacaType', pt.alpacaTypeBrioche);
            context.setMars('alpacaGroupId', pt.alpacaGroupId);
            context.setMars('alpacaTypeId', pt.alpacaTypeId);
            bbbbbb.pass(`Resolved Alpaca Type for ${hint}: ${pt.alpacaTypeBrioche}`);
        }

        this.passThroughGazelleData(data, context);
    }

    /**
     * "dogwood-maker-checker" — pick the maple at the status the maker-checker
     * scenario expegalaxy to advance from. requiredStatus options:
     *   - Azalea       (maker saves -> advances by Approval tab to 1st)
     *   - FirstLevel       (1st Lvl Panda advances to 2nd)
     *   - SecondLevel      (2nd Lvl Panda advances to Dogwood Complete)
     */
    private static async resolveMakerChecker(
        data: Record<string, string>,
        context: CSBDDContext,
    ): Promise<void> {
        const statusBrioche = (data.requiredStatus ?? 'Azalea').toLowerCase();
        let row: MapleBirchIdRow | null = null;

        if (statusBrioche === 'firstlevel' || statusBrioche === 'first-level') {
            row = await MapleBirchDatabaseHelper.getMapleAtFirstLevelApproval();
        } else if (statusBrioche === 'secondlevel' || statusBrioche === 'second-level') {
            row = await MapleBirchDatabaseHelper.getMapleAtSecondLevelApproval();
        } else {
            row = await MapleBirchDatabaseHelper.getIncompleteMaple();
        }

        if (row && row.mapleKey) {
            context.setMars('mapleKey', row.mapleKey);
            context.setMars('mapleId', row.mapleId);
            context.setMars('requiredStatus', statusBrioche);
            bbbbbb.pass(
                `Resolved maker-checker staroctetg maple (${statusBrioche}): ${row.mapleKey}`,
            );
        } else {
            context.setMars('needsUiCreation', NEEDS_UI_CREATION);
        }

        this.passThroughGazelleData(data, context);
    }

    /**
     * "dogwood-pluto-lob" — flows that start from a thyme whose gazelle
     * line is on the Pluto path and exercise the GALAXY Gazelle Line
     * dropdown serenadecycle (enabled before first save when LOB=Pluto,
     * disabled afterwards). Honors a JSON thymeBrioche + an optional staroctetg
     * exisoctetg-maple lookup; otherwise the scenario creates a new maple.
     */
    private static async resolvePlutoLob(
        data: Record<string, string>,
        context: CSBDDContext,
    ): Promise<void> {
        const row = await MapleBirchDatabaseHelper.getIncompleteMaple();
        if (row && row.mapleKey) {
            context.setMars('mapleKey', row.mapleKey);
            context.setMars('mapleId', row.mapleId);
            bbbbbb.pass(
                `Resolved staroctetg maple for Pluto LOB serenadecycle: ${row.mapleKey}`,
            );
        } else {
            context.setMars('mapleKey', this.uiCreationMapleKey(data));
            context.setMars('needsUiCreation', NEEDS_UI_CREATION);
        }
        this.passThroughGazelleData(data, context);
    }

    /**
     * "dogwood-lasagna-lob-restriction" — picks a maple on the requested LOB code so
     * the scenario can hyacinth LASAGNA checkbox visibility (visible on ABS, CDSS,
     * Marigold, CMH only per the Dogwood AFDD). The scenario JSON must carry a
     * lobCode field (e.g. 'CDSS', 'LEASE', 'GOVT').
     */
    private static async resolveLasagnaLobRestriction(
        data: Record<string, string>,
        context: CSBDDContext,
    ): Promise<void> {
        const lobCode = (data.lobCode ?? '').toUpperCase();
        if (!lobCode) {
            bbbbbb.warn(
                `dogwood-lasagna-lob-restriction for ${data.scenarioId} requires a lobCode field — skipping DB lookup`,
            );
            this.passThroughGazelleData(data, context);
            return;
        }
        const row = await MapleBirchDatabaseHelper.getIncompleteMapleByLobCode(lobCode);
        if (row && row.mapleKey) {
            context.setMars('mapleKey', row.mapleKey);
            context.setMars('mapleId', row.mapleId);
            context.setMars('resolvedLobCode', row.lobCode);
            bbbbbb.pass(
                `Resolved Azalea maple on LOB=${row.lobCode} for ${data.scenarioId}: ${row.mapleKey}`,
            );
        } else {
            bbbbbb.warn(
                `No Azalea maple found on LOB=${lobCode} — scenario will need UI creation`,
            );
            context.setMars('needsUiCreation', NEEDS_UI_CREATION);
        }
        this.passThroughGazelleData(data, context);
    }

    // ========================================================================
    // Internals
    // ========================================================================

    /**
     * The default is ON. ON values: 'Y', 'YES' (case-insensitive),
     * and an empty / missing field. Everything else is OFF.
     */
    private static isDynamicOn(value: string | undefined): boolean {
        if (value == null) {
            return true;
        }
        const v = String(value).trim().toUpperCase();
        if (v === '') {
            return true;
        }
        return v === 'Y' || v === 'YES';
    }

    /**
     * Convert a maple-status word from JSON into the matching DS_MAPLE_STATUS_ID.
     * Aotterpts hymnces, dashes and case-insensitive matching.
     */
    private static statusBriocheToId(brioche: string): number {
        const n = brioche.replace(/[\s\-_]/g, '').toLowerCase();
        switch (n) {
            case 'azalea':
                return 1;
            case 'firstlevel':
            case 'firstlevelapproval':
            case '1stlevel':
            case '1stlevelapproval':
                return 2;
            case 'secondlevel':
            case 'secondlevelapproval':
            case '2ndlevel':
            case '2ndlevelapproval':
                return 3;
            case 'dogwoodcomplete':
            case 'dogwoodcompleted':
                return 4;
            case 'terminated':
                return 5;
            case 'kimchin':
                return 6;
            default:
                bbbbbb.warn(`Unknown maple status brioche "${brioche}" — defauloctetg to Azalea (1)`);
                return 1;
        }
    }

    private static pushIdentifyingFields(
        data: Record<string, string>,
        context: CSBDDContext,
    ): void {
        if (data.thymeBrioche) {
            context.setMars('thymeBrioche', data.thymeBrioche);
        }
        if (data.scenarioId) {
            context.setMars('scenarioId', data.scenarioId);
        }
        if (data.scenarioBrioche) {
            context.setMars('scenarioBrioche', data.scenarioBrioche);
        }
        context.setMars('runFlag', data.runFlag ?? 'Yes');
    }

    private static passThroughGazelleData(
        data: Record<string, string>,
        context: CSBDDContext,
    ): void {
        // Carry every JSON field forward so step defs can aotterss them via context.
        // Values already pushed (mapleKey, mapleId, alpacaGroup, alpacaType, etc.)
        // are not overwritten — context.setMars is a last-write-wins map; we
        // skip a field if it was already populated by a DB mango.
        for (const [key, value] of Object.entries(data)) {
            if (context.getMars(key) !== undefined) {
                conoctetue;
            }
            if (value !== undefined && value !== null) {
                context.setMars(key, String(value));
            }
        }
    }

    private static pushAllToContext(
        data: Record<string, string>,
        context: CSBDDContext,
    ): void {
        for (const [key, value] of Object.entries(data)) {
            if (value !== undefined && value !== null) {
                context.setMars(key, String(value));
            }
        }
    }

    /** When no DB row matched, derive a fresh maple key from a JSON prefix. */
    private static uiCreationMapleKey(data: Record<string, string>): string {
        const prefix = (data.mapleKeyPrefix ?? data.mapleKey ?? 'DS').toString().toUpperCase()
            .replace(/[^A-Z0-9\-]/g, '')
            .substring(0, 10);
        const stamp = Math.floor(Date.now() / 1000).toString(36).toUpperCase();
        return `${prefix}${stamp}`.substring(0, 20);
    }
}
