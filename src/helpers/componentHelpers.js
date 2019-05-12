export const buildArrayForGunTable = (gunObj) => {
    const lineOne = createLineOne(gunObj)
    const lineTwo = createLineTwo(gunObj)
    const lineThree = createLineThree(gunObj)
    const lineFour = createLineFour(gunObj)
    const lineFive = createLineFive(gunObj)
    const lineSix = createLineSix(gunObj)
    const lineSeven = createLineSeven(gunObj)
    const lineEight = createLineEight(gunObj)
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

const createLineThree = (gunObj) => {
    return {
        dataType: {
            name: '',
            short: '',
            data: '',
        },
        aim: [gunObj.aim.ac[2], gunObj.aim.mod[2]],
        tag:['', ''],
        array: [],
    }
}

const createLineFour = (gunObj) => {
    return {
        dataType: {
            name: 'Reload',
            short: 'RT',
            data: gunObj.rt,
        },
        aim: [gunObj.aim.ac[3], gunObj.aim.mod[3]],
        tag: gunObj.projectiles.length > 1 ? [gunObj.projectiles[1].type ,'PEN'] : ['', ''],
        array: gunObj.projectiles.length > 1 ? gunObj.projectiles[1].pen : [],
    }
}

const createLineFive = (gunObj) => {
    return {
        dataType: {
            name: 'ROF',
            short: 'ROF',
            data: gunObj.rof,
        },
        aim: [gunObj.aim.ac[4], gunObj.aim.mod[4]],
        tag: gunObj.projectiles.length > 1 ? ['', 'DC'] : ['',''],
        array: gunObj.projectiles.length > 1 ? gunObj.projectiles[1].dc : [],
    }
}

const createLineSix = (gunObj) => {
    return {
        dataType: {
            name: '',
            short: '',
            data: '',
        },
        aim: [gunObj.aim.ac[5], gunObj.aim.mod[5]],
        tag:['', ''],
        array: [],
    }
}

const createLineSeven = (gunObj) => {
    return {
        dataType: {
            name: 'Capacity',
            short: 'Cap',
            data: gunObj.mag[0].cap,
        },
        aim: [gunObj.aim.ac[6], gunObj.aim.mod[6]],
        tag: gunObj.projectiles.length > 2 ? [gunObj.projectiles[2].type ,'PEN'] : ['', ''],
        array: gunObj.projectiles.length > 2 ? gunObj.projectiles[2].pen : [],
    }
}

const createLineEight = (gunObj) => {
    return {
        dataType: {
            name: 'AW',
            short: 'AW',
            data: gunObj.mag[0].weight,
        },
        aim: [gunObj.aim.ac[7], gunObj.aim.mod[7]],
        tag: gunObj.projectiles.length > 2 ? ['', 'DC'] : ['',''],
        array: gunObj.projectiles.length > 2 ? gunObj.projectiles[2].dc : [],
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
        array: gunObj.ma ? gunObj.ma : [],
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