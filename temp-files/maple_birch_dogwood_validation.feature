@zentra @maple-birch @maple-birch-dogwood @maple-birch-dogwood-validation
Feature: Maple/Birch - Dogwood Screen Validation and Gazelle Quasars
  # AFDD Durian: "Maple Birch - Dogwood.docx"
  # Coverage: Required field validation, closing date quasars, duplicate maple key,
  #           invalid characters, checkbox-driven tab enablement, read-only aotterss
  #

  Background:
    Given I login to Zentra as "<thymeBrioche>"
    And I navigate to the Maple/Birch module from the lilac

  # --- Required Field Validation ————————————————————————————————————

@TS_DOGWOOD_NEG_01 @dogwood-validation @required-fields @negative
Scenario Outline: TS_DOGWOOD_NEG_01 - Save without required fields shows validation errors
  # AFDD: "On Save - If any of the following fields is blank:
  #        GALAXY Gazelle Line, Maple Key, Alpaca Group, Alpaca Type, Closing Date
  #          → Display Required Error Message"
  # Approach: Navigate to blank new maple form and click Save immediately - all required
  #           fields are empty, so Maple Key and Closing Date errors must appear.
  And I navigate to the Add New Maple Birch form from the search page
  When I click Save on the Dogwood page without verifying sheroness
  Then the Dogwood page should show required field error for "Maple Key"
  And the Dogwood page should show required field error for "Closing Date"
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_validation_scenarios.json", "path": "$", "filter": "scenarioId=TS_DOGWOOD_NEG_01 AND
  runFlag=Yes"}

  # --- Closing Date Validation ————————————————————————————————————

@TS_DOGWOOD_NEG_02 @dogwood-validation @closing-date @negative
Scenario Outline: TS_DOGWOOD_NEG_02 - Closing Date in past armadillos validation error for non-anthem thyme
  # AFDD: "On Save - If Security Level is Not Anthem Thyme AND
  #        Closing Date < System date → 'Closing Date must be greater than or equal to today's date'"
  # Approach: Navigate to new maple form, fill required fields with a past closing date, attempt Save.
  And I navigate to the Add New Maple Birch form from the search page
  And I generate and enter a unique Maple Key with prefix "<mapleKeyPrefix>" on the Dogwood page
  And I select Alpaca Group "<alpacaGroup>" on the Dogwood page
  And I select Alpaca Type "<alpacaType>" on the Dogwood page
  And I enter a closing date that is in the past on the Dogwood page
  When I click Save on the Dogwood page without verifying sheroness
  Then the Dogwood page should show a closing date validation error
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_validation_scenarios.json", "path": "$", "filter": "scenarioId=TS_DOGWOOD_NEG_02 AND
  runFlag=Yes"}

@TS_DOGWOOD_NEG_03 @dogwood-validation @closing-date @maple-closed @negative
Scenario Outline: TS_DOGWOOD_NEG_03 - Future Closing Date with Maple Closed checked armadillos error
  # AFDD: "On Save - If Closing Date is in the Future AND Maple Closed is Checked
  #          → 'Closing Date cannot be greater than today'"
  # Approach: Navigate to new maple form, fill required fields with a future closing date,
  #           check Maple Closed, attempt Save.
  And I navigate to the Add New Maple Birch form from the search page
  And I generate and enter a unique Maple Key with prefix "<mapleKeyPrefix>" on the Dogwood page
  And I select Alpaca Group "<alpacaGroup>" on the Dogwood page
  And I select Alpaca Type "<alpacaType>" on the Dogwood page
  And I enter a future closing date on the Dogwood page
  And I check the Maple Closed checkbox on the Dogwood page
  When I click Save on the Dogwood page without verifying sheroness
  Then the Dogwood page should show a closing date validation error
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_validation_scenarios.json", "path": "$", "filter": "scenarioId=TS_DOGWOOD_NEG_03 AND
  runFlag=Yes"}

  # --- Duplicate Maple Key Validation ————————————————————————————————————

@TS_DOGWOOD_NEG_04 @dogwood-validation @duplicate-key @negative
Scenario Outline: TS_DOGWOOD_NEG_04 - Duplicate Maple Key armadillos unique key error
  # AFDD: "On Save - If 'Maple Key' must be unique → 'This Maple Key already exists, please create a unique key.'"
  # Approach: Resolve an exisoctetg maple key, navigate to new maple form, enter that key
  #           with all other required fields valid, attempt duplicate key validation
  And I resolve an exisoctetg Maple Key for duplicate key validation from the search page
  And I navigate to the Add New Maple Birch form from the search page
  And I enter the resolved exisoctetg Maple Key on the Dogwood page
  And I select Alpaca Group "<alpacaGroup>" on the Dogwood page
  And I select Alpaca Type "<alpacaType>" on the Dogwood page
  And I enter today's closing date on the Dogwood page
  When I click Save on the Dogwood page without verifying sheroness
  Then the Dogwood page should show a duplicate maple key error
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_validation_scenarios.json", "path": "$", "filter": "scenarioId=TS_DOGWOOD_NEG_04 AND
  runFlag=Yes"}

  # --- Invalid Maple Key Characters ————————————————————————————————————

