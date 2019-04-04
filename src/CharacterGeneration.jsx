import React, { Component } from "react";
import AttributeCard from "./AttributeCard";
import CombatCard from "./CombatCard";
import './CharacterGeneration.css'
import ActionsCard from "./ActionsCard";
// import EquipmentDropdown from "./EquipmentDropdown";
import EquipmentListCard from "./EquipmentListCard";
//TODO finsih migration required props and functions to EquipmentListCard
class CreateChar extends Component {
  constructor(props){
    super(props)
    this.state = {
      showEquipment: false,
      showFilters: false,
      requiredEquipment: [],
      filteredTags: []
    }
  }

  toggleShowEquipment(){
    console.log('working')
    this.setState({showEquipment: !this.state.showEquipment},()=>{console.log('?',this.state.showEquipment)})
  }

  closeShowEquipment(){
    this.setState({
      showEquipment: false,
      showFilters: false
    })
  }

  toggleFilters(){
    this.setState({showFilters: !this.state.showFilters})
  }

  handleTags(tag) {
      if(this.state.filteredTags.includes(tag)){
        this.unfilterTag(tag)
      } else {
        this.filterTag(tag)
      }
  }

  filterTag(tag) {
    const tags = this.state.filteredTags
    tags.push(tag)
    this.setState({filteredTags: tags})
  }

  unfilterTag(tag){
    let tags = this.state.filteredTags
    tags = tags.filter((element)=>{
      return element !== tag
    })
    this.setState({filteredTags: tags})
  }

  render() {

    // const charEquip = this.props.gear.equipment
    // const totalEquipWeight = charEquip.reduce((accumulator,obj)=>{
    //   return accumulator + (obj.weight*obj.qty)
    // },0)

    return (
      <div className="createCharContainer">
        <div className="dataCardContainer">
        <AttributeCard
          {...this.props}
        />
        <CombatCard
          {...this.props}
        />
        <ActionsCard
          {...this.props}
        />
        </div>
        <EquipmentListCard
          {...this.props}
          toggleShowEquipment={this.toggleShowEquipment.bind(this)}
        />
    </div>    
    );
  }
}

export default CreateChar;