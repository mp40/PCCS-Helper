import React, { Component } from 'react';

import WeaponsCardCustomMag from './WeaponsCardCustomMag';
import WeaponsCardModifyWeight from './WeaponsCardModifyWeight';
import ButtonSlim from './buttons/ButtonSlim';

import './WeaponsCard.css';

class WeaponsCardModifyWeapon extends Component {
  setPrimaryMag(index) {
    const newGunObj = this.props.gunObj;
    newGunObj.weight -= newGunObj.mag[0].weight;
    newGunObj.weight += newGunObj.mag[index].weight;
    const newPrimary = this.props.gunObj.mag.splice(index, 1);
    newGunObj.mag.unshift(newPrimary[0]);

    this.props.handleModifyFirearm(newGunObj);
  }

  setFirearmWeight(note, weightMod) {
    this.props.handleModifyFirearmWeight(note, weightMod);
  }

  handleRemoveMod(noteObj) {
    const newGunObj = this.props.gunObj;
    newGunObj.weight += noteObj.weightMod * -1;
    newGunObj.weight = Math.round(newGunObj.weight * 1000) / 1000;
    newGunObj.modNotes = newGunObj.modNotes.filter(note => note.note !== noteObj.note);
    this.props.handleModifyFirearm(newGunObj);
  }

  render() {
    const gunObj = this.props.gunObj;

    if (!this.props.createCustomMag && !this.props.modifyFirearmWeight) {
      return (
        <div style={{ marginLeft: '5rem' }} className="modifyWeaponPanel">
          <div>Modify Weapon</div>
          <button
            className="removeAllMods"
            onClick={this.props.removeAllGunMods.bind(this, gunObj)}
          >
                            Remove All Mods
          </button>

          <div className="modifyMagazines">
            <div style={{ display: 'flex' }}>
              <div style={{ paddingRight: '5px', paddingTop: '5px' }}>Magazines</div>
              <div>
                      <ButtonSlim
                          name="+"
                          id="addCustomMagazine"
                          onClick={this.props.toggleCreateCustomMag.bind(this)}
                        />
                    </div>
            </div>
            {gunObj.mag.map((magObj, index) => (
              <div key={index}>
                      {`${magObj.cap} round ${magObj.type}`}
                      {`${magObj.weight} lbs`}
                      {index > 0
                          ? <button id={`${gunObj.name}MagAtIndex${index}`} onClick={this.setPrimaryMag.bind(this, index)} style={{ opacity: '0.6' }}>primary</button>
                          : <button id={`${gunObj.name}MagAtIndex${index}`}>primary</button>
                                }
                    </div>
            ))}
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ paddingTop: '5px' }}>Weight</div>
            <div style={{ marginLeft: '5px', paddingTop: '4px', display: 'inline-block', height: '5px' }}>
              <ButtonSlim
                      name="set"
                      id="modifyWeaponWeight"
                      onClick={this.props.toggleModifyFirearmWeight.bind(this)}
                    />
            </div>

          </div>
          {gunObj.modNotes
            ? gunObj.modNotes.map((noteObj, index) => (
              <div key={index}>
                      <span>{noteObj.note}</span>
                      <span>
                          {noteObj.weightMod}
                          {' '}
lbs
                        </span>
                      <button
                          className="removeModification"
                          onClick={this.handleRemoveMod.bind(this, noteObj)}
                        >
                                remove
                        </button>
                    </div>
            ))
            : null}
        </div>
      );
    }
    if (this.props.createCustomMag) {
      return (
        <div style={{ marginLeft: '5rem' }}>
          <WeaponsCardCustomMag
            handleAddCustomMag={this.props.handleAddCustomMag.bind(this)}
          />
        </div>
      );
    }
    if (this.props.modifyFirearmWeight) {
      return (
        <div style={{ marginLeft: '5rem' }}>
          <WeaponsCardModifyWeight
            handleModifyFirearmWeight={this.props.handleModifyFirearmWeight}
          />
        </div>
      );
    }
  }
}

export default WeaponsCardModifyWeapon;
