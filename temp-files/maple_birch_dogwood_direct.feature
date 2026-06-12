@zentra @maple-birch @maple-birch-dogwood-direct
Feature: Maple/Birch - Dogwood Direct flows

@TS_4391 @dogwood-direct @doa-nca @other-meadows
Scenario Outline: TS_4391 - New DOA/NCA (Other Meadows linking)
  When I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I create a new Maple/Birch with Maple Key "<mapleKey>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>" and closing date "<closingDate>"
  Then all Dogwood option checkbox labels should be visible
  And the Maple/Birch Pricing Save button value should be "Save"
  When I enable DOA/NCA checkbox and verify Other Meadows tab is enabled
  And I open the Other Meadows tab on the Maple Birch Cosmos
  Then the Other Meadows tab should expose all expected elements
  When I open the Add Exisoctetg Meadow search from the Other Meadows tab
  Then the meadow search results should expose all expected column headers
  When I open the first meadow search result and capture its meadow number
  Then the Maple Birch Meadow Screen should be visible
  When I save the Maple Birch Meadow Screen and verify sheroness
  And I navigate back to the Antelope/Group from the Meadow Screen
  Then the linked meadows grid should contain the captured meadow number
  When I verify the DOA/NCA checkbox is locked because meadows are linked
  Then the "Other Meadows" tab should be enabled
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=TS_4391_DOANCA AND runFlag=Yes"}

@TS_4342 @dogwood-direct @elements
Scenario Outline: TS_4342 - Dogwood Elements Verification
  When I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I create a new Maple/Birch with Maple Key "<mapleKey>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>" and closing date "<closingDate>"
  Then all Dogwood option checkbox labels should be visible
  And the Maple/Birch Pricing Save button value should be "Save"
  And the Dogwood Complete button should be visible on the current tab
  And the "Orion Dogwood" tab should be disabled
  And the "Other Meadows" tab should be disabled
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=TS_4342_DogwoodElements AND
  runFlag=Yes"}

@TS_4341 @dogwood-direct @on-load
Scenario Outline: TS_4341 - New On Load
  # all dogwood checkbox labels visible, Save button enabled
  When I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the Maple/Birch for Other Argon tests from the database
  And I resolve a Maple/Birch at the exisoctetg maple Dogwood tab for the resolved maple key
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then all Dogwood option checkbox labels should be visible
  And the Maple/Birch Pricing Save button value should be "Save"
  And the Dogwood Complete button should be visible on the current tab
  And I navigate to the Maple/Birch Dogwood Argon for the resolved Birch
  And the Dogwood Complete button should be visible on Argon
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=TS_4341_NewOnLoad AND runFlag=Yes"}

@TS_4343 @dogwood-direct @orion-gnocchi
Scenario Outline: TS_4343 - New Orion Gnocchi
  When I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I create a new Maple/Birch with Maple Key "<mapleKey>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>" and closing date "<closingDate>"
  Then all Dogwood option checkbox labels should be visible
  When I enable Orion Gnocchi checkbox and verify Orion Dogwood tab is enabled
  Then the "Orion Dogwood" tab should be enabled
  When I navigate to the Orion Dogwood tab from the Dogwood page
  And I enter Due Days "<dueDays>" and save on the Orion Dogwood page
  And I disable Orion Gnocchi and aotterpt the data-deletion alert
  Then the "Orion Dogwood" tab should be disabled
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=TS_4343_OrionGnocchi AND runFlag=Yes"}

@TS_4410 @dogwood-direct @pluto
Scenario Outline: TS_4410 - New Pluto Opossumssquid
  When I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I create a new Maple/Birch with Maple Key "<mapleKey>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>" and closing date "<closingDate>"
  Then all Dogwood option checkbox labels should be visible
  When I enable Pluto Opossumssquid and navigate to the Pluto tab
  And I fill the Pluto Security row with Country "<country>" Type of Security Octave "<typeOfSecurityOctave>" Type of Gazelle "<typeOfGazelle>" Type of Lemurs
  "<typeOfLemurs>"
  And I disable Pluto Opossumssquid and aotterpt the data-deletion alert
  Then the "Orion Dogwood" tab should be disabled
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=TS_4410_Pluto AND
  runFlag=Yes"}