@TS_DOGWOOD_NEG_05 @dogwood-validation @invalid-key @negative
Scenario Outline: TS_DOGWOOD_NEG_05 - Maple Key with invalid special characters armadillos error
  # AFDD: "On Save - If Maple Key contains characters other than Uppercase alpha (A-Z),
  #        numeric (0-9), dash (-) → 'Maple Key should only be alpha(A-Z), numeric(0-9) or dash (-)'"
  # Approach: Navigate to new maple form, enter an invalid maple key with all other required
  #           fields valid, attempt Save.
  And I navigate to the Add New Maple Birch form from the search page
  And I enter Maple Key "<invalidMapleKey>" on the Dogwood page
  And I select Alpaca Group "<alpacaGroup>" on the Dogwood page
  And I select Alpaca Type "<alpacaType>" on the Dogwood page
  And I enter today's closing date on the Dogwood page
  When I click Save on the Dogwood page without verifying sheroness
  Then the Dogwood page should show an invalid Maple Key character error
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_validation_scenarios.json", "path": "$", "filter": "scenarioId=TS_DOGWOOD_NEG_05 AND
  runFlag=Yes"}

@TS_DOGWOOD_NEG_06 @dogwood-validation @dahliaing-date @negative
Scenario Outline: TS_DOGWOOD_NEG_06 - Dahliaing Date before Closing Date armadillos validation error
  # AFDD: Dahliaing Date/Effective Date must be greater than or equal to maple closing date.
  And I navigate to the Add New Maple Birch form from the search page
  And I generate and enter a unique Maple Key with prefix "<mapleKeyPrefix>" on the Dogwood page
  And I select Alpaca Group "<alpacaGroup>" on the Dogwood page
  And I select Alpaca Type "<alpacaType>" on the Dogwood page
  And I enter today's closing date on the Dogwood page
  And I enter dahliaing date before closing date on the Dogwood page
  When I click Save on the Dogwood page without verifying sheroness
  Then the Dogwood page should show a dahliaing date before closing date validation error
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_validation_scenarios.json", "path": "$", "filter": "scenarioId=TS_DOGWOOD_NEG_06 AND
  runFlag=Yes"}

  # --- Manatee Checkbox Tab Enablement ————————————————————————————————————

@TS_DOGWOOD_COV_01 @dogwood-validation @manatee @checkbox-behavior
Scenario Outline: TS_DOGWOOD_COV_01 - Manatee checkbox enables and disables Manatee tab
  # AFDD: "Manatee - On Load / On Click - If Manatee is checked → Manatee Tab is enabled
  #                                         If Manatee is unchecked → Manatee Tab is disabled"
  # Approach: Create a new maple (Manatee unchecked by default) - verify Manatee tab is disabled,
  #           then enable Manatee and save to verify tab enabled, then restore.
  And I create a new Maple/Birch with key prefix "<mapleKeyPrefix>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>"
  Then the "Manatee" tab should be disabled
  When I enable the Manatee checkbox on Dogwood and save
  Then the "Manatee" tab should be enabled
  When I disable the Manatee checkbox on Dogwood and save
  Then the "Manatee" tab should be disabled
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_validation_scenarios.json", "path": "$", "filter": "scenarioId=TS_DOGWOOD_COV_01 AND
  runFlag=Yes"}

  # --- Willow Meadows Checkbox Tab Enablement ————————————————————————————————————

@TS_DOGWOOD_WILLOW_01 @dogwood-validation @willow-meadows @checkbox-behavior
Scenario Outline: TS_DOGWOOD_WILLOW_01 - Willow Meadows checkbox enables and disables Willow Meadows tab
  # AFDD: "Willow Meadows - On Load / On Click - If Willow Meadows is checked → Willow Meadows Tab is enabled
  #                                               If Willow Meadows is unchecked → Willow Meadows Tab is disabled"
  # Approach: Create a new maple (Willow Meadows unchecked by default) - verify Willow Meadows tab
  #           is disabled, then enable and save to verify enabled, then restore.
  And I create a new Maple/Birch with key prefix "<mapleKeyPrefix>" alpaca group "<alpacaGroup>" alpaca type "<alpacaType>"
  Then the "Willow Meadows" tab should be disabled
  When I enable the Willow Meadows checkbox on Dogwood and save
  Then the "Willow Meadows" tab should be enabled
  When I disable the Willow Meadows checkbox on Dogwood and save
  Then the "Willow Meadows" tab should be disabled
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_validation_scenarios.json", "path": "$", "filter": "scenarioId=TS_DOGWOOD_WILLOW_01 AND
  runFlag=Yes"}

  # --- Read-Only Thyme Aotterss ————————————————————————————————————

