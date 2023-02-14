![PCCS Logo](/public/pccsBnW.png)

# Phoenix Command Combat System Assistant

### Built with TDD/BDD and CI.
[![Build Status](https://travis-ci.org/mp40/PCCS-Helper.png?branch=master)](https://travis-ci.org/mp40/PCCS-Helper)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e80706684ebcb24309e8/test_coverage)](https://codeclimate.com/github/mp40/PCCS-Helper/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/e80706684ebcb24309e8/maintainability)](https://codeclimate.com/github/mp40/PCCS-Helper/maintainability)

This was started during my time as a student at Code Chrysalis

A React-Redux application to assist running calculations required for the Phoenix Command Combat System wargaming/roleplaying rules.

### This is a work in progress
A beta version for QA testing and user feedback is [deployed here](https://pccs-helper.vercel.app)<br>

Currently the application has the following features:

Generate 
- Accepts input value for name
- Accepts input values for attributes
- Accepts input values for combat levels
- Calculates combat actions on attribute value, skill level and weight change
- Calculates damage bonus, base and max speed, intelligence skill factor, agility skill factor, knockout value on attribute value, skill level and weight change
- Has filterable equipment list to select equipment from
- Equipment selection has option of entering equipment not on list
- Firearms selection, filtereable by firearm type and calibre
- Supports multiple magazine types for firearms, with ability to specify primary magazine and hide non-primary magazines
- Ability to add custom magazines to firearm
- Ability to add/remove optics and grenade launchers
- Ability modify firearm weight, changing primary magazine automatically updates firearm weight
- Grenade selection
- Rocket and underslung grenade launcher selection
- Body armour selection
- Automatically generates hand to hand weapon data from selected equipment and firearms
- Able to print basic reference sheet for offline game play

Use
- Calculate odds of hitting with selected weapons

## Install procedure for development

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

## Run test coverage report

```
yarn test --verbose --coverage --watchAll=false
```