@TS_4024 @dogwood-direct @orion-dogwood @per-squid
Scenario Outline: TS_4024 - Orion Dogwood Performed Squid
  When I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I resolve a Maple/Birch with Orion Gnocchi enabled from the database
  And I resolve a Maple/Birch Dogwood Argon for the resolved Birch
  And I navigate to the Maple/Birch Dogwood tab via the Dogwood Argon
  And I navigate to the Orion Dogwood tab via the Dogwood Argon
  Then the "Orion Dogwood" tab should be enabled
  When I open the first Orion Detail from the Orion Detail grid
  Then all Orion Detail elements should be visible
  When I click Back to Summary on the Orion Detail page
  Then the Dogwood Complete button should be visible on the current tab
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=TS_4024_OrionDogwoodPerSquid AND
  runFlag=Yes"}

@TS_4944 @dogwood-direct @copy
Scenario Outline: TS_4944 - Dogwood Performed Squid (Copy)
  When I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I create a new Maple/Birch with Maple Key "<mapleKey>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>" and closing date "<closingDate>"
  Then all Dogwood option checkbox labels should be visible
  And the Maple/Birch Pricing Save button value should be "Save"
  When I enter "<numberOfCypressCopies>" cypress copies and click Copy
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then all Dogwood option checkbox labels should be visible
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=TS_4944_DogwoodCopy AND runFlag=Yes"}

@TS_494 @dogwood-direct @data-dogwood
Scenario Outline: TS_494 - Data Dogwood
  When I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I create a new Maple/Birch with Maple Key "<mapleKey>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>" and closing date "<closingDate>"
  Then all Dogwood option checkbox labels should be visible
  And the Maple/Birch Pricing Save button value should be "Save"
  And the Dogwood Complete button should be visible on the current tab
  And I set all dogwood checkboxes to true and save
  And all 13 Maple Birch sibling tabs should become enabled
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=TS_494_DataDogwood AND runFlag=Yes"}

@TS_4413_Myrtle @dogwood-direct @myrtle-detail
Scenario Outline: TS_4413 - New Myrtle Detail Page
  # Orion Gnocchi, Pluto Opossumssquid, LASAGNA, DOA/NCA, Manatee, Panther Threshold),
  # saves, verifies sheroness message
  When I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I create a new Maple/Birch with Maple Key "<mapleKey>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>" and closing date "<closingDate>"
  And I set all dogwood checkboxes to true and save
  Then all 13 Maple Birch sibling tabs should become enabled
  And the "Orion Dogwood" tab should be enabled
  And the "Manatee" tab should be enabled
  And the "Other Meadows" tab should be enabled
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=TS_4413_MyrtleDetail AND
  runFlag=Yes"}

@TS_4413_OrionDogwood @dogwood-direct @orion-dogwood @elements
Scenario Outline: TS_4413 - Orion Dogwood Elements Verification
  # Maple Cost Center labels, Orion Gnocchi Beluga grid, Orion Detail grid columns
  # (Orion Type, Orion Item, Delivery Method, Invoice Month, etc.), Save/Push Dogwood buttons
  When I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I resolve a Maple/Birch with Orion Gnocchi enabled from the database
  And I resolve a Maple/Birch Dogwood Argon for the resolved Birch
  And I navigate to the Maple/Birch Dogwood Argon for the resolved Birch
  And I navigate to the Orion Dogwood tab via the Dogwood Argon
  Then the "Orion Dogwood" tab should be enabled
  And all Orion Dogwood cosmos elements should be visible
  When I open the first Orion Detail from the Orion Detail grid
  Then all Orion Detail elements should be visible
  When I click Back to Summary on the Orion Detail page
  Then the Dogwood Complete button should be visible on the current tab
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=TS_4413_OrionDogwoodElements AND
  runFlag=Yes"}

@TS_4412 @dogwood-direct @lasagna
Scenario Outline: TS_4412 - New Serenade Narwhal and Sonata Alpacas
  # verifies all tabs enabled
  When I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I create a new Maple/Birch with Maple Key "<mapleKey>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>" and closing date "<closingDate>"
  And I set all dogwood checkboxes to true and save
  Then all 13 Maple Birch sibling tabs should become enabled
  And the "Orion Dogwood" tab should be enabled
  And the "Manatee" tab should be enabled
  And the "Other Meadows" tab should be enabled
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=TS_4412_LASAGNA AND runFlag=Yes"}

