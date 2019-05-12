import React, { Component, Fragment } from "react";

import {testM1911A1, testM16} from '../helpers/testHelpers'

export class WeaponsCardBodyB extends Component {

    render() {
        // const selectedWeapons = [testM16(), testM1911A1()]

        return (
            <div className="WeaponTableContainer">
                <table style={{width:'100%'}} className="equipmentTable">
                    <thead className="equipmentHeader" id='weaponsHeader'>
                        <tr>
                            <td>Weapons</td>
                            <td>Weight</td>
                            <td>Qty</td>
                            <td>lbs</td>
                            <td>{this.props.weaponsWeight}</td>
                        </tr>
                    </thead>
                    <tbody id="characterWeaponList">
                        <tr>
                            <td>
                                <button 
                                id="addFirearm" 
                                className="equipmentButton" 
                                onClick={this.props.toggleShowFirearms.bind(this)}
                                >
                                    Add Firearm
                                </button>
                                <button
                                    id="clearAllFirearms"
                                    className="equipmentButton"
                                    onClick={this.props.handleRemoveAllGuns.bind(this)}
                                >
                                    Clear All
                                </button>
                            </td>
                        </tr>
                        {this.props.selectedGuns.map((gunObj, index)=>{
                            return <Fragment key={index}>
                            <tr>
                                <td>
                                    <span>
                                        <button
                                        id="removeGun" 
                                        className="equipmentButton"
                                        onClick={this.props.handleRemoveGun.bind(this, gunObj)}
                                        >
                                            X
                                        </button>
                                    </span>
                                    <span>{gunObj.name}</span>
                                </td>
                                <td>
                                    {gunObj.weight}
                                </td>
                                <td id={`${gunObj.name}_qty`}>
                                    {gunObj.qty}
                                </td>
                                <td>
                                    {gunObj.qty * gunObj.weight}
                                </td>
                                <td>
                                    <button 
                                        id="qtyUpGun"
                                        className="equipmentButton"
                                        onClick={this.props.handleIncrementGunQty.bind(this,gunObj,1)}
                                    >
                                        {String.fromCharCode(8593)}
                                    </button>
                                    <span style={{paddingLeft:'6px'}}/>
                                    <button 
                                        id="qtyDownGun" 
                                        className="equipmentButton"
                                        onClick={this.props.handleIncrementGunQty.bind(this,gunObj,-1)}
                                    >
                                        {String.fromCharCode(8595)}
                                    </button>
                                </td>
                            </tr>
                            {gunObj.mag.map((magObj, dex)=>{
                                return <tr key={dex} className="spareMags">
                                    <td>
                                        {magObj.type === 'Rnd' ? 
                                            <span className='magQtySpan'>{`${magObj.qty} x Single Rounds`}</span> :    
                                            <span className='magQtySpan'>{`${magObj.qty} x ${magObj.cap} round ${magObj.type}`}</span>
                                        }
                                        <span>{}</span>
                                        <span>
                                        <button 
                                            id={`qtyUpMagType${dex+1}`}
                                            className="equipmentButton"
                                            onClick={this.props.handleIncrementMagQty.bind(this,gunObj,magObj,1)}
                                            >
                                              {String.fromCharCode(8593)}
                                            </button>
                                            <button 
                                            id={`qtyDownMagType${dex+1}`}
                                            className="equipmentButton"
                                            onClick={this.props.handleIncrementMagQty.bind(this,gunObj,magObj,-1)}
                                            >
                                              {String.fromCharCode(8595)}
                                            </button>
                                        </span>
                                    </td>
                                </tr>
                            })}
                            </Fragment>
                        })}
                    </tbody>
                </table>
            </div>
        )   
    }

}

export default WeaponsCardBodyB

{/* <tr>
                            <td>
                                <span>x</span> make standard component
                                <span>M16</span> gunObj.name
                            </td>
                            <td>666</td> gunObj.weight
                            <td>1</td> gunObj.qty
                            <td>666*1</td> gunObj.qty * unObj.weight
                            <td>
                                <span>up</span> make standard component
                                <span>dn</span> make standard component
                            </td>
                        </tr>
                        <tr>
                            <td>Additional Ammo</td> String
                        </tr>
                        <tr>
                            <span>1 x 20 round Mag</span>
                            <span> 0.7 ibds</span>
                            <span> up dn</span>
                        </tr>
                        <tr>
                            <span>1 x 30 round Mag</span>
                            <span> 1 ibds</span>
                            <span> up dn</span>
                        </tr>

  */}