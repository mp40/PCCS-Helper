export const rifles = [
    {
        name: "AK47",
        type: ["Battle/Assault Rifle", "Soviet", "Cold War", "7.62x39"],
        length: 34,
        weight: 11.3,
        rt: 8,
        rof: "*5",
        mag: [{type: "Mag", weight: 1.8, cap: 30}],
        kd: 7,
        sab: 5,
        aim: [-23,-12,-9,-7,-6,-4,-3,-2,-1],
        fmj: {
            pen: [11, 11, 9.8, 8.6, 7.5, 4.8, 3.1, 2.0],
            dc: [7, 7, 6, 6, 6, 5, 3, 2]
        },
        ma: [.4, .8, 2,3,4,8,12,17],
        ba: [58,50,40,33,28,18,13,9],
        tof: [0,1,1,2,3,6,10,14],
        offical: true
    },
    {
        name: "AKM 47",
        type: ["Battle/Assault Rifle", "Soviet", "Cold War", "7.62x39"],
        length: 35,
        weight: 8.7,
        rt: 8,
        rof: "*5",
        mag: [{type: "Mag", weight: 1.8, cap: 30}],
        kd: 7,
        sab: 5,
        aim: [-23,-12,-9,-7,-6,-4,-3,-2,-1],
        fmj: {
            pen: [11, 11, 9.8, 8.6, 7.5, 4.8, 3.1, 2.0],
            dc: [7, 7, 6, 6, 6, 5, 3, 2]
        },
        ma: [.4, .8, 2,3,4,8,12,17],
        ba: [58,50,40,33,28,18,13,9],
        tof: [0,1,1,2,3,6,10,14],
        offical: true
    },
    {
        name: "AK 74",
        type:["Battle/Assault Rifle", "Soviet", "Cold War", "5.45x39"],
        length: 37,
        weight: 8.7,
        rt:8,
        rof:"*5",
        mag: [{type: "Mag", weight: 1.1, cap: 30}],
        kd: 4,
        sab: 2,
        aim: [-23,-12,-9,-7,-6,-4,-3,-2,-1],
        fmj: {
            pen: [14, 13, 12, 10, 9.1, 5.8, 3.7, 2.4],
            dc: [6, 6, 5, 5, 4, 3, 3, 2]
        },
        ma: [.2,.3,.5,.9,1,3,4,5],
        ba: [60,52,43,36,31,21,16,12],
        tof: [0,0,1,2,2,5,8,12],
        offical: true
    },
    {
        name:'M16',
        type: ['Battle/Assault Rifle', 'USA', 'Cold War', '5.56 NATO', 'West Is Best'],									
        length: 39,											
        weight: 8.7,											
        rt: 8,									
        rof: '*7',											
        mag:[{type:'Mag', weight: 0.7, cap: 20}, {type:'Mag', weight: 1, cap: 30}],					
        kd: 4,											
        sab: 3,											
        aim: [-22, -12, -9, -7, -6, -5, -4, -3, -2, -1, 0],
        fmj: {
            pen:[17,16,15,13,11,7.1,4.5,2.9],				
            dc:[6, 6, 6, 6, 5, 4, 3, 2]	
        },										
        ma:	[.4, .8, 2,	3, 4, 8, 11, 15], 	 	 	
        ba:	[60, 51, 42, 35, 30, 20, 15, 11],		
        tof: [0, 0, 1, 1, 2, 4,	7, 10],
        offical: true
    },
    {
        name:'M16A1',
        type: ['Battle/Assault Rifle', 'USA', 'Cold War', '5.56 NATO', 'West Is Best'],									
        length: 39,											
        weight: 8,											
        rt: 8,									
        rof: '*7',											
        mag:[{type:'Mag', weight: 1, cap: 30}, {type:'Mag', weight: 0.7, cap: 20}],					
        kd: 4,											
        sab: 3,											
        aim: [-22, -12, -9, -7, -6, -5, -4, -3, -2, -1, 0],
        fmj: {
            pen:[17,16,15,13,11,7.1,4.5,2.9],				
            dc:[6, 6, 6, 6, 5, 4, 3, 2]	
        },										
        ma:	[.4, .8, 2,	3, 4, 8, 11, 15], 	 	 	
        ba:	[60, 51, 42, 35, 30, 20, 15, 11],		
        tof: [0, 0, 1, 1, 2, 4,	7, 10],
        offical: true
    },
]

