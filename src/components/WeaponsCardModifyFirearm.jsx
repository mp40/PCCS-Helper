import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeaponsCardCustomMag from './WeaponsCardCustomMag';
import WeaponsCardModifyWeight from './WeaponsCardModifyWeight';
import ButtonSlim from './buttons/ButtonSlim';

import './WeaponsCard.css';

class WeaponsCardModifyWeapon extends Component {
  setPrimaryMag = (index) => {
    const { gunObj } = this.props;

    const newGunObj = gunObj;
    newGunObj.weight -= newGunObj.mag[0].weight;
    newGunObj.weight += newGunObj.mag[index].weight;
    const newPrimary = gunObj.mag.splice(index, 1);
    newGunObj.mag.unshift(newPrimary[0]);

    this.props.handleModifyFirearm(newGunObj);
  }

  setFirearmWeight = (note, weightMod) => {
    this.props.handleModifyFirearmWeight(note, weightMod);
  }

  handleRemoveMod = (noteObj) => {
    const { gunObj } = this.props;
    const newGunObj = gunObj;
    newGunObj.weight += noteObj.weightMod * -1;
    newGunObj.weight = Math.round(newGunObj.weight * 1000) / 1000;
    newGunObj.modNotes = newGunObj.modNotes.filter(note => note.note !== noteObj.note);
    this.props.handleModifyFirearm(newGunObj);
  }

  render() {
    const {
      gunObj,
      createCustomMag,
      modifyFirearmWeight,
      removeAllGunMods,
      toggleCreateCustomMag,
      toggleModifyFirearmWeight,
      handleAddCustomMag,
      handleModifyFirearmWeight,
    } = this.props;

    if (!createCustomMag && !modifyFirearmWeight) {
      return (
        <div style={{ marginLeft: '5rem' }} className="modifyWeaponPanel">
          <div>Modify Weapon</div>
          <button
            type="button"
            className="removeAllMods"
            onClick={removeAllGunMods.bind(this, gunObj)}
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
                  onClick={toggleCreateCustomMag}
                />
              </div>
            </div>
            {gunObj.mag.map((magObj, index) => (
              <div key={`${magObj.cap}${magObj.weight}`}>
                {`${magObj.cap} round ${magObj.type}`}
                {`${magObj.weight} lbs`}
                {index > 0
                  ? <button type="button" id={`${gunObj.name}MagAtIndex${index}`} onClick={this.setPrimaryMag.bind(this, index)} style={{ opacity: '0.6' }}>primary</button>
                  : <button type="button" id={`${gunObj.name}MagAtIndex${index}`}>primary</button>
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
                onClick={toggleModifyFirearmWeight}
              />
            </div>

          </div>
          {gunObj.modNotes
            && gunObj.modNotes.map(noteObj => (
              <div key={`${noteObj.note}${noteObj.weightMod}`}>
                <span>{noteObj.note}</span>
                <span>
                  {`${noteObj.weightMod} lbs`}
                </span>
                <button
                  type="submit"
                  className="removeModification"
                  onClick={this.handleRemoveMod.bind(this, noteObj)}
                >
                  remove
                </button>
              </div>
            ))
          }
        </div>
      );
    }
    if (createCustomMag) {
      return (
        <div style={{ marginLeft: '5rem' }}>
          <WeaponsCardCustomMag
            handleAddCustomMag={handleAddCustomMag}
          />
        </div>
      );
    }
    if (modifyFirearmWeight) {
      return (
        <div style={{ marginLeft: '5rem' }}>
          <WeaponsCardModifyWeight
            handleModifyFirearmWeight={handleModifyFirearmWeight}
          />
        </div>
      );
    }
    return null;
  }
}

WeaponsCardModifyWeapon.propTypes = {
  createCustomMag: PropTypes.bool,
  modifyFirearmWeight: PropTypes.bool,
  removeAllGunMods: PropTypes.func,
  toggleCreateCustomMag: PropTypes.func,
  toggleModifyFirearmWeight: PropTypes.func,
  handleAddCustomMag: PropTypes.func,
  handleModifyFirearmWeight: PropTypes.func,
  gunObj: PropTypes.shape({
    name: PropTypes.string,
    list: PropTypes.string,
    type: PropTypes.array,
    length: PropTypes.number,
    weight: PropTypes.number,
    rt: PropTypes.number,
    rof: PropTypes.string,
    mag: PropTypes.array,
    kd: PropTypes.number,
    sab: PropTypes.number,
    aim: PropTypes.object,
    projectiles: PropTypes.array,
    ma: PropTypes.array,
    ba: PropTypes.array,
    tof: PropTypes.array,
    offical: PropTypes.bool,
  }),
};

export default WeaponsCardModifyWeapon;
