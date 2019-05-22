import React, { Component, Fragment } from "react";
import ButtonDeleteX from './buttons/ButtonDeleteX'
import ButtonIncrementArrows from './buttons/ButtonIncrementArrows'
import ButtonStandard from './buttons/ButtonStandard'

import './CharacterGeneration.css'
import './WeaponsCard.css'

export class WeaponsCardBody extends Component {

    render() {

        return (
                <table style={{width:'100%'}} className="equipmentTable">
                    <thead className="equipmentHeader" id='weaponsHeader' style={{width:'100%'}} >
                        <tr>
                            <th>
                                <span>Weapons</span>
                            </th>
                            <th style={{width:'10%'}}>Weight</th>
                            <th style={{width:'10%'}}>Qty</th>
                            <th style={{width:'10%'}}>lbs</th>
                            <th style={{width:'10%'}}>{this.props.weaponsWeight}</th>
                        </tr>
                    </thead>
                    <tbody id="characterWeaponList">
                        <tr>
                            <td>
                                <ButtonStandard
                                    id="addFirearm"
                                    name={'Add Firearm'}
                                    onClick={this.props.toggleShowFirearms.bind(this)}
                                />
                                <ButtonStandard
                                    id="clearAllFirearms"
                                    name={'Clear All'}
                                    onClick={this.props.handleRemoveAllGuns.bind(this)}
                                />
                            </td>
                        </tr>
                        {this.props.selectedGuns.map((gunObj, index)=>{
                            return <Fragment key={index} >
                            <tr className="SelectedGunsFragment">
                                <td>
                                    <span>
                                        <ButtonDeleteX
                                            id="removeGun" 
                                            onClick={this.props.handleRemoveGun.bind(this, gunObj)}
                                        />
                                    </span>
                                    <span 
                                        style={{marginLeft:'0.5rem', paddingLeft:'5px', paddingRight:'5px'}}
                                        className="selectFirearmToModify"
                                        onClick={this.props.toggleModifyWeapon.bind(this, gunObj)}
                                        >
                                            {gunObj.name}
                                        </span>
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
                                    <ButtonIncrementArrows
                                        className="ButtonIncrementArrows"
                                        idUp={"qtyUpGun"}
                                        idDown={"qtyDownGun" }
                                        onClickUp={this.props.handleIncrementGunQty.bind(this,gunObj,1)}
                                        onClickDown={this.props.handleIncrementGunQty.bind(this,gunObj,-1)}
                                    />
                                </td>
                            </tr>
                            {gunObj.mag.map((magObj, dex)=>{
                                return <tr key={dex} className="spareMags">
                                    <td>
                                        {magObj.type === 'Rnd' ? 
                                            <span className='magQtySpan' style={{marginLeft:'2rem'}}>{`${magObj.qty} x Single Rounds`}</span> :    
                                            <span className='magQtySpan' style={{marginLeft:'2rem'}}>{`${magObj.qty} x ${magObj.cap} round ${magObj.type}`}</span>
                                        }
                                        <span style={{marginLeft:'2px', marginRight:'2px'}}>
                                            <ButtonIncrementArrows
                                                idUp={`qtyUpMagType${dex+1}`}
                                                idDown={`qtyDownMagType${dex+1}`}
                                                onClickUp={this.props.handleIncrementMagQty.bind(this,gunObj,magObj,1)}
                                                onClickDown={this.props.handleIncrementMagQty.bind(this,gunObj,magObj,-1)}
                                            />
                                        </span>
                                    </td>
                                </tr>
                            })}
                            </Fragment>
                        })}
                    </tbody>
                </table>
        )   
    }

}

export default WeaponsCardBody