export const smgs = [
    {
        name: 'MAT 49',	
        type: ['France', 'Cold War', '9mm Parabellum', 'SMG'],								
        length: '18/28',									
        weight:	9.2,									
        rt:	8,									
        rof: '*5',									
        mag:[{type:	'Mag', weight: 1.5, cap: 32}],				
        kd:	3,									
        sab: 3,									
        aim: [-23,-12,-9,-8,-6,-5,-4,-3,-2],
        fmj: {
            pen:[2.4, 2.2, 1.9, 1.5, 1.1, .5, .2, .1],		
            dc:	[3, 3, 3, 2, 2, 1, 1, 1]
        },									
        ma:[.2, .4, .8, 1, 2, 4, 6, 8], 	 
        ba:	[46, 37, 28, 21, 16, 7, 1, -2],		
        tof: [0, 1,	2, 4, 6, 13, 22, 32],
        offical: true
    },
]

export const pistols = [
    {
        name: 'M1911A1',	
        type: ['Automatic Pistol', 'USA', 'Cold War', 'WW2', '.45 ACP', 'West Is Best'],								
        length: 8,									
        weight: 3,									
        rt:	4,									
        rof: '*',									
        mag: [{type: 'Mag',	weight: 0.7, cap: 7}],					
        kd:	5,								
        sab: 5,									
        aim: [-18,-11,-10,-9,-8,-7]	,		
        fmj: {
            pen:[1.6, 1.5, 1.2, 1.0, 0.8, 0.3, 0.2, 0.1],	
            dc:[3, 3 ,2, 1, 1, 1, 1, 1]
        },								
        ba:[45, 36, 27, 20, 15, 5, 0, -4],
        tof:[1, 1, 3, 5, 8, 19, 31, 45],
        offical: true
    },
]

export const sniperRifles = [
    {
        name: 'Dragunov SVD',
        type: ["Sniper Rifle", "Soviet", "Cold War", "7.62x54"],											
        length: 48,												
        weight: 10.2,												
        rt:	8,												
        rof: '*',												
        mag: [{type: 'Mag',	weight:	0.68, cap: 10}],							
        kd:	12,												
        sab: 6,												
        aim: [-22, -12, -7, -5, -4, -2, 0, 1, 2, 3, 4],	
        fmj:{
            pen: [23, 22, 21, 19, 18, 14, 10, 7.8],				
            dc: [8, 8, 8, 8, 8, 7, 7, 6]
        },
        jhp:{
            pen: [22, 21, 20, 19, 17, 13, 9.9, 7.5],
            dc: [10, 9, 9, 9, 9, 9, 8, 8]
        },
        ap:{
            pen:[32, 31, 30, 27, 25, 19, 15, 11],
            dc:[8, 8, 8, 8, 7, 7, 6, 6]
        },
        ba: [69, 62, 53, 46, 41, 32, 26, 22],					
        tof: [0, 0, 1, 2, 2, 5, 8, 11],
        offical: true,
        optics: true
    }
]

export const mgs = [
    {
        name: 'M60',
        type: ['GPMG', 'USA', 'Cold War', '7.62 NATO', 'West Is Best'],											
        length: 44,											
        weight: 29.7,											
        rt:	12,									
        rof: '*5',											
        mag: [{type: 'Belt', weight: 6.5, cap: 100}],						
        kd:	10,											
        sab: 3,											
        aim: [-30, -20,	-14, -10, -8, -6, -5, -4, -3, -2, 0],
        fmj:{
            pen:[20, 19, 18, 16, 15, 11, 7.7, 5.5],			
            dc:[8, 8, 8, 7, 7, 7, 6, 5]
        },												
        ma:	[.3, .5, 1, 2, 3, 5, 8, 10],	 	 	 	
        ba:	[61, 53, 45, 37, 32, 23, 17, 13],				
        tof: [0, 0, 1, 2, 2, 5, 8, 11],
        offical: true,
        bipod: true
    },
]

export const shotguns = [
    {
        name: 'Remington M870',
        type: ['Shotgun', 'USA', 'Cold War', '12 gauge', 'West Is Best'],
        length: 42,
        weight: 8.8,
        rt: 30,
        rof: 2,
        mag: [{type: "Rnd", weight: 0.13, cap: 7}],
        kd: 25,
        sab: 12,
        aim: [-23, -12, -9, -7, -6, -4, -3, -2],
        slug: {
            pen:[7.7, 7.7, 7.6, 7.5, 7.5, 7.4, 7.3, 7.2, 6.9, 6.7, 5.7],
            dc:[10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 9],
        },
        shot:{
            tpye: ["(OO)", 12],
            pen: [5.4, 1.7, 1.7, 1.6, 1.6, 1.6, 1.4, 1.4,1.2,1.0,.6],
            dc: [8, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1],
            salm: [-14,-9,-4,-1,1,2,5,7,10,12,17],
            bphc: ["solid", '*11', '*10', "*9",'*7','*5','*2','*1', 62, 35, 8],
            pr: [.0, .0, .0, .1, .1, .1, .1, .2, .3, .4, .7],
        },
        ba: [67, 58, 48, 42, 38, 35, 29, 25, 19, 15, 5],
        tof: [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 4],
        offical: true
    }
]