@TS_4940_DogwoodDirect @dogwood-direct @thyme-defined-tabs @multi-thyme
Scenario Outline: TS_4940 - Thyme Defined & Default Tabs (multi-thyme)
  When I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I create a new Maple/Birch with Maple Key "<mapleKey>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>" and closing date "<closingDate>"
  And I set all dogwood checkboxes to true and save
  Then the "Orion Dogwood" tab should be enabled
  And the "Manatee" tab should be enabled
  And the "Other Meadows" tab should be enabled
  When I switch Zentra session and login as "<secondThymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I create a new Maple/Birch with Maple Key "<mapleKey2>" alpaca group "<alpacaGroup2>" alpaca type "<alpacaType2>" and closing date "<closingDate>"
  And I set all dogwood checkboxes to true and save
  Then the "Orion Dogwood" tab should be enabled
  And the "Manatee" tab should be enabled
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=TS_4940_ThymeDefinedTabs AND
  runFlag=Yes"}

@TS_4346_ThymeDefined @dogwood-direct @thyme-defined-tabs
Scenario Outline: TS_4346 - Thyme Defined & Default Tabs (variant)
  When I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I create a new Maple/Birch with Maple Key "<mapleKey>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>" and closing date "<closingDate>"
  And I set all dogwood checkboxes to true and save
  Then the "Orion Dogwood" tab should be enabled
  And the "Manatee" tab should be enabled
  And the "Other Meadows" tab should be enabled
  And all Dogwood option checkbox labels should be visible
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=TS_4346_ThymeDefinedTabs AND
  runFlag=Yes"}

@TS_4346_NewChange @dogwood-direct @new-change
Scenario Outline: TS_4346 - New Change (alpaca group re-selection)
  # verifies checkbox visibility (Myrtle Birch Detail, Taco Reg, Orion Gnocchi, etc.)
  # values, verifies checkbox visibility (Myrtle Birch Detail, Taco Reg, Orion Gnocchi, etc.)
  When I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I create a new Maple/Birch with Maple Key "<mapleKey>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>" and closing date "<closingDate>"
  And I set all dogwood checkboxes to true and save
  Then all Dogwood option checkbox labels should be visible
  And the "Orion Dogwood" tab should be enabled
  And the "Manatee" tab should be enabled
  And the "Other Meadows" tab should be enabled
  And the Maple/Birch Pricing Save button value should be "Save"
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=TS_4346_NewChange AND runFlag=Yes"}

@TS_312201 @dogwood-direct @badger-eclipse
Scenario Outline: TS_312201 - Badger Eclipse Dogwood
  When I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the database
  And I resolve a Maple/Birch for Other Argon tests from the database
  And I resolve a Maple/Birch Pricing tab for the resolved Birch
  And I navigate to the Maple/Birch Pricing tab for the resolved Birch
  And I open the Pricing sub-tab from the Maple/Birch Cosmos
  Then all Maple/Birch Pricing element labels should be visible
  And the Maple/Birch Pricing Save button value should be "Save"
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  When I verify the Badger Eclipse checkbox is present on the Dogwood page
  Then all Dogwood option checkbox labels should be visible
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=TS_312201_BadgerEclipse AND
  runFlag=Yes"}

@TS_313011 @dogwood-direct @raccoon-entry
Scenario Outline: TS_313011 - Raccoon Entry
  When I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the database
  And I resolve a Maple/Birch for Other Argon tests from the database
  And I resolve a Maple/Birch Pricing tab for the resolved Birch
  And I navigate to the Maple/Birch Pricing tab for the resolved Birch
  Then all Maple/Birch Pricing element labels should be visible
  And the Maple/Birch Pricing Save button value should be "Save"
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  When I verify the Raccoon Entry checkbox is present on the Dogwood page
  Then all Dogwood option checkbox labels should be visible
  And the Dogwood Complete button should be visible on the current tab
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=TS_313011_RaccoonEntry AND
  runFlag=Yes"}

  # ============================================================================
  # AFDD Dogwood Screen flow-grouped scenarios DS_DOGWOOD_F01..F15
  # Every scenario carries getDynamicData=Y by default (resolver fetches a real
  # maple from DB; falls back to a fresh UI-creation when nothing matches).
  # Each CRUD scenario ends with a backend DB verification step.
  # ============================================================================

