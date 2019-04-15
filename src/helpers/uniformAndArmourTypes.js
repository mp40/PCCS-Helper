const uniformWeights = {
    'Normal': 5,
    'Tropical': 4.5,
    'Winter': 7
}

const helmetStats = [
    {
        name:'6B27',
        pf:3,
        bpf:4,
        ac:'i',
        weight:2.8,
        tags:['Russian','Modern']
    },
    {
        name:'6B7-1M',
        pf:3,
        bpf:4,
        ac:'i',
        weight:2.5,
        tags:['Russian','Modern']
    },
    {
        name:'ACH',
        pf:7,
        bpf:4,
        ac:'i',
        weight:3,
        tags:['USA','Modern']
    },
    {
        name:'Helmet-68M',
        pf:3,
        bpf:4,
        ac:'i',
        weight:3.7,
        tags:['Russian','Cold War']
    },
    {
        name:'LWH',
        pf:8,
        bpf:4,
        ac:'i',
        weight:3,
        tags:['USA','Modern']
    },
    {
        name:'M1',
        pf:4,
        bpf:4,
        ac:'i',
        weight:2.5,
        tags:['USA','WW2','Cold War']
    },
    {
        name:'M15 Adrian',
        pf:3,
        bpf:3,
        ac:'i',
        weight:1.7,
        tags: ['French','WW2','WW1']
    },
    {
        name:'M35',
        pf:4,
        bpf:4,
        ac:'i',
        weight:2.5,
        tags:['Germany','WW2']
    },
    {
        name:'M43',
        pf:5,
        bpf:4,
        ac:'i',
        weight:2.3,
        tags:['Germany','WW2']
    },
    {
        name:'Mk 1',
        pf:4,
        bpf:4,
        ac:'i',
        weight:2.2,
        tags:['British','WW1','WW2']
    },
    {
        name:'Mk 4',
        pf:4,
        bpf:4,
        ac:'i',
        weight:2.4,
        tags:['British','WW2','Paratroops']
    },
    {
        name:'Mk 4 GS',
        pf:5,
        bpf:4,
        ac:'i',
        weight:2.5,
        tags:['British','Cold War']
    },
    {
        name:'MICH',
        pf:7,
        bpf:4,
        ac:'i',
        weight:3.3,
        tags:['USA','Modern']
    },
    {
        name:'PASGT',
        pf:6,
        bpf:4,
        ac:'i',
        weight:3.3,
        tags:['USA', 'Cold War', 'Modern']
    },
    {
        name:'SPECTRA',
        pf:6,
        bpf:4,
        ac:'i',
        weight:1.4,
        tags: ['French','Modern']
    },
    {
        name:'Ssh-60',
        pf:3,
        bpf:4,
        ac:'i',
        weight:2.8,
        tags: ['Russian','WW2']
    },
]

const bodyArmorStats = [
    {
        name:'6B11',
        pf:8,
        bpf:2,
        ac:'i',
        weight:11,
        tags: ['Russian', 'Modern']
    },
    {
        name:'6B12',
        pf:'16/8',// main plate/base pf
        bpf:3,
        ac:'i',
        weight:18,
        tags: ['Russian', 'Modern']
    },
    {
        name:'6B13',
        pf:16,
        bpf:4,
        ac:'i',
        weight:24,
        tags: ['Russian', 'Modern']
    },
    {
        name:'6B23 CS',
        pf:'8/13',
        bpf:3,
        ac:'i',
        weight:16,
        tags: ['Russian', 'Modern']
    },
    {
        name:'6B23 CC',
        pf:'8/16',
        bpf:,
        ac:'i',
        weight:,
        tags: ['Russian','Modern']
    },
    {
        name:'6B23 SC',
        pf:'13/16',
        bpf:5,
        ac:'i',
        weight:23,
        tags: ['Russian','Modern']
    },
    {
        name:'Omon (Class 5)',
        pf:30,
        bpf:6,
        ac:'i',
        weight:26.4,
        tags: ['Russian', 'Modern']
    },
    {
        name:'KAZAK-4',
        pf:'16/2',
        bpf:6,
        ac:'i',
        weight:18.3,
        tags: ['Russian', 'Modern']
    },
    {
        name:'KAZAK-5',
        pf:3,
        bpf:3,
        ac:'i',
        weight:2.75,
        tags: ['Russian', 'Modern']
    },
    {
        name:'KAZAK-6',
        pf:'30/3',
        bpf:6,
        ac:'i',
        weight:20.9,
        tags: ['Russian', 'Modern']
    },
    {
        name:'IOTV (SAPI)',
        pf:21,
        bpf:6,
        ac:'i',
        weight:16,
        tags: ['USA', 'Modern']
    },
    {
        name:'IOTV (E-SAPI)',
        pf:35,
        bpf:6,
        ac:'i',
        weight:19.3,
        tags: ['USA', 'Modern']
    },
    {
        name:'IOTV (E-SAPI Full)',
        pf:'35/20',
        bpf:6,
        ac:'i',
        weight:29.5,
        tags: ['USA', 'Modern']
    },
    {
        name:'M1951',
        pf:4,
        bpf:2,
        ac:'i',
        weight:7.8,
        tags: ['USA','Cold War']
    },
    {
        name:'M1955',
        pf:5,
        bpf:5,
        ac:'i',
        weight:10.3,
        tags: ['USA','Cold War']
    },
    {
        name:'M69',
        pf:5,
        bpf:2,
        ac:'i',
        weight:8.5,
        tags: ['USA','Cold War']
    },
    {
        name:'MTV',
        pf:21,
        bpf:6,
        ac:'i',
        weight:30,
        tags: ['USA','Modern']
    },
    {
        name:'IIIA Police Vest',
        pf:6,
        bpf:3,
        ac:'i',
        weight:6.1,
        tags: ['Police']
    },
    {
        name:'PASGT',
        pf:6,
        bpf:2,
        ac:'i',
        weight:9,
        tags: ['USA','Modern','Cold War']
    },
    {
        name:'SOV-2000',
        pf:21,
        bpf:3,
        ac:'i',
        weight:12,
        tags: ['']
    },
    {
        name:'II Police Vest',
        pf:3,
        bpf:3,
        ac:'i',
        weight:4,
        tags: ['Police']
    },
    {
        name:'SOV-3000',
        pf:35,
        bpf:3,
        ac:'i',
        weight:18,
        tags: ['']
    }
]


module.exports = {uniformWeights, helmetStats}
