import React, { Component, Fragment } from "react";

import {testM1911A1, testM16} from '../helpers/testHelpers'

export class WeaponsCardBodyB extends Component {

    render() {
        // const selectedWeapons = [testM16(), testM1911A1()]

        return (
            <div className="WeaponTableContainer">
                <table>
                    <thead>
                        <tr>
                            <td>Weapons</td>
                            <td>Weight</td>
                            <td>Qty</td>
                            <td>lbs</td>
                            <td>1337</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.selectedGuns.map((gunObj, index)=>{
                            return <Fragment key={index}>
                            <tr>
                                <td>
                                    <span>X</span>
                                    <span>{gunObj.name}</span>
                                </td>
                                <td>
                                    {gunObj.weight}
                                </td>
                                <td>
                                    {gunObj.qty}
                                </td>
                                <td>
                                    {gunObj.qty * gunObj.weight}
                                </td>
                                <td>
                                    Up Dn
                                </td>
                            </tr>
                            {gunObj.mag.map((magObj, index)=>{
                                return <tr key={index}>
                                    <td>
                                        <span>{`${magObj.qty} x ${magObj.cap} round ${magObj.type}`}</span>
                                        <span>{}</span>
                                        <span>Up Dn</span>
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