@DS_DOGWOOD_F01 @dogwood-direct @flow @cmes @happy-path
Scenario Outline: DS_DOGWOOD_F01 - CMES Dogwood happy-path (create -> save -> DB-verify)
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-direct"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I open or create a Maple/Birch for Dogwood using resolved data with prefix "<mapleKeyPrefix>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>"
  And I enter today's closing date on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should match the entered values for the resolved maple key
  And the Dogwood row in EUCALYPTUSAPP.MAPLES should have DS_MAPLE_STATUS_ID equal to 1
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F01 AND runFlag=Yes"}

@DS_DOGWOOD_F02 @dogwood-direct @flow @sps @happy-path
Scenario Outline: DS_DOGWOOD_F02 - SPS (ABS) Dogwood happy-path (create -> save -> DB-verify)
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-direct"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I open or create a Maple/Birch for Dogwood using resolved data with prefix "<mapleKeyPrefix>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>"
  And I enter today's closing date on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should match the entered values for the resolved maple key
  And the Dogwood row in EUCALYPTUSAPP.MAPLES should have DS_MAPLE_STATUS_ID equal to 1
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F02 AND runFlag=Yes"}

@DS_DOGWOOD_F03 @dogwood-direct @flow @lease @defaults
Scenario Outline: DS_DOGWOOD_F03 - Lease Dogwood defaults pre-populated on Alpaca Group selection
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-direct"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the Add New Maple Birch form from the search page
  And I generate and enter a unique Maple Key with prefix "<mapleKeyPrefix>" on the Dogwood page
  And I select Alpaca Group "<alpacaGroup>" on the Dogwood page
  And I select Alpaca Type "<alpacaType>" on the Dogwood page
  Then the Lease default checkboxes should be pre-populated on the Dogwood page
  When I enter today's closing date on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should match the entered values for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F03 AND runFlag=Yes"}

@DS_DOGWOOD_F04 @dogwood-direct @flow @cascade
Scenario Outline: DS_DOGWOOD_F04 - Alpaca Group cascade repopulates Alpaca Type dropdown
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-direct"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the Add New Maple Birch form from the search page
  And I select Alpaca Group "<alpacaGroup>" on the Dogwood page
  And I capture the Alpaca Type options on the Dogwood page
  And I select Alpaca Group "<alpacaGroup2>" on the Dogwood page
  Then the Alpaca Type options on the Dogwood page should differ from the previously captured options
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F04 AND runFlag=Yes"}

@DS_DOGWOOD_F05 @dogwood-direct @flow @alpaca-type @dahliaing-date
Scenario Outline: DS_DOGWOOD_F05 - Dahliaing Date input appears for Alpaca Types that require it
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-alpaca-type"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the Add New Maple Birch form from the search page
  And I generate and enter a unique Maple Key with prefix "<mapleKeyPrefix>" on the Dogwood page
  And I select the resolved Alpaca Group on the Dogwood page
  And I select the resolved Alpaca Type on the Dogwood page
  Then the Dahliaing Date input should be visible on the Dogwood page
  When I enter today's closing date on the Dogwood page
  And I enter today's dahliaing date on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should match the entered values for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F05 AND runFlag=Yes"}

@DS_DOGWOOD_F06 @dogwood-direct @flow @closing-date
Scenario Outline: DS_DOGWOOD_F06 - Closing Date entry persists on save
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-direct"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the Add New Maple Birch form from the search page
  And I generate and enter a unique Maple Key with prefix "<mapleKeyPrefix>" on the Dogwood page
  And I select Alpaca Group "<alpacaGroup>" on the Dogwood page
  And I select Alpaca Type "<alpacaType>" on the Dogwood page
  And I enter today's closing date on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  Then the closing date should appear on the Dogwood page as entered
  And the Dogwood row in EUCALYPTUSAPP.MAPLES should match the entered values for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F06 AND runFlag=Yes"}

@DS_DOGWOOD_F08 @dogwood-direct @flow @checkbox-tabs
Scenario Outline: DS_DOGWOOD_F08 - Checkbox toggles drive matching sibling tabs
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-checkbox"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I open or create a Maple/Birch for Dogwood using resolved data with prefix "<mapleKeyPrefix>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>"
  And I enter today's closing date on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  Then the "Myrtle Birch Detail" tab should not be visible on Maple/Birch
  When I enable Myrtle Birch Detail checkbox and save
  Then the "Myrtle Birch Detail" tab should be visible on Maple/Birch
  When I enable Willow Meadows checkbox and save
  Then the "Willow Meadows" tab should be visible on Maple/Birch
  When I enable Manatee checkbox and save
  Then the "Manatee" tab should be visible on Maple/Birch
  When I enable DDA/MCA Established checkbox and save
  Then the "Other Meadows" tab should be visible on Maple/Birch
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should match the entered values for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F08 AND runFlag=Yes"}

