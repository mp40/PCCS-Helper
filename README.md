![PCCS Logo](/public/pccsBnW.png)

# Phoenix Command Combat System Assistant 

### Built with TDD/BDD and CI.
[![Build Status](https://travis-ci.org/mp40/PCCS-Helper.png?branch=master)](https://travis-ci.org/mp40/PCCS-Helper)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e80706684ebcb24309e8/test_coverage)](https://codeclimate.com/github/mp40/PCCS-Helper/test_coverage)

This was started during my time as a student at Code Chrysalis

A React application to assist running calculations required for the Phoenix Command Combat System wargaming/roleplaying rules.

Currently, it has the following inputs:

- Characteristics, incremented via text input
- Skill Levels, incremented via text input
- Equipment, select from list, filterable by type, add user defined equipment
- Encumbrance, increments indirectly via equipment input 

The application returns the following:

- Base Speed
- Maximum Speed
- Skill Accuracy Level
- Combat Effectiveness
- Intelligence Skill Factor
- Agility Skill Factor
- Gun Combat Actions
- Melee Combat Actions
- Knockout Value
- Damage Bonus

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

### This is a work in progress

#### WIP
- Firearm selection

#### Next

- Refactor code
- Improve UI/UX
- Body Armour selection

#### To Come

- Grenade selection
- Hand to hand data
- Backend
