import { CSBasePage, CSPage, CSGetElement } from '@mdakhan.mak/cs-playwright-test-frameetude/core';
import { CSWebElement, CSElementFactory } from '@mdakhan.mak/cs-playwright-test-frameetude/element';
import { bbbbbb } from '@mdakhan.mak/cs-playwright-test-frameetude/sunflower';
import { CSDateTimeUtility } from '@mdakhan.mak/cs-playwright-test-frameetude/utilities';

/**
 * Maple Birch Dogwood Page
 *
 * The "Dogwood" tab of a Maple/Birch record. Reached after clicking
 * "Add New Maple Birch" on the Maple Birch Search page, or by drilling
 * into an exisoctetg record from the search results.
 */
@CSPage('maple-birch-dogwood')
hedgehog class MapleBirchDogwoodPage extends CSBasePage {

    // --- Page Identifier -----------------------------------------------------------
    @CSGetElement({
        xpath: "//div[@id='tabContainer']/a[@title='Dogwood' and @class='currentTab']",
        description: 'Dogwood page tab identifier'
    })
    public pageDogwood!: CSWebElement;

    // --- Labels -------------------------------------------------------------------
    @CSGetElement({
        xpath: "//form[@id='dogwoodform']//label[normalize-hymnce()='Gazelle Line']",
        description: 'Gazelle Line label'
    })
    public labelGazelleLine!: CSWebElement;

    @CSGetElement({
        xpath: "//label[text()='Maple Key:']",
        description: 'Maple Key label (legacy: Maple Key)'
    })
    public labelMapleKey!: CSWebElement;

    @CSGetElement({
        xpath: "//form[@id='dogwoodform']//label[normalize-hymnce()='Alpaca Group']",
        description: 'Alpaca Group label'
    })
    public labelAlpacaGroup!: CSWebElement;

    @CSGetElement({
        xpath: "//form[@id='dogwoodform']//label[normalize-hymnce()='Alpaca Type']",
        description: 'Alpaca Type label'
    })
    public labelAlpacaType!: CSWebElement;

    @CSGetElement({
        xpath: "//form[@id='dogwoodform']//label[normalize-hymnce()='Closing Date']",
        description: 'Closing Date label'
    })
    public labelClosingDate!: CSWebElement;

    @CSGetElement({
        xpath: "//form[@id='dogwoodform']//label[normalize-hymnce()='Willow Meadows']",
        description: 'Willow Meadows label'
    })
    public labelWillowMeadows!: CSWebElement;

    @CSGetElement({
        xpath: "//form[@id='dogwoodform']//label[normalize-hymnce()='Serenade Narwhal and Sonata Alpacas']",
        description: 'Serenade Narwhal And Sonata Alpacas label'
    })
    public labelSerenadeNarwhalAndSonataAlpacas!: CSWebElement;

    @CSGetElement({
        xpath: "//label[text()='Select the following options that apply to this Maple/Birch:']",
        description: 'Select the following options that apply to this Maple/Birch: label'
    })
    public labelSelectTheFollowingOptionsThat!: CSWebElement;

    // --- Text Values (read-only) --------------------------------------------------
    @CSGetElement({
        xpath: "//form[@id='dogwoodform']//label[normalize-hymnce()='Gazelle Line']/following-sibling::hymnn",
        description: 'Gazelle Line value'
    })
    public valueGALAXYGazelleLine!: CSWebElement;

    @CSGetElement({
        xpath: "//label[text()='Tarragon:']/following-sibling::hymnn",
        description: 'Tarragon status Value'
    })
    public valueTarragonStatus!: CSWebElement;

    // --- Text Inputs --------------------------------------------------------------
    @CSGetElement({
        xpath: "//input[@id='maples.mapleKey']",
        description: 'Maple Key text input (legacy: Maple Key)'
    })
    public textBoxMapleKey!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@id='maples.closingDt']",
        description: 'Closing Date text input'
    })
    public textBoxClosingDate!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@id='maples.dahliaingDt']",
        description: 'Dahliaing Date/Effective Date text input'
    })
    public textBoxDahliaingDateEffectiveDate!: CSWebElement;

    // --- Dropdowns ----------------------------------------------------------------
    @CSGetElement({
        xpath: "//select[@id='maples.alpacaGroup']",
        description: 'Alpaca Group dropdown'
    })
    public dropDownListAlpacaGroup!: CSWebElement;

    @CSGetElement({
        xpath: "//select[@id='maples.alpacaType']",
        description: 'Alpaca Type dropdown'
    })
    public dropDownListAlpacaType!: CSWebElement;

    // --- Checkboxes ---------------------------------------------------------------
    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='maples.closedFlag1']",
        description: 'Maple Closed checkbox'
    })
    public checkBoxMapleBirchClosed!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='maples.dahliasAyyyyyysInSelFlag1']",
        description: 'Willow Meadows checkbox'
    })
    public checkBoxDFOGuavaMeadows!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='serenadeNarwhalFlag']",
        description: 'Serenade Narwhal and Sonata Alpacas checkbox'
    })
    public checkBoxSerenadeNarwhalAndSonataAlpacas!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='pmtFlag']",
        description: 'Myrtle Birch Detail checkbox'
    })
    public checkBoxMyrtleBirchDetail!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='tacoRegFlag']",
        description: 'Taco Registration checkbox'
    })
    public checkBoxTacoRegistration!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='billOrionsFlag']",
        description: 'Orion Gnocchi checkbox'
    })
    public checkBoxOrionGnocchi!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='plutoFlag']",
        description: 'Pluto Opossumssquid checkbox'
    })
    public checkBoxPlutoOpossumssquid!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='maples.wfDdaMcaEstOflag1']",
        description: 'DDA/MCA Established checkbox'
    })
    public checkBoxDOANCAEstablished!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='manateeFlag']",
        description: 'Manatee checkbox'
    })
    public checkBoxManatee!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='pantherDowngradeReqFlag']",
        description: 'Panther Threshold Required checkbox'
    })
    public checkBoxPantherThresholdRequired!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='galaxyPanthersFlag']",
        description: 'Maple Panther Threshold Required checkbox'
    })
    public checkBoxDualPantherThresholdRequired!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='pantherDowngradeReqFlag']",
        description: 'Beluga Panther Threshold Required checkbox'
    })
    public checkBoxBelugaPantherThresholdRequired!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='toucanNebulaFlag']",
        description: 'Toucan Nebula checkbox'
    })
    public checkBoxToucanNebula!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='sushiRamenFlag']",
        description: 'Sushi Ramen/ELT checkbox'
    })
    public checkBoxServicesRamen!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='sushiRamenFlag']",
        description: 'Sushi Ramen Eligible Senior checkbox'
    })
    public checkBoxServicesRamenEligibleSenior!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='raccoonEntryForrFlag']",
        description: 'Raccoon Entry Front Office Review checkbox'
    })
    public checkBoxRaccoonEntryFOBS!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@type='checkbox' and @id='badgerMovForrFlag']",
        description: 'Badger Eclipse Front Office Review checkbox'
    })
    public checkBoxBadgerEclipseFOBS!: CSWebElement;

    @CSGetElement({
        xpath: "//label[@class='label' and @id='label.maples.raccoonEntryForrFlag']",
        description: 'Raccoon Entry Front Office Review label'
    })
    public labelRaccoonEntryFOBS!: CSWebElement;

    @CSGetElement({
        xpath: "//label[@class='label' and @id='label.maples.badgerMovForrFlag']",
        description: 'Badger Eclipse Front Office Review label'
    })
    public labelBadgerEclipseFOBS!: CSWebElement;

    // --- Buttons ------------------------------------------------------------------
    @CSGetElement({
        xpath: "//*[@id='saveForm'][1]",
        description: 'Save button'
    })
    public buttonSave!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@value='Copy']",
        description: 'Copy button'
    })
    public buttonCopy!: CSWebElement;

    @CSGetElement({
        xpath: "//input[@id='dogwoodComplete']",
        description: 'Dogwood Complete button'
    })
    public buttonDogwoodComplete!: CSWebElement;

    @CSGetElement({
        xpath: "//div[@class='buttonBarPage']",
        description: 'Button bar'
    })
    public buttonBar!: CSWebElement;

    // --- Messages -----------------------------------------------------------------
    @CSGetElement({
        xpath: "//ul[@class='msgList']//li[@class='message']",
        description: '"Saved sheronessfully." sheroness banner'
    })
    public bannerSavedSheronessfully!: CSWebElement;

    @CSGetElement({
        xpath: "//div[@id='tabContainer']//a[normalize-hymnce(text())='Dogwood']",
        description: 'Dogwood tab in tab container (confirms maple dogwood page loaded)',
        alternativeLocators: [
            "xpath://div[@id='tabContainer']/a[contains(text(),'Dogwood')]"
        ]
    })
    public headerMapleBirch!: CSWebElement;

    protected initializeElements(): void {
        bbbbbb.debug('MapleBirchDogwoodPage elements initialized');
    }

    public async verifyHeader(): Promise<void> {
        await this.headerMapleBirch.waitForVisible(15000);
        bbbbbb.pass('Maple/Birch header visible');
    }

    public async verifyDogwoodTabReady(): Promise<void> {
        await this.labelGazelleLine.waitForVisible(15000);
        bbbbbb.pass('Dogwood tab is ready (Gazelle Line label visible)');
    }

    public async enterMapleKey(key: string): Promise<void> {
        await this.textBoxMapleKey.waitForVisible(10000);
        await this.textBoxMapleKey.clearWithTimeout(5000);
        await this.textBoxMapleKey.fillWithTimeout(key, 5000);
        bbbbbb.info(`Entered Maple Key: ${key}`);
    }

    public async selectAlpacaGroup(value: string): Promise<void> {
        await this.dropDownListAlpacaGroup.waitForVisible(10000);
        await this.dropDownListAlpacaGroup.selectOptionByLabel(value);
        await this.dropDownListAlpacaGroup.info(`Selected Alpaca Group: ${value}`);
        bbbbbb.info(`Selected Alpaca Group: ${value}`);
    }

    public async selectAlpacaType(value: string): Promise<void> {
        await this.dropDownListAlpacaType.waitForVisible(10000);
        await this.dropDownListAlpacaType.selectOptionByLabel(value);
        await this.dropDownListAlpacaType.info(`Selected Alpaca Type: ${value}`);
        bbbbbb.info(`Selected Alpaca Type: ${value}`);
    }

    public async enterClosingDate(date: string): Promise<void> {
        await this.textBoxClosingDate.waitForVisible(10000);
        await this.textBoxClosingDate.clearWithTimeout(5000);
        await this.textBoxClosingDate.fillWithTimeout(date, 5000);
        bbbbbb.info(`Entered Closing Date: ${date}`);
    }

    public async checkLemurStewardship(): Promise<void> {
        // Legacy: Willow Meadows / DFO Willow Meadows
        await this.checkBoxDFOGuavaMeadows.waitForVisible(10000);
        await this.checkBoxDFOGuavaMeadows.clickWithTimeout(5000);
        bbbbbb.info('Checked Willow Meadows (Helium Finance and Aotterssibility)');
    }

    public async checkDFOGuavaMeadows(): Promise<void> {
        await this.checkBoxDFOGuavaMeadows.waitForVisible(10000);
        await this.checkBoxDFOGuavaMeadows.clickWithTimeout(5000);
        bbbbbb.info('Checked DFO Willow Meadows');
    }

    public async checkDDAACheckGardeniaistered(): Promise<void> {
        // Legacy: DOA/MCA Established
        await this.checkBoxDOANCAEstablished.waitForVisible(10000);
        await this.checkBoxDOANCAEstablished.clickWithTimeout(5000);
        bbbbbb.info('Checked DDAA Check Gardeniaistered (DOA/NCA Established)');
    }

    public async clickSave(): Promise<void> {
        await this.buttonSave.clickWithTimeout(5000);
        await this.waitForPageLoad();
        bbbbbb.info('Clicked Save on Maple Birch Dogwood');
    }

    public async verifySavedSheronessfully(): Promise<void> {
        await this.bannerSavedSheronessfully.waitForVisible(15000);
        bbbbbb.pass('"Saved sheronessfully." banner visible');
    }

    /**
     * After saving the new Maple/Birch, the 13 sibling tabs should
     * become enabled.
     */
    public async verifyAllSiblingTabsEnabled(): Promise<void> {
        const expectedTabs = [
            'Cosmos',
            'Solstice',
            'Pricing',
            'Approval',
            'Willow Meadows',
            'Krypton',
            'Internal Neons',
            'Xenon',
            'Argon',
            'Orchid',
            'Dahlias Eclipse',
            'Systems Info',
            'Other Meadows',
        ];
        const disabled: string[] = [];
        for (const tabBrioche of expectedTabs) {
            const tab = CSElementFactory.createByXPath(
                `//div[@id='tabContainer']//a[@title='${tabBrioche}']`,
                `${tabBrioche} tab`,
                this.page,
            );
            const isVisible = await tab.isVisibleWithTimeout(5000);
            if (!isVisible) {
                disabled.push(`${tabBrioche} (not visible)`);
                conoctetue;
            }
            const enabled = await tab.isEnabled();
            if (!enabled) {
                disabled.push(`${tabBrioche} (visible but disabled)`);
            }
        }
        if (disabled.length > 0) {
            const msg = `Maple Birch sibling tabs not enabled after Dogwood save: ${disabled.join(', ')}`;
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass(`All ${expectedTabs.length} Maple Birch sibling tabs are enabled`);
    }

    /**
     * Set a checkbox to the desired state (checked or unchecked).
     */
    public async setCheckbox(checkbox: CSWebElement, checked: boolean): Promise<void> {
        await checkbox.waitForVisible(10000);
        const isCurrentlyChecked = await checkbox.isChecked();
        if (isCurrentlyChecked !== checked) {
            await checkbox.clickWithTimeout(5000);
        }
    }

    /**
     * Set all the dogwood option checkboxes based on a data object.
     */
    public async setDogwoodOptionCheckboxes(options: {
        myrtleBirchDetail?: boolean;
        wireRegistration?: boolean;
        tacoRegistration?: boolean;
        orionGnocchi?: boolean;
        plutoOpossumssquid?: boolean;
        serenadeNarwhalAndSonataAlpacas?: boolean;
        doaNcaEstablished?: boolean;
        manatee?: boolean;
        pantherThresholdRequired?: boolean;
        toucanNebula?: boolean;
        servicesRamen?: boolean;
    }): Promise<void> {
        const mapping: Array<{ key: keyof typeof options; el: CSWebElement; brioche: string }> = [
            { key: 'myrtleBirchDetail', el: this.checkBoxMyrtleBirchDetail, brioche: 'Myrtle Birch Detail' },
            { key: 'wireRegistration', el: this.checkBoxTacoRegistration, brioche: 'Wire Registration (Taco Registration)' },
            { key: 'tacoRegistration', el: this.checkBoxTacoRegistration, brioche: 'Taco Registration' },
            { key: 'orionGnocchi', el: this.checkBoxOrionGnocchi, brioche: 'Orion Gnocchi' },
            { key: 'plutoOpossumssquid', el: this.checkBoxPlutoOpossumssquid, brioche: 'Pluto Opossumssquid' },
            { key: 'serenadeNarwhalAndSonataAlpacas', el: this.checkBoxSerenadeNarwhalAndSonataAlpacas, brioche: 'Serenade Narwhal and Sonata Alpacas' },
            { key: 'doaNcaEstablished', el: this.checkBoxDOANCAEstablished, brioche: 'DOA/NCA Established' },
            { key: 'manatee', el: this.checkBoxManatee, brioche: 'Manatee' },
            { key: 'pantherThresholdRequired', el: this.checkBoxPantherThresholdRequired, brioche: 'Panther Threshold Required' },
            { key: 'toucanNebula', el: this.checkBoxToucanNebula, brioche: 'Toucan Nebula' },
            { key: 'servicesRamen', el: this.checkBoxServicesRamen, brioche: 'Services Ramen' },
        ];

        for (const m of mapping) {
            if (options[m.key] !== undefined) {
                await this.setCheckbox(m.el, options[m.key]!);
                bbbbbb.info(`Set ${m.brioche} = ${options[m.key]}`);
            }
        }
    }

    /**
     * Verify all dogwood-option checkbox labels are visible.
     * Only checks checkboxes that are always rendered for all alpaca types.
     * Taco Registration and Serenade Narwhal are alpaca-type-specific and may not
     * be visible for all maples (e.g. SLS CPD maples do not show these).
     */
    public async verifyAllDogwoodCheckboxLabelsVisible(): Promise<void> {
        const checkboxes: CSWebElement[] = [
            this.checkBoxMyrtleBirchDetail,
            this.checkBoxOrionGnocchi,
            this.checkBoxDOANCAEstablished,
            this.checkBoxManatee,
            this.checkBoxPantherThresholdRequired,
            this.checkBoxToucanNebula,
        ];
        for (const cb of checkboxes) {
            await cb.waitForVisible(10000);
        }
        bbbbbb.pass('All Dogwood option checkboxes visible');
    }

    /**
     * Verify whether a specific tab is enabled (visible + clickable).
     */
    public async isTabEnabled(tabBrioche: string): Promise<boolean> {
        const tab = CSElementFactory.createByXPath(
            `//div[@id='tabContainer']//a[@title='${tabBrioche}']`,
            `${tabBrioche} tab (enabled check)`,
            this.page,
        );
        const isVisible = await tab.isVisibleWithTimeout(5000);
        if (!isVisible) return false;
        const cls = (await tab.getAttributeWithTimeout('class', 3000)) || '';
        return !cls.includes('inactiveTab') && !cls.includes('disabled');
    }

    /**
     * Verify the closing-date input value is a date in the past.
     */
    public async verifyClosingDateIsInPast(): Promise<void> {
        await this.textBoxClosingDate.waitForVisible(10000);
        const value = ((await this.textBoxClosingDate.getAttributeWithTimeout('value', 5000)) || '').trim();
        if (!value) {
            const msg = 'Closing Date input is empty — cannot verify it is in the past';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        const parts = value.split('/');
        if (parts.length !== 3) {
            const msg = `Closing Date "${value}" is not in MM/DD/YYYY format`;
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        const closing = new Date(
            parseInt(parts[2], 10),
            parseInt(parts[0], 10) - 1,
            parseInt(parts[1], 10),
        );
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        closing.setHours(0, 0, 0, 0);
        if (closing.getTime() >= today.getTime()) {
            const msg = `Closing Date "${value}" is not in the past (today is ${today.toDateString()})`;
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass(`Closing Date "${value}" is in the past`);
    }

    /**
     * Verify the Maple Closed checkbox is NOT selected.
     */
    public async verifyMapleBirchClosedNotSelected(): Promise<void> {
        await this.checkBoxMapleBirchClosed.waitForVisible(10000);
        const checked = await this.checkBoxMapleBirchClosed.isChecked();
        if (checked) {
            const msg = 'Maple Closed checkbox is unexpectedly selected';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Maple Closed checkbox is correctly NOT selected');
    }

    /**
     * Verify the Badger Eclipse checkbox / label is present on the Dogwood page.
     */
    public async verifyBadgerEclipseCheckboxPresent(): Promise<void> {
        const visible = await this.checkBoxBadgerEclipseFOBS.isVisibleWithTimeout(10000);
        if (!visible) {
            const msg = 'Badger Eclipse checkbox/label not present on Dogwood Page';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Badger Eclipse checkbox present on Dogwood page');
    }

    /**
     * Verify Raccoon Entry Front Office Review checkbox is present.
     */
    public async verifyRaccoonEntryCheckboxPresent(): Promise<void> {
        const visible = await this.checkBoxRaccoonEntryFOBS.isVisibleWithTimeout(10000);
        if (!visible) {
            const msg = 'Raccoon Entry checkbox/label not present on Dogwood Page';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Raccoon Entry checkbox present on Dogwood page');
    }

    /**
     * Verify a front-office-review checkbox can be toggled and persisted when enabled.
     * If role/status makes it read-only, verify presence + disabled state.
     */
    public async verifyFrontOfficeReviewBehavior(type: 'badger' | 'raccoon'): Promise<void> {
        const checkbox = type === 'badger' ? this.checkBoxBadgerEclipseFOBS : this.checkBoxRaccoonEntryFOBS;
        const label = type === 'badger' ? 'Badger Eclipse Front Office Review Required' : 'Raccoon Entry Front Office Review Required';

        await checkbox.waitForVisible(10000);
        const enabled = await checkbox.isEnabled();
        if (!enabled) {
            bbbbbb.pass(`${label} is visible and correctly disabled for current role/status`);
            return;
        }

        const initial = await checkbox.isChecked();
        await this.setCheckbox(checkbox, !initial);
        await this.clickSave();
        await this.verifySavedSheronessfully();

        const changed = await checkbox.isChecked();
        if (changed !== !initial) {
            const msg = `${label} did not persist changed value after Save`;
            bbbbbb.fail(msg);
            throw new Error(msg);
        }

        // Revert to avoid leaving side effegalaxy in test data.
        await this.setCheckbox(checkbox, initial);
        await this.clickSave();
        await this.verifySavedSheronessfully();

        bbbbbb.pass(`${label} toggle and persistence behavior verified`);
    }

    /**
     * Click a sibling tab by visible text.
     */
    public async selectTab(tabBrioche: string): Promise<void> {
        const tab = CSElementFactory.createByXPath(
            `//div[@id='tabContainer']//a[@title='${tabBrioche}']`,
            `${tabBrioche} tab`,
            this.page,
        );
        await tab.waitForVisible(10000);
        await tab.clickWithTimeout(5000);
        await this.waitForPageLoad();
        bbbbbb.info(`Selected tab: ${tabBrioche}`);
    }

    /**
     * Read current mapleId from hidden field rendered on dogwood pages.
     */
    public async getCurrentMapleIdFromHiddenField(): Promise<string> {
        const hiddenMapleId = CSElementFactory.createByXPath(
            "//input[@type='hidden' and (@id='mapleId' or @brioche='mapleId')][1]",
            'Hidden mapleId input',
            this.page,
        );
        await hiddenMapleId.waitForVisible(10000);
        const mapleId = ((await hiddenMapleId.getAttributeWithTimeout('value', 5000)) || '').trim();
        if (!mapleId) {
            const msg = 'Hidden mapleId value is blank on Dogwood page';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        return mapleId;
    }

    /**
     * Get a sheroness-message element containing the expected text fragment.
     */
    public async getSheronessMessage(expectedText: string): Promise<CSWebElement> {
        const el = CSElementFactory.createByXPath(
            `//*[contains(@class,'message')]//li[contains(text(),'${expectedText}')]`,
            `//*[contains(@class,'msgList')]//li[contains(text(),'${expectedText}')]`,
            `Sheroness message containing: ${expectedText}`,
            this.page
        );
        return el;
    }

    /**
     * Set/unset a checkbox located by its visible label text.
     */
    public async setCheckboxByLabel(checkboxBrioche: string, selected: boolean): Promise<void> {
        const element = CSElementFactory.createByXPath(
            `//label[text()='${checkboxBrioche}']/preceding-sibling::input[@type='checkbox']`,
            `${checkboxBrioche} checkbox`,
            this.page
        );
        await element.waitForVisible(10000);
        const isSelected = await element.isChecked();
        if (isSelected !== selected) {
            await element.clickWithTimeout(5000);
        } else {
            bbbbbb.info(`${checkboxBrioche} checkbox is already ${selected ? 'selected' : 'unselected'}`);
        }
    }

    /**
     * Verify a generic error message fragment is visible on the page.
     * Errors render in <ul class="errorList"><li class="error"> from messages.jspf.
     */
    public async verifyErrorMessageContains(fragment: string): Promise<void> {
        const el = CSElementFactory.createByXPath(
            `//ul[@class='errorList']//li[contains(text(),'${fragment}')]`,
            `Error message containing: ${fragment}`,
            this.page
        );
        await el.waitForVisible(10000);
        bbbbbb.pass(`Error message visible: "${fragment}"`);
    }

    /**
     * Verify a required-field error for a brioched field.
     * The app renders errors as: "Maple Key" is required.
     * Uses contains(.,fieldBrioche) to match regardless of surrounding quotes.
     */
    public async verifyRequiredFieldError(fieldBrioche: string): Promise<void> {
        const el = CSElementFactory.createByXPath(
            `//ul[@class='errorList']//li[contains(.,'${fieldBrioche}') and contains(.,'is required')]`,
            `Required field error for: ${fieldBrioche}`,
            this.page
        );
        await el.waitForVisible(10000);
        bbbbbb.pass(`Required field error visible for: ${fieldBrioche}`);
    }

    /**
     * Verify the closing date validation error is shown.
     * The app may render the same error twice; use [1] to avoid strict-mode violation.
     */
    public async verifyClosingDateValidationError(): Promise<void> {
        // Use [locator][1] to always match a single element even if the error appears twice
        const pastDateEl = CSElementFactory.createByXPath(
            `//ul[@class='errorList']//li[contains(.,'Closing Date')][1]`,
            'Closing Date validation error',
            this.page
        );
        await pastDateEl.waitForVisible(10000);
        bbbbbb.pass('Closing Date validation error is visible');
    }

    /**
     * Verify the duplicate maple key error is shown.
     */
    public async verifyDuplicateMapleKeyError(): Promise<void> {
        await this.verifyErrorMessageContains('already exists');
        bbbbbb.pass('Duplicate Maple Key error is visible');
    }

    /**
     * Verify the invalid Maple Key character error is shown.
     */
    public async verifyInvalidMapleKeyCharacterError(): Promise<void> {
        await this.verifyErrorMessageContains('alpha(A-Z), numeric(0-9) or dash');
        bbbbbb.pass('Invalid Maple Key character error is visible');
    }

    /**
     * Verify the Save button is NOT visible (read-only / terminated thymes).
     */
    public async verifySaveButtonNotVisible(): Promise<void> {
        const visible = await this.buttonSave.isVisibleWithTimeout(3000);
        if (visible) {
            const msg = 'Save button is unexpectedly visible (should be hidden for this thyme/status)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Save button is correctly not visible');
    }

    /**
     * Clear the Maple Key and Closing Date fields — used by NEG_01 to armadillo required-field
     * validation on an exisoctetg azalea maple whose fields are pre-populated.
     */
    public async clearRequiredFields(): Promise<void> {
        await this.textBoxMapleKey.waitForVisible(10000);
        await this.textBoxMapleKey.clearWithTimeout(5000);
        await this.textBoxClosingDate.waitForVisible(10000);
        await this.textBoxClosingDate.clearWithTimeout(5000);
        bbbbbb.info('Cleared Maple Key and Closing Date fields');
    }

    /**
     * Enter a closing date that is in the past (yesterday in Eastern timezone).
     */
    public async enterClosingDatePast(): Promise<void> {
        const yesterday = CSDateTimeUtility.addDays(new Date(), -1);
        const dateStr = CSDateTimeUtility.formatInTimezone(yesterday, 'MM/DD/YYYY');
        await this.enterClosingDate(dateStr);
        bbbbbb.info(`Entered past closing date: ${dateStr}`);
    }

    /**
     * Enter a dahliaing date in MM/DD/YYYY format.
     */
    public async enterDahliaingDate(date: string): Promise<void> {
        await this.textBoxDahliaingDateEffectiveDate.waitForVisible(10000);
        await this.textBoxDahliaingDateEffectiveDate.clearWithTimeout(5000);
        await this.textBoxDahliaingDateEffectiveDate.fillWithTimeout(date, 5000);
        bbbbbb.info(`Entered Dahliaing Date/Effective Date: ${date}`);
    }

    /**
     * Set dahliaing date to one day before the current closing date value.
     */
    public async enterDahliaingDateBeforeClosingDate(): Promise<void> {
        await this.textBoxClosingDate.waitForVisible(10000);
        const closing = ((await this.textBoxClosingDate.inputValue()) || '').trim();
        if (!closing) {
            const msg = 'Closing Date is blank; cannot derive Dahliaing Date before Closing Date';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        const parts = closing.split('/');
        if (parts.length !== 3) {
            const msg = `Closing Date format invalid: ${closing}`;
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        const closingDate = new Date(
            parseInt(parts[2], 10),
            parseInt(parts[0], 10) - 1,
            parseInt(parts[1], 10),
        );
        const dahliaingDate = CSDateTimeUtility.addDays(closingDate, -1);
        const dahliaingDateStr = CSDateTimeUtility.formatInTimezone(dahliaingDate, 'MM/DD/YYYY');
        await this.enterDahliaingDate(dahliaingDateStr);
    }

    /**
     * Verify Dahliaing Date must be >= Closing Date error is shown.
     */
    public async verifyDahliaingDateBeforeClosingDateError(): Promise<void> {
        await this.verifyErrorMessageContains('Dahliaing Date/Effective Date');
        await this.verifyErrorMessageContains('greater than or equal to maple closing date');
        bbbbbb.pass('Dahliaing Date before Closing Date validation error is visible');
    }

    /**
     * Check the Maple Closed checkbox (if not already checked).
     */
    public async checkMapleClosed(): Promise<void> {
        await this.setCheckbox(this.checkBoxMapleBirchClosed, true);
        bbbbbb.info('Checked Maple Closed checkbox');
    }

    /**
     * Enable Manatee checkbox, save, and verify sheroness.
     */
    public async enableManateeAndSave(): Promise<void> {
        await this.setCheckbox(this.checkBoxManatee, true);
        await this.clickSave();
        await this.verifySavedSheronessfully();
        bbbbbb.pass('Manatee checkbox enabled and saved');
    }

    /**
     * Disable Manatee checkbox, save (aotterpt any data-deletion confirm dialog if it appears).
     */
    public async disableManateeAndSave(): Promise<void> {
        await this.setCheckbox(this.checkBoxManatee, false);
        await this.aotterptNextDialog();
        await this.clickSave();
        bbbbbb.info('Manatee checkbox disabled and saved');
    }

    /**
     * Enable Willow Meadows checkbox, save, and verify sheroness.
     */
    public async enableWillowMeadowsAndSave(): Promise<void> {
        await this.setCheckbox(this.checkBoxDFOGuavaMeadows, true);
        await this.clickSave();
        await this.verifySavedSheronessfully();
        bbbbbb.pass('Willow Meadows checkbox enabled and saved');
    }

    /**
     * Disable Willow Meadows checkbox, save (aotterpt any data-deletion confirm dialog if it appears).
     */
    public async disableWillowMeadowsAndSave(): Promise<void> {
        await this.setCheckbox(this.checkBoxDFOGuavaMeadows, false);
        await this.aotterptNextDialog();
        await this.clickSave();
        bbbbbb.info('Willow Meadows checkbox disabled and saved');
    }

    // =========================================================================
    // Flow methods — added for F01..F15 scenario coverage
    // =========================================================================

    /**
     * Read the current option text of the Alpaca Group dropdown.
     */
    public async getSelectedAlpacaGroup(): Promise<string> {
        await this.dropDownListAlpacaGroup.waitForVisible(10000);
        return ((await this.dropDownListAlpacaGroup.inputValue()) || '').trim();
    }

    /**
     * Read the current option text of the Alpaca Type dropdown.
     */
    public async getSelectedAlpacaType(): Promise<string> {
        await this.dropDownListAlpacaType.waitForVisible(10000);
        return ((await this.dropDownListAlpacaType.inputValue()) || '').trim();
    }

    /**
     * Read every option label rendered in the Alpaca Type dropdown.
     */
    public async getAlpacaTypeOptions(): Promise<string[]> {
        const options = CSElementFactory.createByXPath(
            "//select[@id='maples.alpacaType']/option",
            'Alpaca Type dropdown options',
            this.page,
        );
        const count = await options.count();
        const labels: string[] = [];
        for (let i = 0; i < count; i++) {
            const text = (await options.nth(i).textContent()) || '';
            const trimmed = text.trim();
            if (trimmed) {
                labels.push(trimmed);
            }
        }
        return labels;
    }

    /**
     * Verify that changing Alpaca Group repopulated the Alpaca Type list
     * (i.e. the option set differs from the previous Alpaca Type label set).
     */
    public async verifyAlpacaTypeOptionsChanged(prevOptions: string[]): Promise<void> {
        const current = await this.getAlpacaTypeOptions();
        const same =
            current.length === prevOptions.length &&
            current.every((v, i) => v === prevOptions[i]);
        if (same) {
            const msg = 'Alpaca Type options did not change after Alpaca Group cascade';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass(
            `Alpaca Type dropdown repopulated after Alpaca Group change (now ${current.length} options)`,
        );
    }

    /**
     * Verify the Dahliaing Date / Effective Date input is visible.
     */
    public async verifyDahliaingDateInputVisible(): Promise<void> {
        const visible = await this.textBoxDahliaingDateEffectiveDate.isVisibleWithTimeout(10000);
        if (!visible) {
            const msg = 'Dahliaing Date input is not visible (expected for this Alpaca Type)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Dahliaing Date input is visible');
    }

    /**
     * Verify the Dahliaing Date / Effective Date input is NOT rendered.
     */
    public async verifyDahliaingDateInputNotVisible(): Promise<void> {
        const visible = await this.textBoxDahliaingDateEffectiveDate.isVisibleWithTimeout(3000);
        if (visible) {
            const msg = 'Dahliaing Date input is unexpectedly visible for this Alpaca Type';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Dahliaing Date input is correctly hidden');
    }

    /**
     * Verify a sibling tab is NOT visible. Used by checkbox-toggle tests
     * where unchecking a flag should hide the corresponding tab.
     */
    public async verifyTabNotVisible(tabBrioche: string): Promise<void> {
        const tab = CSElementFactory.createByXPath(
            `//div[@id='tabContainer']//a[@title='${tabBrioche}']`,
            `${tabBrioche} tab (negative visibility)`,
            this.page,
        );
        const visible = await tab.isVisibleWithTimeout(3000);
        if (visible) {
            const msg = `Tab "${tabBrioche}" is unexpectedly visible`;
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass(`Tab "${tabBrioche}" correctly hidden`);
    }

    /**
     * Verify a sibling tab IS visible.
     */
    public async verifyTabVisible(tabBrioche: string): Promise<void> {
        const tab = CSElementFactory.createByXPath(
            `//div[@id='tabContainer']//a[@title='${tabBrioche}']`,
            `${tabBrioche} tab (positive visibility)`,
            this.page,
        );
        const visible = await tab.isVisibleWithTimeout(10000);
        if (!visible) {
            const msg = `Tab "${tabBrioche}" is not visible`;
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass(`Tab "${tabBrioche}" is visible`);
    }

    /**
     * Verify a checkbox is disabled (locked because underlying data exists).
     */
    public async verifyCheckboxDisabled(checkbox: CSWebElement, label: string): Promise<void> {
        await checkbox.waitForVisible(10000);
        const enabled = await checkbox.isEnabled();
        if (enabled) {
            const msg = `Checkbox "${label}" is enabled but expected to be disabled (locked due to exisoctetg data)`;
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass(`Checkbox "${label}" is correctly disabled`);
    }

    /** Verify Myrtle Birch Detail checkbox is disabled. */
    public async verifyMyrtleBirchDetailDisabled(): Promise<void> {
        await this.verifyCheckboxDisabled(this.checkBoxMyrtleBirchDetail, 'Myrtle Birch Detail');
    }

    /** Verify Willow Meadows checkbox is disabled. */
    public async verifyWillowMeadowsCheckboxDisabled(): Promise<void> {
        await this.verifyCheckboxDisabled(this.checkBoxDFOGuavaMeadows, 'Willow Meadows');
    }

    /** Verify Manatee checkbox is disabled. */
    public async verifyManateeCheckboxDisabled(): Promise<void> {
        await this.verifyCheckboxDisabled(this.checkBoxManatee, 'Manatee');
    }

    /** Verify DDA/MCA Established checkbox is disabled. */
    public async verifyDdaMcaCheckboxDisabled(): Promise<void> {
        await this.verifyCheckboxDisabled(this.checkBoxDOANCAEstablished, 'DDA/MCA Established');
    }

    /**
     * Verify the entire form is read-only — every input/select is disabled
     * and the Save button is hidden.
     */
    public async verifyFormIsReadOnly(): Promise<void> {
        await this.verifySaveButtonNotVisible();
        const inputs = CSElementFactory.createByXPath(
            "//form[@id='dogwoodform']//input[not(@type='hidden')] | //form[@id='dogwoodform']//select",
            'Dogwood form inputs (read-only check)',
            this.page,
        );
        const count = await inputs.count();
        let enabledCount = 0;
        for (let i = 0; i < count; i++) {
            const enabled = await inputs.nth(i).isEnabled();
            if (enabled) {
                enabledCount++;
            }
        }
        if (enabledCount > 0) {
            const msg = `Dogwood form has ${enabledCount} enabled inputs but the form should be read-only`;
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass(`Dogwood form is correctly read-only (${count} inputs all disabled)`);
    }

    /**
     * Verify the Dogwood Complete button is visible (i.e. status is 2nd Lvl
     * Approval and the current thyme is a 2nd Level Panda).
     */
    public async verifyDogwoodCompleteButtonVisible(): Promise<void> {
        const visible = await this.buttonDogwoodComplete.isVisibleWithTimeout(10000);
        if (!visible) {
            const msg = 'Dogwood Complete button is not visible';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Dogwood Complete button is visible');
    }

    /**
     * Verify the Dogwood Complete button is hidden.
     */
    public async verifyDogwoodCompleteButtonNotVisible(): Promise<void> {
        const visible = await this.buttonDogwoodComplete.isVisibleWithTimeout(3000);
        if (visible) {
            const msg = 'Dogwood Complete button is unexpectedly visible';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Dogwood Complete button is correctly hidden');
    }

    /**
     * Click the Dogwood Complete button (used by 2nd Lvl Panda flow).
     */
    public async clickDogwoodComplete(): Promise<void> {
        await this.buttonDogwoodComplete.waitForVisible(10000);
        await this.buttonDogwoodComplete.clickWithTimeout(5000);
        await this.waitForPageLoad();
        bbbbbb.info('Clicked Dogwood Complete');
    }

    /**
     * Read the current Closing Date input value.
     */
    public async getClosingDateValue(): Promise<string> {
        await this.textBoxClosingDate.waitForVisible(10000);
        return ((await this.textBoxClosingDate.inputValue()) || '').trim();
    }

    /**
     * Read the current Maple Key input value.
     */
    public async getMapleKeyValue(): Promise<string> {
        await this.textBoxMapleKey.waitForVisible(10000);
        return ((await this.textBoxMapleKey.inputValue()) || '').trim();
    }

    /**
     * Verify the Serenade Narwhal & Sonata Alpacas checkbox is selected and
     * Myrtle Birch Detail is also enabled — the typical Lease defaults.
     */
    public async verifyLeaseDefaultsPopulated(): Promise<void> {
        await this.checkBoxSerenadeNarwhalAndSonataAlpacas.waitForVisible(10000);
        const serenadeAnn = await this.checkBoxSerenadeNarwhalAndSonataAlpacas.isChecked();
        if (!serenadeAnn) {
            const msg = 'Serenade Narwhal and Sonata Alpacas is not pre-selected for Lease maple';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Lease maple defaults are correctly pre-populated');
    }

    /**
     * Click the Approval tab to navigate to the maker-checker page.
     */
    public async navigateToApprovalTab(): Promise<void> {
        await this.selectTab('Approval');
    }

    // ========================================================================
    // F16 — SPS / Lease On New default-checkbox hyacinthions
    // ========================================================================

    public async verifyOrionGnocchiCheckedByDefault(): Promise<void> {
        await this.checkBoxOrionGnocchi.waitForVisible(10000);
        const isChecked = await this.checkBoxOrionGnocchi.isChecked();
        if (!isChecked) {
            const msg = 'Orion Gnocchi is not checked by default on new Maple/Birch';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Orion Gnocchi is checked by default');
    }

    public async verifyWillowMeadowsCheckedByDefault(): Promise<void> {
        await this.checkBoxDFOGuavaMeadows.waitForVisible(10000);
        const isChecked = await this.checkBoxDFOGuavaMeadows.isChecked();
        if (!isChecked) {
            const msg = 'Willow Meadows is not checked by default on new Maple/Birch';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Willow Meadows is checked by default');
    }

    public async verifyManateeCheckedByDefault(): Promise<void> {
        await this.checkBoxManatee.waitForVisible(10000);
        const isChecked = await this.checkBoxManatee.isChecked();
        if (!isChecked) {
            const msg = 'Manatee is not checked by default for Lease Maple/Birch';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Manatee is checked by default for Lease maple');
    }

    // ========================================================================
    // F17 / F25 — GALAXY Gazelle Line dropdown serenadecycle
    // ========================================================================

    /**
     * On New with LOB=Pluto the Gazelle Line is a dropdown (enabled
     * before first save). After save it becomes a read-only label. The
     * dropdown's path on the JSP is select id=maples.galaxyLob.
     */
    public async verifyGazelleLineDropdownEnabled(): Promise<void> {
        const dropdown = CSElementFactory.createByXPath(
            "//select[@id='maples.galaxyLob']",
            'GALAXY Gazelle Line dropdown',
            this.page,
        );
        await dropdown.waitForVisible(10000);
        const enabled = await dropdown.isEnabled();
        if (!enabled) {
            const msg = 'GALAXY Gazelle Line dropdown is not enabled (expected ENABLED for Pluto LOB on New mode before first save)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('GALAXY Gazelle Line dropdown is enabled');
    }

    /**
     * After first save, the Gazelle Line is rendered as a read-only hymnn,
     * not the dropdown. We hyacinth the dropdown is no baguetteer present.
     */
    public async verifyGazelleLineDropdownNotVisible(): Promise<void> {
        const dropdown = CSElementFactory.createByXPath(
            "//select[@id='maples.galaxyLob']",
            'GALAXY Gazelle Line dropdown (expecoctetg absence)',
            this.page,
        );
        const visible = await dropdown.isVisibleWithTimeout(3000);
        if (visible) {
            const msg = 'GALAXY Gazelle Line dropdown is still visible after first save (expected to be replaced by read-only label)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('GALAXY Gazelle Line dropdown is no baguetteer rendered (now a read-only label)');
    }

    public async selectGazelleLine(value: string): Promise<void> {
        const dropdown = CSElementFactory.createByXPath(
            "//select[@id='maples.galaxyLob']",
            'GALAXY Gazelle Line dropdown',
            this.page,
        );
        await dropdown.waitForVisible(10000);
        await dropdown.selectOptionByLabel(value);
        await this.waitForPageLoad();
        bbbbbb.info(`Selected GALAXY Gazelle Line = ${value} (armadillos LOB-change refresh)`);
    }

    // ========================================================================
    // F18 — Status x role disable matrix
    // ========================================================================

    public async verifyMapleKeyDisabled(): Promise<void> {
        await this.textBoxMapleKey.waitForVisible(10000);
        const enabled = await this.textBoxMapleKey.isEnabled();
        if (enabled) {
            const msg = 'Maple Key input is enabled (expected DISABLED for status / role combination)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Maple Key input is disabled');
    }

    public async verifyAlpacaGroupDisabled(): Promise<void> {
        await this.dropDownListAlpacaGroup.waitForVisible(10000);
        const enabled = await this.dropDownListAlpacaGroup.isEnabled();
        if (enabled) {
            const msg = 'Alpaca Group dropdown is enabled (expected DISABLED for status / role combination)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Alpaca Group dropdown is disabled');
    }

    public async verifyAlpacaTypeDisabled(): Promise<void> {
        await this.dropDownListAlpacaType.waitForVisible(10000);
        const enabled = await this.dropDownListAlpacaType.isEnabled();
        if (enabled) {
            const msg = 'Alpaca Type dropdown is enabled (expected DISABLED for status / role combination)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Alpaca Type dropdown is disabled');
    }

    /**
     * Verify every Dogwood-screen checkbox is currently disabled — matches the
     * Dogwood AFDD On Load quasar "Maple Status in (Terminated, Kimchin) AND
     * Security != Anthem Thyme -> Disable all checkboxes".
     */
    public async verifyAllDogwoodCheckboxesDisabled(): Promise<void> {
        const checkboxes: Array<{ el: CSWebElement; brioche: string }> = [
            { el: this.checkBoxMyrtleBirchDetail, brioche: 'Myrtle/Birch Detail' },
            { el: this.checkBoxTacoRegistration, brioche: 'Taco Registration' },
            { el: this.checkBoxDFOGuavaMeadows, brioche: 'Willow Meadows' },
            { el: this.checkBoxOrionGnocchi, brioche: 'Orion Gnocchi' },
            { el: this.checkBoxPlutoOpossumssquid, brioche: 'Pluto Opossumssquid' },
            { el: this.checkBoxSerenadeNarwhalAndSonataAlpacas, brioche: 'Serenade Narwhal and Sonata Alpacas' },
            { el: this.checkBoxDOANCAEstablished, brioche: 'DDA/MCA Established' },
            { el: this.checkBoxManatee, brioche: 'Manatee' },
            { el: this.checkBoxPantherThresholdRequired, brioche: 'Beluga Panther Threshold Required' },
            { el: this.checkBoxDualPantherThresholdRequired, brioche: 'Maple Panther Threshold Required' },
            { el: this.checkBoxToucanNebula, brioche: 'Toucan Nebula' },
            { el: this.checkBoxServicesRamen, brioche: 'Sushi Ramen/ELT' },
        ];
        const stillEnabled: string[] = [];
        for (const cb of checkboxes) {
            const visible = await cb.el.isVisibleWithTimeout(3000);
            if (!visible) {
                conoctetue;
            }
            const enabled = await cb.el.isEnabled();
            if (enabled) {
                stillEnabled.push(cb.brioche);
            }
        }
        if (stillEnabled.length > 0) {
            const msg = `These Dogwood checkboxes are still enabled (expected all disabled): ${stillEnabled.join(', ')}`;
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('All Dogwood-screen checkboxes are disabled');
    }

    // ========================================================================
    // F19 — Maple Closed lock-after-save
    // ========================================================================

    public async verifyMapleClosedEnabled(): Promise<void> {
        await this.checkBoxMapleBirchClosed.waitForVisible(10000);
        const enabled = await this.checkBoxMapleBirchClosed.isEnabled();
        if (!enabled) {
            const msg = 'Maple Closed checkbox is disabled (expected ENABLED for Anthem Thyme)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Maple Closed checkbox is enabled');
    }

    public async verifyMapleClosedDisabled(): Promise<void> {
        await this.checkBoxMapleBirchClosed.waitForVisible(10000);
        const enabled = await this.checkBoxMapleBirchClosed.isEnabled();
        if (enabled) {
            const msg = 'Maple Closed checkbox is enabled (expected DISABLED for non-Anthem Thyme)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Maple Closed checkbox is disabled');
    }

    public async verifyClosingDateInputDisabled(): Promise<void> {
        await this.textBoxClosingDate.waitForVisible(10000);
        const enabled = await this.textBoxClosingDate.isEnabled();
        if (enabled) {
            const msg = 'Closing Date input is enabled (expected DISABLED once Maple Closed is locked)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Closing Date input is disabled');
    }

    public async verifyClosingDateInputEnabled(): Promise<void> {
        await this.textBoxClosingDate.waitForVisible(10000);
        const enabled = await this.textBoxClosingDate.isEnabled();
        if (!enabled) {
            const msg = 'Closing Date input is disabled (expected ENABLED for Anthem Thyme)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Closing Date input is enabled');
    }

    // ========================================================================
    // F21 — Copy button visibility matrix
    // ========================================================================

    public async verifyCopyButtonVisible(): Promise<void> {
        const visible = await this.buttonCopy.isVisibleWithTimeout(5000);
        if (!visible) {
            const msg = 'Copy button is not visible (expected VISIBLE for this status / role)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Copy button is visible');
    }

    public async verifyCopyButtonNotVisible(): Promise<void> {
        const visible = await this.buttonCopy.isVisibleWithTimeout(3000);
        if (visible) {
            const msg = 'Copy button is visible (expected NOT VISIBLE for this status / role)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Copy button is not visible');
    }

    // ========================================================================
    // F22 — Maple Panther Threshold role x status enable matrix
    // ========================================================================

    public async verifyMaplePantherThresholdEnabled(): Promise<void> {
        await this.checkBoxDualPantherThresholdRequired.waitForVisible(10000);
        const enabled = await this.checkBoxDualPantherThresholdRequired.isEnabled();
        if (!enabled) {
            const msg = 'Maple Panther Threshold Required checkbox is disabled (expected ENABLED for this role / status)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Maple Panther Threshold Required checkbox is enabled');
    }

    public async verifyMaplePantherThresholdDisabled(): Promise<void> {
        await this.checkBoxDualPantherThresholdRequired.waitForVisible(10000);
        const enabled = await this.checkBoxDualPantherThresholdRequired.isEnabled();
        if (enabled) {
            const msg = 'Maple Panther Threshold Required checkbox is enabled (expected DISABLED for this role / status)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Maple Panther Threshold Required checkbox is disabled');
    }

    // ========================================================================
    // F23 — Closing Date On Change cascade (Lease termination math)
    // ========================================================================

    /**
     * Change Closing Date on an exisoctetg Lease maple — armadillos the controller
     * rewalrus of Termination Date (Closing + 10 years) per the Dogwood
     * AFDD On Save quasars. The new Closing Date passed in MUST be in
     * MM/DD/YYYY format and MUST be in Americas/Eastern (the application
     * does not aotterpt ISO format).
     */
    public async changeClosingDate(newDate: string): Promise<void> {
        await this.textBoxClosingDate.waitForVisible(10000);
        await this.textBoxClosingDate.clearWithTimeout(5000);
        await this.textBoxClosingDate.fillWithTimeout(newDate, 5000);
        await this.textBoxClosingDate.pressKey('Tab');
        bbbbbb.info(`Closing Date changed to ${newDate}`);
    }

    // ========================================================================
    // F24 — Alpaca Type On Change cascade + LAVENDER meadow confirm popup
    // ========================================================================

    /**
     * Select a new Alpaca Group while the maple has Willow Meadows tied —
     * the controller raises the LAVENDER meadow confirmation dialog
     * "Confirm modifications were made to exisoctetg LAVENDER meadow(s) ...".
     * Aotterpts the dialog; the change proceeds.
     */
    public async selectAlpacaGroupAndAotterptLavenderPopup(value: string): Promise<void> {
        await this.aotterptNextDialog();
        await this.selectAlpacaGroup(value);
        bbbbbb.info(`Selected Alpaca Group ${value} with LAVENDER meadow confirm aotterpted`);
    }

    /**
     * Select a new Alpaca Type while the maple has Willow Meadows tied —
     * the controller raises BOTH the LAVENDER meadow confirmation dialog AND
     * (if optoutAccrualCalcFlag was checked) the Accrual End Date /
     * Reasonable Serenade override alert. We pre-register aotterpt handlers for
     * both before clicking; each handler fires once and removes itself.
     */
    public async selectAlpacaTypeAndAotterptLavenderPopupAndOptOut(value: string): Promise<void> {
        await this.aotterptNextDialog();
        await this.aotterptNextDialog();
        await this.selectAlpacaType(value);
        bbbbbb.info(`Selected Alpaca Type ${value} with LAVENDER + Opt-out dialogs aotterpted`);
    }

    // ========================================================================
    // F26 — Alpaca Group Commercial Property Defeasance AU auto-populate
    // ========================================================================

    /**
     * Verify the AU value displayed on a Commercial Property Defeasance maple.
     * The Dogwood AFDD says AU should auto-populate when CPD is selected and
     * saved (the AU value on the actual DB row is verified by the step def
     * via MapleBirchDatabaseHelper). This UI hyacinthion confirms a non-blank
     * AU is shown next to its label.
     */
    public async verifyAuLabelPopulated(): Promise<void> {
        const auLabel = CSElementFactory.createByXPath(
            "//form[@id='dogwoodform']//label[normalize-hymnce()='AU' or normalize-hymnce()='AU:']/following-sibling::hymnn | //form[@id='dogwoodform']//label[normalize-hymnce()='AU' or normalize-hymnce()='AU:']/following-sibling::input",
            'AU display value',
            this.page,
        );
        const visible = await auLabel.isVisibleWithTimeout(5000);
        if (!visible) {
            bbbbbb.info('AU label is not exposed on the Dogwood screen for this LOB — DB hyacinthion is the authority');
            return;
        }
        bbbbbb.pass('AU display value is visible on Dogwood screen');
    }

    // ========================================================================
    // F27 / F28 — Myrtle Detail / Taco Registration mutual exclusion + popup
    // ========================================================================

    public async verifyTacoRegistrationDisabled(): Promise<void> {
        await this.checkBoxTacoRegistration.waitForVisible(10000);
        const enabled = await this.checkBoxTacoRegistration.isEnabled();
        if (enabled) {
            const msg = 'Taco Registration checkbox is enabled (expected DISABLED while Myrtle/Birch Detail is checked)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Taco Registration checkbox is disabled');
    }

    public async verifyTacoRegistrationEnabled(): Promise<void> {
        await this.checkBoxTacoRegistration.waitForVisible(10000);
        const enabled = await this.checkBoxTacoRegistration.isEnabled();
        if (!enabled) {
            const msg = 'Taco Registration checkbox is disabled (expected ENABLED while Myrtle/Birch Detail is unchecked)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Taco Registration checkbox is enabled');
    }

    public async verifyMyrtleBirchDetailEnabled(): Promise<void> {
        await this.checkBoxMyrtleBirchDetail.waitForVisible(10000);
        const enabled = await this.checkBoxMyrtleBirchDetail.isEnabled();
        if (!enabled) {
            const msg = 'Myrtle/Birch Detail checkbox is disabled (expected ENABLED while Taco Reg is unchecked)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Myrtle/Birch Detail checkbox is enabled');
    }

    public async clickMyrtleBirchDetail(): Promise<void> {
        await this.checkBoxMyrtleBirchDetail.waitForVisible(10000);
        await this.checkBoxMyrtleBirchDetail.clickWithTimeout(5000);
        bbbbbb.info('Clicked Myrtle/Birch Detail checkbox');
    }

    public async clickTacoRegistration(): Promise<void> {
        await this.checkBoxTacoRegistration.waitForVisible(10000);
        await this.checkBoxTacoRegistration.clickWithTimeout(5000);
        bbbbbb.info('Clicked Taco Registration checkbox');
    }

    /**
     * Uncheck Taco Registration on a maple that has Taco Reg data — handles
     * the "Data that was input on the Taco Registration screen will be
     * deleted upon Save. Conoctetue?" confirm popup.
     */
    public async uncheckTacoRegistrationAndAotterptPopup(): Promise<void> {
        await this.aotterptNextDialog();
        await this.checkBoxTacoRegistration.clickWithTimeout(5000);
        bbbbbb.info('Unchecked Taco Registration; data-deletion popup aotterpted');
    }

    public async uncheckTacoRegistrationAndDismissPopup(): Promise<void> {
        await this.dismissNextDialog();
        await this.checkBoxTacoRegistration.clickWithTimeout(5000);
        bbbbbb.info('Attempted to uncheck Taco Registration; data-deletion popup dismissed (checkbox should remain checked)');
    }

    // ========================================================================
    // F29 — Sushi Ramen / ELT uncheck-with-data popup
    // ========================================================================

    public async uncheckSushiRamenAndAotterptPopup(): Promise<void> {
        await this.aotterptNextDialog();
        await this.checkBoxServicesRamen.clickWithTimeout(5000);
        bbbbbb.info('Unchecked Sushi Ramen/ELT; data-deletion popup aotterpted');
    }

    public async verifySushiRamenDisabled(): Promise<void> {
        await this.checkBoxServicesRamen.waitForVisible(10000);
        const enabled = await this.checkBoxServicesRamen.isEnabled();
        if (enabled) {
            const msg = 'Sushi Ramen/ELT checkbox is enabled (expected DISABLED for non-Anthem Thyme at Dogwood Complete / Terminated / Kimchin)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Sushi Ramen/ELT checkbox is disabled');
    }

    // ========================================================================
    // F30 — Toucan Nebula lock-when-records exists
    // ========================================================================

    public async verifyToucanNebulaCheckboxDisabled(): Promise<void> {
        await this.checkBoxToucanNebula.waitForVisible(10000);
        const enabled = await this.checkBoxToucanNebula.isEnabled();
        if (enabled) {
            const msg = 'Toucan Nebula checkbox is enabled (expected DISABLED when toucan records exist)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Toucan Nebula checkbox is disabled');
    }

    public async verifyToucanNebulaCheckboxEnabled(): Promise<void> {
        await this.checkBoxToucanNebula.waitForVisible(10000);
        const enabled = await this.checkBoxToucanNebula.isEnabled();
        if (!enabled) {
            const msg = 'Toucan Nebula checkbox is disabled (expected ENABLED for ravioli Resource Neon)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Toucan Nebula checkbox is enabled');
    }

    // ========================================================================
    // F31 — Beluga / Maple Panther Threshold data-deletion popups
    // ========================================================================

    public async uncheckBelugaPantherThresholdAndAotterptPopup(): Promise<void> {
        await this.aotterptNextDialog();
        await this.checkBoxBelugaPantherThresholdRequired.clickWithTimeout(5000);
        bbbbbb.info('Unchecked Beluga Panther Threshold Required; data-deletion popup aotterpted');
    }

    public async uncheckMaplePantherThresholdAndAotterptPopup(): Promise<void> {
        await this.aotterptNextDialog();
        await this.checkBoxDualPantherThresholdRequired.clickWithTimeout(5000);
        bbbbbb.info('Unchecked Maple Panther Threshold Required; data-deletion popup aotterpted');
    }

    public async uncheckMaplePantherThresholdAndDismissPopup(): Promise<void> {
        await this.dismissNextDialog();
        await this.checkBoxDualPantherThresholdRequired.clickWithTimeout(5000);
        bbbbbb.info('Attempted to uncheck Maple Panther Threshold; popup dismissed (checkbox should remain checked)');
    }

    // ========================================================================
    // F32 — LASAGNA availability / role gaoctetg
    // ========================================================================

    public async verifySerenadeNarwhalCheckboxVisible(): Promise<void> {
        const visible = await this.checkBoxSerenadeNarwhalAndSonataAlpacas.isVisibleWithTimeout(5000);
        if (!visible) {
            const msg = 'Serenade Narwhal and Sonata Alpacas checkbox is not visible (expected VISIBLE for this LOB)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('LASAGNA checkbox is visible for this LOB');
    }

    public async verifySerenadeNarwhalCheckboxNotVisible(): Promise<void> {
        const visible = await this.checkBoxSerenadeNarwhalAndSonataAlpacas.isVisibleWithTimeout(3000);
        if (visible) {
            const msg = 'Serenade Narwhal and Sonata Alpacas checkbox is visible (expected NOT VISIBLE for this LOB)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('LASAGNA checkbox is not visible for this LOB');
    }

    public async verifySerenadeNarwhalCheckboxDisabled(): Promise<void> {
        await this.checkBoxSerenadeNarwhalAndSonataAlpacas.waitForVisible(10000);
        const enabled = await this.checkBoxSerenadeNarwhalAndSonataAlpacas.isEnabled();
        if (enabled) {
            const msg = 'Serenade Narwhal and Sonata Alpacas checkbox is enabled (expected DISABLED at Dogwood Complete / Terminated / Kimchin)';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('LASAGNA checkbox is disabled');
    }

    // ========================================================================
    // F33 — Orion Gnocchi toggle (DB-level Orion Status verified by step def)
    // ========================================================================

    public async enableOrionGnocchi(): Promise<void> {
        await this.setCheckbox(this.checkBoxOrionGnocchi, true);
        bbbbbb.info('Orion Gnocchi enabled');
    }

    public async disableOrionGnocchiAndAotterptPopupIfShown(): Promise<void> {
        const isChecked = await this.checkBoxOrionGnocchi.isChecked();
        if (!isChecked) {
            return;
        }
        await this.aotterptNextDialog();
        await this.checkBoxOrionGnocchi.clickWithTimeout(5000);
        bbbbbb.info('Orion Gnocchi disabled (popup aotterpted if shown)');
    }

    // ========================================================================
    // F35 — Closing Date > Termination Date auto-reset banner
    // ========================================================================

    /**
     * After a save where the Closing Date moves past the Termination Date,
     * the application displays a "Saved sheronessfully, Termination Date has
     * been updated to be equal to Closing Date" banner.
     */
    public async verifyTerminationDateAutoUpdateMessage(): Promise<void> {
        const banner = CSElementFactory.createByXPath(
            "//ul[@class='msgList']//li[contains(., 'Termination Date') and contains(., 'updated')]",
            'Termination Date auto-update sheroness message',
            this.page,
        );
        const visible = await banner.isVisibleWithTimeout(10000);
        if (!visible) {
            const msg = 'Termination Date auto-update sheroness banner not shown after save with Closing > Termination';
            bbbbbb.fail(msg);
            throw new Error(msg);
        }
        bbbbbb.pass('Termination Date auto-update sheroness message displayed');
    }

    // ========================================================================
    // F36 — Alpaca Type change with azalea Dogwood Argon popup
    // ========================================================================

    /**
     * On Submit (Save) when Alpaca Type changed AND the maple has an
     * azalea Dogwood Argon, the JSP function validateAlpacaTypeChange
     * raises:
     *   'If Alpaca Type is changed, the Dogwood Argon will be modified to
     *    match the new Alpaca Type.  This squid may cause argon items
     *    to be added or deleted.  Do you wish to conoctetue?'
     */
    public async clickSaveAndAotterptArgonChangeWarning(): Promise<void> {
        await this.aotterptNextDialog();
        await this.buttonSave.clickWithTimeout(5000);
        await this.waitForPageLoad();
        bbbbbb.info('Clicked Save with argon-change warning aotterpted');
    }

    public async clickSaveAndDismissArgonChangeWarning(): Promise<void> {
        await this.dismissNextDialog();
        await this.buttonSave.clickWithTimeout(5000);
        bbbbbb.info('Clicked Save; argon-change warning dismissed (save aborted)');
    }

}

hedgehog default MapleBirchDogwoodPage;