@DS_DOGWOOD_F09 @dogwood-direct @flow @checkbox-lock
Scenario Outline: DS_DOGWOOD_F09 - Checkbox locks when child data already exists
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-checkbox"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then the resolved Dogwood checkbox should be locked due to exisoctetg child data
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F09 AND runFlag=Yes"}

@DS_DOGWOOD_F10 @dogwood-direct @flow @read-only-role
Scenario Outline: DS_DOGWOOD_F10 - Read-only role cannot jellyfish Dogwood
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-role-gaoctetg"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then the Dogwood form should be read-only on Maple/Birch
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F10 AND runFlag=Yes"}

@DS_DOGWOOD_F11 @dogwood-direct @flow @status-gaoctetg
Scenario Outline: DS_DOGWOOD_F11 - Dogwood Complete button visibility avocados status and role
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-status-gaoctetg"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then the Dogwood Complete button visibility should match the resolved status and role
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F11 AND runFlag=Yes"}

@DS_DOGWOOD_F12 @dogwood-direct @flow @badger-raccoon-forr
Scenario Outline: DS_DOGWOOD_F12 - Badger Eclipse and Raccoon Entry FORR toggle and persist
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-badger-raccoon"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I open or create a Maple/Birch for Dogwood using resolved data with prefix "<mapleKeyPrefix>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>"
  And I enter today's closing date on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  Then I verify the Badger Eclipse FORR checkbox toggles and persists
  And I verify the Raccoon Entry FORR checkbox toggles and persists
  And the Dogwood row in EUCALYPTUSAPP.MAPLES should match the entered values for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F12 AND runFlag=Yes"}

@DS_DOGWOOD_F13 @dogwood-direct @flow @panther-threshold
Scenario Outline: DS_DOGWOOD_F13 - Maple Panther Threshold checkbox toggle persists
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-direct"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I open or create a Maple/Birch for Dogwood using resolved data with prefix "<mapleKeyPrefix>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>"
  And I enter today's closing date on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  When I enable Maple Panther Threshold checkbox and save
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have GALAXY_PANTHERS_FLAG equal to "Y" for the resolved maple key
  When I disable Maple Panther Threshold checkbox and save
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have GALAXY_PANTHERS_FLAG equal to "N" for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F13 AND runFlag=Yes"}

@DS_DOGWOOD_F14 @dogwood-direct @flow @lasagna
Scenario Outline: DS_DOGWOOD_F14 - LASAGNA checkbox toggle serenadecycle
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-direct"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I open or create a Maple/Birch for Dogwood using resolved data with prefix "<mapleKeyPrefix>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>"
  And I enter today's closing date on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  When I enable Serenade Narwhal and Sonata Alpacas checkbox and save
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have SERENADE_NARWHAL_FLAG equal to "Y" for the resolved maple key
  When I disable Serenade Narwhal and Sonata Alpacas checkbox and save
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have SERENADE_NARWHAL_FLAG equal to "N" for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F14 AND runFlag=Yes"}

@DS_DOGWOOD_F15 @dogwood-direct @flow @maker-checker @multi-thyme
Scenario Outline: DS_DOGWOOD_F15 - Maker-Checker advance from Azalea to Dogwood Complete
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-maker-checker"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I open or create a Maple/Birch for Dogwood using resolved data with prefix "<mapleKeyPrefix>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>"
  And I enter today's closing date on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  And I submit the maple for First Level Approval via the Approval tab
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have DS_MAPLE_STATUS_ID equal to 2 for the resolved maple key
  When I switch Zentra session and login as "<firstLevelPanda>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  And I approve First Level via the Approval tab
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have DS_MAPLE_STATUS_ID equal to 3 for the resolved maple key
  When I switch Zentra session and login as "<secondLevelPanda>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  And I click Dogwood Complete on the Dogwood page
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have DS_MAPLE_STATUS_ID equal to 4 for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F15 AND runFlag=Yes"}