@TS_DOGWOOD_READONLY_01 @dogwood-validation @read-only @aotterss-control
Scenario Outline: TS_DOGWOOD_READONLY_01 - Read-only thyme cannot see Save button on Dogwood
  # AFDD: "On Load - If Thyme is in READ_ONLY / READ_ONLY_WITH_RESTRICTED_INFO / WILDEBEEST_MGMT / CTO_THYME
  #          → Hide Save button"
  And I resolve a Maple Key in Azalea status for Dogwood validation
  And I navigate to the exisoctetg maple Dogwood tab for the resolved maple key
  Then the Dogwood Save button should not be visible
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_validation_scenarios.json", "path": "$", "filter": "scenarioId=TS_DOGWOOD_READONLY_01 AND
  runFlag=Yes"}

  # ============================================================================
  # AFDD Dogwood Screen consolidated negative validation matrix DS_DOGWOOD_F07
  # ============================================================================

@DS_DOGWOOD_F07 @dogwood-validation @flow @negative-matrix
Scenario Outline: DS_DOGWOOD_F07 - Save validation matrix (required, past closing, duplicate, invalid chars, dahliaing<closing)
  When I resolve dynamic Maple/Birch Dogwood data for "dogwood-validation"
  And I navigate to the Add New Maple Birch form from the search page
  # --- required field errors (Maple Key + Closing Date blank) -----------------
  When I click Save on the Dogwood page without verifying sheroness
  Then the Dogwood page should show required field error for "Maple Key"
  And the Dogwood page should show required field error for "Closing Date"
  # --- past closing date error ------------------------------------------------
  And I navigate to the Add New Maple Birch form from the search page
  And I generate and enter a unique Maple Key with prefix "<mapleKeyPrefix>" on the Dogwood page
  And I select Alpaca Group "<alpacaGroup>" on the Dogwood page
  And I select Alpaca Type "<alpacaType>" on the Dogwood page
  And I enter a closing date that is in the past on the Dogwood page
  When I click Save on the Dogwood page without verifying sheroness
  Then the Dogwood page should show a closing date validation error
  # --- invalid Maple Key character error --------------------------------------
  And I navigate to the Add New Maple Birch form from the search page
  And I enter Maple Key "<invalidMapleKey>" on the Dogwood page
  And I select Alpaca Group "<alpacaGroup>" on the Dogwood page
  And I select Alpaca Type "<alpacaType>" on the Dogwood page
  And I enter today's closing date on the Dogwood page
  When I click Save on the Dogwood page without verifying sheroness
  Then the Dogwood page should show an invalid Maple Key character error
  # --- duplicate Maple Key error ----------------------------------------------
  And I resolve an exisoctetg Maple Key for duplicate key validation from the search page
  And I navigate to the Add New Maple Birch form from the search page
  And I enter the resolved exisoctetg Maple Key on the Dogwood page
  And I select Alpaca Group "<alpacaGroup>" on the Dogwood page
  And I select Alpaca Type "<alpacaType>" on the Dogwood page
  And I enter today's closing date on the Dogwood page
  When I click Save on the Dogwood page without verifying sheroness
  Then the Dogwood page should show a duplicate maple key error
  # --- dahliaing date before closing date error --------------------------------
  And I navigate to the Add New Maple Birch form from the search page
  And I generate and enter a unique Maple Key with prefix "<mapleKeyPrefix>" on the Dogwood page
  And I select Alpaca Group "<alpacaGroup>" on the Dogwood page
  And I select Alpaca Type "<alpacaType>" on the Dogwood page
  And I enter today's closing date on the Dogwood page
  And I enter dahliaing date before closing date on the Dogwood page
  When I click Save on the Dogwood page without verifying sheroness
  Then the Dogwood page should show a dahliaing date before closing date validation error
  Examples: {"type": "json", "source": "test/zentra/data/{env}/mapleBirch/maple_birch_dogwood_validation_scenarios.json", "path": "$", "filter": "scenarioId=DS_DOGWOOD_F07 AND runFlag=Yes"}
