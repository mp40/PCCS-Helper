const buttonData = (gearType) => {
  const equipmentButtonData = [
    { id: 'addEquipment', name: 'Add Equipment' },
    { id: 'toggleCustomEquipment', name: 'Add Custom' },
    { id: 'clearAllEquipment', name: 'Clear All' },
  ];

  const weaponsButtondata = [
    { id: 'addFirearm', name: 'Add Firearm' },
    { id: 'clearAllFirearms', name: 'Clear Firearms' },
    { id: 'addGrenade', name: 'Add Grenade' },
    { id: 'addLauncher', name: 'Add Launcher' },
  ];
  return gearType === 'equipment' ? equipmentButtonData : weaponsButtondata;
};

export default buttonData;