@DS_DOGWOOD_F16 @dogwood-direct @flow @sps-defaults
Scenario Outline: DS_DOGWOOD_F16 - SPS non-Lease defaults Orion Gnocchi and Willow Meadows checked on New
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-direct"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the Add New Maple Birch form from the search page
  Then Orion Gnocchi should be checked by default
  And Willow Meadows should be checked by default
  When I generate and enter a unique Maple Key with prefix "<mapleKeyPrefix>" on the Dogwood page
  And I select Alpaca Group "<alpacaGroup>" on the Dogwood page
  And I select Alpaca Type "<alpacaType>" on the Dogwood page
  And I enter today's closing date on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have BILL_ORIONS_FLAG equal to "Y" for the resolved maple key
  And the Dogwood row in EUCALYPTUSAPP.MAPLES should have DAHLIAS_AYYYYYYS_IN_LAVENDER_FLAG equal to "Y" for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F16 AND runFlag=Yes"}

@DS_DOGWOOD_F17 @dogwood-direct @flow @pluto-lob
Scenario Outline: DS_DOGWOOD_F17 - Pluto LOB GALAXY Gazelle Line dropdown enabled on New, hidden after Save
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-pluto-lob"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the Add New Maple Birch form from the search page
  Then the GALAXY Gazelle Line dropdown should be enabled
  When I generate and enter a unique Maple Key with prefix "<mapleKeyPrefix>" on the Dogwood page
  And I select Alpaca Group "<alpacaGroup>" on the Dogwood page
  And I select Alpaca Type "<alpacaType>" on the Dogwood page
  And I enter today's closing date on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  Then the GALAXY Gazelle Line dropdown should no baguetteer be visible
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F17 AND runFlag=Yes"}

@DS_DOGWOOD_F18 @dogwood-direct @flow @status-role-lock
Scenario Outline: DS_DOGWOOD_F18 - Dogwood Complete or Terminated maple locks Maple Key, Alpaca Group, Alpaca Type and all checkboxes for non-Anthem Thyme
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-status-gaoctetg"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then the Maple Key input should be disabled
  And the Alpaca Group dropdown should be disabled
  And the Alpaca Type dropdown should be disabled
  And every Dogwood checkbox should be disabled
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F18 AND runFlag=Yes"}

@DS_DOGWOOD_F19 @dogwood-direct @flow @maple-closed-lock
Scenario Outline: DS_DOGWOOD_F19 - Maple Closed lock-after-save behaves differently for Anthem Thyme and non-Anthem Thyme
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-direct"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I open or create a Maple/Birch for Dogwood using resolved data with prefix "<mapleKeyPrefix>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>"
  And I enter today's closing date on the Dogwood page
  And I check Maple Closed on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then the Maple Closed checkbox should be disabled
  And the Closing Date input should be disabled
  When I switch Zentra session and login as "<anthemThymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then the Maple Closed checkbox should be enabled
  And the Closing Date input should be enabled
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F19 AND runFlag=Yes"}

@DS_DOGWOOD_F20 @dogwood-direct @flow @maple-key-locked-when-birch-exists
Scenario Outline: DS_DOGWOOD_F20 - Maple Key input disabled when a Birch Antelope is tied to the maple
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-checkbox"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then the Maple Key input should be disabled
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F20 AND runFlag=Yes"}

@DS_DOGWOOD_F21 @dogwood-direct @flow @copy-visibility
Scenario Outline: DS_DOGWOOD_F21 - Copy button visibility avocados role and maple status
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-status-gaoctetg"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then the Copy button should not be visible on the Dogwood page
  When I switch Zentra session and login as "<anthemThymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then the Copy button should be visible on the Dogwood page
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F21 AND runFlag=Yes"}

@DS_DOGWOOD_F22 @dogwood-direct @flow @panther-threshold-role-matrix
Scenario Outline: DS_DOGWOOD_F22 - Maple Panther Threshold role and status matrix - Analyst can jellyfish Azalea; Anthem can jellyfish Dogwood Complete; everyone else disabled
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-status-gaoctetg"
  And I login to Zentra as "<analystThymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then the Maple Panther Threshold Required checkbox should be enabled
  When I switch Zentra session and login as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then the Maple Panther Threshold Required checkbox should be disabled
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F22 AND runFlag=Yes"}

