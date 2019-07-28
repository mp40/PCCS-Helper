![PCCS Logo](/public/pccsBnW.png)

# Phoenix Command Combat System Assistant 

### Built with TDD/BDD and CI.
[![Build Status](https://travis-ci.org/mp40/PCCS-Helper.png?branch=master)](https://travis-ci.org/mp40/PCCS-Helper)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e80706684ebcb24309e8/test_coverage)](https://codeclimate.com/github/mp40/PCCS-Helper/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/e80706684ebcb24309e8/maintainability)](https://codeclimate.com/github/mp40/PCCS-Helper/maintainability)

This was started during my time as a student at Code Chrysalis

A React-Redux application to assist running calculations required for the Phoenix Command Combat System wargaming/roleplaying rules.

### This is a work in progress
A beta version for QA testing and user feedback is [deployed here](https://pccs.herokuapp.com/)

Currently the application has the following features:

- Accepts input values for attributes
- Accepts input values for combat levels
- Calculates combat actions on attribute value, skill level and weight change
- Calculates damage bonus, base and max speed on attribute value, skill level and weight change
- Also calculates Intelligence Skill Factor, Agility Skill Factor, Knockout Value which are not yet displayed/directly used
- Has filterable equipment list to select equipment from
- Equipment selection has option of entering equipment not on list
- Firearms selection, filtereable by firearm type and calibre
- Supports multiple magazine types for firearms, with ability to specify primary magazine and hide non-primary magazines
- Ability to add custom magazines to firearm
- Ability modify firearm weight, changing primary magazine automatically updates firearm weight

## Install procedure

```
yarn
```

## Build procedure

```
yarn start
```

## Run tests

```
yarn test
```

#### WIP
- Body Armour selection

#### Next

- Refactor code
- Improve UI/UX
- Grenade selection

#### To Come

- Hand to hand data
- Backend
