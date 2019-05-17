const emptyLine = (lineLength) => {
    return new Array(lineLength).fill('')

}

export const buildArrayForGunTable = (gunObj) => {

    const has3RB = Boolean(gunObj.trb)
    const lineOne = createLineOne(gunObj)
    const lineTwo = createLineTwo(gunObj)
    const lineThree = createLineThree(gunObj, has3RB)
    const lineFour = createLineFour(gunObj, has3RB)
    const lineFive = createLineFive(gunObj, has3RB)
    const lineSix = createLineSix(gunObj, has3RB)
    const lineSeven = createLineSeven(gunObj, has3RB)
    const lineEight = createLineEight(gunObj, has3RB)
    const lineNine = createLineNine(gunObj)
    const lineTen = createLineTen(gunObj)
    const lineEleven = createLineEleven(gunObj)

return [lineOne, lineTwo, lineThree, lineFour, lineFive, lineSix, lineSeven, lineEight, lineNine, lineTen, lineEleven]
}

const createLineOne = (gunObj) => {
    return {
        dataType: {
            name: 'Length',
            short: 'L',
            data: gunObj.length
        },
        aim: [gunObj.aim.ac[0], gunObj.aim.mod[0]],
        tag:[gunObj.projectiles[0].type, 'PEN'],
        array: gunObj.projectiles[0].pen,
    }
}

const createLineTwo = (gunObj) => {
    return {
        dataType: {
            name: 'Weight',
            short: 'W',
            data: gunObj.weight
        },
        aim: [gunObj.aim.ac[1], gunObj.aim.mod[1]],
        tag:['', 'DC'],
        array: gunObj.projectiles[0].dc,
    }
}

const createLineThree = (gunObj, has3RB) => {
    return {
        dataType: {
            name: '',
            short: '',
            data: '',
        },
        aim: [gunObj.aim.ac[2], gunObj.aim.mod[2]],
        tag: has3RB ? [gunObj.projectiles[1].type ,'PEN'] : ['', ''],
        array: has3RB ? gunObj.projectiles[1].pen : emptyLine(gunObj.tof.length),
    }
}

const getProjectile = (type) => {
    return Array.isArray(type) ? type[0] : type
}

const createLineFour = (gunObj, has3RB) => {
    let tag = undefined
    let array = undefined
    
    if(gunObj.projectiles.length > 1 && !has3RB){
        tag = [getProjectile(gunObj.projectiles[1].type) ,'PEN']
        array = gunObj.projectiles[1].pen
    }
    if(gunObj.projectiles.length > 1 && has3RB){
        tag = ['', 'DC']
        array = gunObj.projectiles[1].dc
    }
    if(gunObj.projectiles.length <= 1){
        tag = ['', '']
        array = emptyLine(gunObj.tof.length)
    }
    return {
        dataType: {
            name: 'Reload',
            short: 'RT',
            data: gunObj.rt,
        },
        aim: [gunObj.aim.ac[3], gunObj.aim.mod[3]],
        tag,
        array,
    }
}

const createLineFive = (gunObj, has3RB) => {
    let tag = ['','']
    let array = emptyLine(gunObj.tof.length)
    if(gunObj.projectiles.length > 1 && !has3RB){
        tag = Array.isArray(gunObj.projectiles[1].type) ? [gunObj.projectiles[1].type[1], 'DC'] : ['', 'DC']
        array = gunObj.projectiles[1].dc
    }
    if(gunObj.projectiles.length > 2 && has3RB){
        tag = [gunObj.projectiles[2].type,'PEN']
        array = gunObj.projectiles[2].pen
    }
    return {
        dataType: {
            name: 'ROF',
            short: 'ROF',
            data: gunObj.rof,
        },
        aim: [gunObj.aim.ac[4], gunObj.aim.mod[4]],
        tag,
        array,
    }
}

const createLineSix = (gunObj, has3RB) => {
    let tag = ['','']
    let array = emptyLine(gunObj.tof.length)
    if(gunObj.projectiles.length > 2 && has3RB){
        tag = ['','DC']
        array = gunObj.projectiles[2].dc
    }
    if(gunObj.projectiles[1] && gunObj.projectiles[1].type.includes('Shot')){
        tag = ['', 'SALM']
        array = gunObj.projectiles[1].salm
    }
    return {
        dataType: {
            name: '',
            short: '',
            data: '',
        },
        aim: [gunObj.aim.ac[5], gunObj.aim.mod[5]],
        tag,
        array,
    }
}

const createLineSeven = (gunObj, has3RB) => {
    let tag = ['','']
    let array = emptyLine(gunObj.tof.length)
    
    if(gunObj.projectiles.length > 2 && !has3RB){
        tag = [gunObj.projectiles[2].type ,'PEN']
        array = gunObj.projectiles[2].pen
    }
    if(gunObj.projectiles[1] && gunObj.projectiles[1].type.includes('Shot')){
        tag = [gunObj.projectiles[1].type[2], 'BPHC']
        array = gunObj.projectiles[1].bphc
    }

    return {
        dataType: {
            name: 'Capacity',
            short: 'Cap',
            data: gunObj.mag[0].cap,
        },
        aim: [gunObj.aim.ac[6], gunObj.aim.mod[6]],
        tag,
        array,
    }
}

const createLineEight = (gunObj, has3RB) => {
    let tag = ['','']
    let array = emptyLine(gunObj.tof.length)
    if (gunObj.projectiles.length > 2 && !has3RB){
        tag = ['', 'DC']
        array = gunObj.projectiles[2].dc
    }
    if (has3RB){
        tag = ['', '3RB']
        array = gunObj.trb
    }
    if(gunObj.projectiles[1] && gunObj.projectiles[1].type.includes('Shot')){
        tag = ['', 'PR']
        array = gunObj.projectiles[1].pr
    }
    return {
        dataType: {
            name: 'AW',
            short: 'AW',
            data: gunObj.mag[0].weight,
        },
        aim: [gunObj.aim.ac[7], gunObj.aim.mod[7]],
        tag,
        array,
    }
}

const createLineNine = (gunObj) => {
    return {
        dataType: {
            name: '',
            short: '',
            data: gunObj.mag[0].type,
        },
        aim: [gunObj.aim.ac[8], gunObj.aim.mod[8]],
        tag: gunObj.ma ? ['', 'MA'] : ['', ''],
        array: gunObj.ma ? gunObj.ma : emptyLine(gunObj.tof.length),
    }
}

const createLineTen = (gunObj) => {
    return {
        dataType: {
            name: 'KnockDown',
            short: 'KD',
            data: gunObj.kd,
        },
        aim: [gunObj.aim.ac[9], gunObj.aim.mod[9]],
        tag:['', 'BA'],
        array: gunObj.ba,
    }
}

const createLineEleven = (gunObj) => {
    return {
        dataType: {
            name: 'SAB',
            short: 'SAB',
            data: gunObj.sab
        },
        aim: [gunObj.aim.ac[10], gunObj.aim.mod[10]],
        tag:['', 'TOF'],
        array: gunObj.tof,
    }
}