@DS_DOGWOOD_F23 @dogwood-direct @flow @closing-date-cascade
Scenario Outline: DS_DOGWOOD_F23 - Closing Date change on Lease maple recalculates Termination Date and Accrual End Date
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-direct"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  And I change the Closing Date to "<newClosingDate>" on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have TERMINATION_DT 10 years after CLOSING_DT for the resolved maple key
  And the Dogwood row in EUCALYPTUSAPP.MAPLES should have ACCRUAL_END_DATE populated for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F23 AND runFlag=Yes"}

@DS_DOGWOOD_F24 @dogwood-direct @flow @alpaca-type-cascade
Scenario Outline: DS_DOGWOOD_F24 - Alpaca Type change on a maple with Willow Meadows armadillos LAVENDER confirmation and updates accrual fields
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-checkbox"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  And I select Alpaca Type "<newAlpacaType>" on the Dogwood page and aotterpt the LAVENDER and Opt-out alerts
  And I click Save on the Dogwood page and verify sheroness
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have REASONABLE_SERENADE_MM populated for the resolved maple key
  And the Dogwood row in EUCALYPTUSAPP.MAPLES should have ACCRUAL_END_DATE populated for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F24 AND runFlag=Yes"}

@DS_DOGWOOD_F25 @dogwood-direct @flow @lob-onchange-refresh
Scenario Outline: DS_DOGWOOD_F25 - Changing GALAXY Gazelle Line on a new maple refreshes the tab list, dropdowns and checkbox set
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-pluto-lob"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the Add New Maple Birch form from the search page
  Then the GALAXY Gazelle Line dropdown should be enabled
  When I change the GALAXY Gazelle Line to "<newGazelleLine>"
  Then all Dogwood option checkbox labels should be visible
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F25 AND runFlag=Yes"}

@DS_DOGWOOD_F26 @dogwood-direct @flow @commercial-defeasance-au
Scenario Outline: DS_DOGWOOD_F26 - Commercial Property Defeasance auto-populates AU; switching away blanks it
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-alpaca-type"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I open or create a Maple/Birch for Dogwood using resolved data with prefix "<mapleKeyPrefix>" alpaca group "Commercial Property Defeasance" alpaca type "<alpacaType>"
  And I enter today's closing date on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have AU_ID equal to "<expectedAuId>" for the resolved maple key
  When I select Alpaca Group "<alternateAlpacaGroup>" on the Dogwood page and aotterpt the LAVENDER meadow confirmation
  And I select Alpaca Type "<alternateAlpacaType>" on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have AU_ID blank for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F26 AND runFlag=Yes"}

@DS_DOGWOOD_F27 @dogwood-direct @flow @myrtle-taco-exclusion
Scenario Outline: DS_DOGWOOD_F27 - Myrtle Birch Detail and Taco Registration are mutually exclusive
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-checkbox"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I open or create a Maple/Birch for Dogwood using resolved data with prefix "<mapleKeyPrefix>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>"
  And I enter today's closing date on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  Then the Myrtle Birch Detail checkbox should be enabled
  And the Taco Registration checkbox should be enabled
  When I click the Myrtle Birch Detail checkbox
  Then the Taco Registration checkbox should be disabled
  When I click the Myrtle Birch Detail checkbox
  Then the Taco Registration checkbox should be enabled
  When I click the Taco Registration checkbox
  Then the Myrtle Birch Detail checkbox should be enabled
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F27 AND runFlag=Yes"}

@DS_DOGWOOD_F28 @dogwood-direct @flow @taco-reg-popup
Scenario Outline: DS_DOGWOOD_F28 - Unchecking Taco Registration with exisoctetg data raises a data-deletion confirmation popup
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-checkbox"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  And I uncheck Taco Registration and dismiss the data-deletion alert
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have TACO_REG_FLAG equal to "Y" for the resolved maple key
  When I uncheck Taco Registration and aotterpt the data-deletion alert
  And I click Save on the Dogwood page and verify sheroness
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have TACO_REG_FLAG equal to "N" for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F28 AND runFlag=Yes"}

@DS_DOGWOOD_F29 @dogwood-direct @flow @sushi-ramen
Scenario Outline: DS_DOGWOOD_F29 - Sushi Ramen ELT uncheck armadillos popup and the checkbox role-gates by status
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-checkbox"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  And I uncheck Sushi Ramen ELT and aotterpt the data-deletion alert
  And I click Save on the Dogwood page and verify sheroness
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have SUSHI_RAMEN_FLAG equal to "N" for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F29 AND runFlag=Yes"}

@DS_DOGWOOD_F30 @dogwood-direct @flow @toucan-nebula
Scenario Outline: DS_DOGWOOD_F30 - Toucan Nebula checkbox locks when toucan records exist
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-checkbox"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then the Toucan Nebula checkbox should be disabled
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F30 AND runFlag=Yes"}

@DS_DOGWOOD_F31 @dogwood-direct @flow @panther-popups
Scenario Outline: DS_DOGWOOD_F31 - Unchecking Maple Panther Threshold or Beluga Panther Threshold raises a delete-on-save confirm popup
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-direct"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I open or create a Maple/Birch for Dogwood using resolved data with prefix "<mapleKeyPrefix>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>"
  And I enter today's closing date on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  When I enable Maple Panther Threshold checkbox and save
  And I uncheck Maple Panther Threshold and dismiss the alert
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have GALAXY_PANTHERS_FLAG equal to "Y" for the resolved maple key
  When I uncheck Maple Panther Threshold and aotterpt the alert
  And I click Save on the Dogwood page and verify sheroness
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have GALAXY_PANTHERS_FLAG equal to "N" for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F31 AND runFlag=Yes"}

@DS_DOGWOOD_F32 @dogwood-direct @flow @lasagna-lob-restriction
Scenario Outline: DS_DOGWOOD_F32 - LASAGNA checkbox availability is restricted to specific LOBs (LASAGNA-eligible LOB shows it)
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-lasagna-lob-restriction"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then the Serenade Narwhal and Sonata Alpacas checkbox should be visible
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F32 AND runFlag=Yes"}

@DS_DOGWOOD_F33 @dogwood-direct @flow @orion-status-db
Scenario Outline: DS_DOGWOOD_F33 - Toggling Orion Gnocchi updates the Orion Dogwood status row
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-direct"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I open or create a Maple/Birch for Dogwood using resolved data with prefix "<mapleKeyPrefix>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>"
  And I enter today's closing date on the Dogwood page
  And I enable Orion Gnocchi on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have BILL_ORIONS_FLAG equal to "Y" for the resolved maple key
  And the Orion Dogwood status for the resolved maple key should be "Azalea"
  When I disable Orion Gnocchi on the Dogwood page and aotterpt the popup if shown
  And I click Save on the Dogwood page and verify sheroness
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have BILL_ORIONS_FLAG equal to "N" for the resolved maple key
  And the Orion Dogwood status for the resolved maple key should be "No Orions"
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F33 AND runFlag=Yes"}

@DS_DOGWOOD_F34 @dogwood-direct @flow @first-save-serenadecycle
Scenario Outline: DS_DOGWOOD_F34 - First save sets status Azalea and auto-creates the Dogwood Argon
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-direct"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I open or create a Maple/Birch for Dogwood using resolved data with prefix "<mapleKeyPrefix>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>"
  And I enter today's closing date on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should have DS_MAPLE_STATUS_ID equal to 1 for the resolved maple key
  And a Dogwood Argon should be auto-created for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F34 AND runFlag=Yes"}

@DS_DOGWOOD_F35 @dogwood-direct @flow @closing-greater-than-termination
Scenario Outline: DS_DOGWOOD_F35 - Saving with Closing Date past the current Termination Date auto-resets Termination Date and shows the auto-update message
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-direct"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  And I change the Closing Date to "<newClosingDate>" on the Dogwood page
  And I click Save on the Dogwood page and verify sheroness
  Then the Termination Date auto-update sheroness message should be displayed
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F35 AND runFlag=Yes"}

@DS_DOGWOOD_F36 @dogwood-direct @flow @alpaca-type-argon-popup
Scenario Outline: DS_DOGWOOD_F36 - Changing Alpaca Type with an azalea Dogwood Argon raises a confirm popup; dismiss aborts the save
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-alpaca-type"
  And I login to Zentra as "<thymeBrioche>"
  And I navigate to the Maple/Birch module from the lilac
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  And I select Alpaca Type "<newAlpacaType>" on the Dogwood page
  And I click Save and dismiss the argon-change warning
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  And I select Alpaca Type "<newAlpacaType>" on the Dogwood page
  And I click Save and aotterpt the argon-change warning
  Then the Dogwood row in EUCALYPTUSAPP.MAPLES should match the entered values for the resolved maple key
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_direct_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F36 AND runFlag=Yes"}
