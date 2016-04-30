var armies = {
    'custom': {
        'name': 'Custom Army',
        'joinbattle': 0,
        'attack': 0,
        'attacktype': '',
        'damage': 0,
        'magnitude': 0,
        'soak': 0,
        'command': 0,
        'routdiff': 1,
        'defense': 0
    },
    'conscript': {
        'name': 'Conscripts',
        'joinbattle': 5,
        'attacks': [
            { 'type': 'Short sword', 'dice': 6, 'damage': 11, 'minimum': 2 },
            { 'type': 'Self bow', 'dice': 8, 'damage': 9 },
            { 'type': 'Grapple', 'dice': 4, 'control': 5 }
        ],
        'magnitude': 7,
        'soak': 6,
        'command': 0,
        'routdiff': 1,
        'defense': 2
    },
    'soldier': {
        'name': 'Battle-Ready Troops',
        'joinbattle': 6,
        'attacks': [
            { 'type': 'Chopping sword', 'dice': 7, 'damage': 12, 'minimum': 2 },
            { 'type': 'Long spear', 'dice': 5, 'damage': 14 },
            { 'type': 'Shield bash', 'dice': 6, 'damage': 12 }
        ],
        'magnitude': 7,
        'soak': 8,
        'command': 0,
        'routdiff': 1,
        'defense': 4
    },
    'elite': {
        'name': 'Elite Troops',
        'joinbattle': 10,
        'attacks': [
            { 'type': 'Slashing sword', 'dice': 11, 'damage': 12, 'minimum': 2 }
        ],
        'magnitude': 7,
        'soak': 10,
        'command': 0,
        'routdiff': 1,
        'defense': 5
    },
    'nomad': {
        'name': 'Nomad Horse-Archers',
        'joinbattle': 6,
        'attacks': [
            { 'type': 'Scimitar', 'dice': 9, 'damage': 12, 'minimum': 2 },
            { 'type': 'Long spear', 'dice': 8, 'damage': 14 },
            { 'type': 'Self bow', 'dice': 11, 'damage': 10 }
        ],
        'magnitude': 7,
        'soak': 8,
        'command': 0,
        'routdiff': 1,
        'defense': 4
    },
    'reaver': {
        'name': 'Lintha Reaver',
        'joinbattle': 6,
        'attacks': [
            { 'type': 'Axe', 'dice': 7, 'damage': 12, 'minimum': 2 },
            { 'type': 'Dagger', 'dice': 9, 'damage': 10 },
            { 'type': 'Javelin', 'dice': 8, 'damage': 12 },
            { 'type': 'Grapple', 'dice': 5, 'control': 6}
        ],
        'magnitude': 7,
        'soak': 8,
        'command': 0,
        'routdiff': 1,
        'defense': 4
    },
    'bride': {
        'name': 'Brides of Ahlat',
        'joinbattle': 8,
        'attacks': [
            { 'type': 'Short spear', 'dice': 10, 'damage': 11 },
            { 'type': 'Shield bash', 'dice': 5, 'damage': 13 },
            { 'type': 'Firewand', 'dice': 9, 'damage': 11, 'minimum': 2 },
            { 'type': 'Sling', 'dice': 8, 'damage': 11 }
        ],
        'magnitude': 7,
        'soak': 4,
        'command': 0,
        'routdiff': 1,
        'defense': 5
    },
    'automaton': {
        'name': 'Automata',
        'joinbattle': 8,
        'attack': 8,
        'attacktype': 'sword',
        'damage': 16,
        'magnitude': 13,
        'soak': 13,
        'command': 0,
        'routdiff': 100,
        'defense': 4
    },
    'zombie': {
        'name': 'Zombies',
        'joinbattle': 2,
        'attack': 5,
        'attacktype': 'claw',
        'damage': 16,
        'magnitude': 10,
        'soak': 3,
        'command': 0,
        'routdiff': 100,
        'defense': 2
    },
    'warghost': {
        'name': 'War Ghosts',
        'joinbattle': 5,
        'attack': 7,
        'attacktype': 'sword',
        'damage': 12,
        'magnitude': 11,
        'soak': 8,
        'command': 0,
        'routdiff': 1,
        'defense': 4
    },
    'bonesider': {
        'name': 'Bonesiders',
        'joinbattle': 6,
        'attack': 6,
        'attacktype': 'claw',
        'damage': 11,
        'magnitude': 7,
        'soak': 4,
        'command': 0,
        'routdiff': 1,
        'defense': 4
    },
    'bloodape': {
        'name': 'Blood Apes',
        'joinbattle': 6,
        'attack': 11,
        'attacktype': 'claw',
        'damage': 15,
        'magnitude': 9,
        'soak': 7,
        'command': 0,
        'routdiff': 1,
        'defense': 4
    },
    'cataphract': {
        'name': 'Fair Folk Cataphracts',
        'joinbattle': 11,
        'attack': 16,
        'attacktype': 'sword',
        'damage': 16,
        'magnitude': 18,
        'soak': 14,
        'command': 0,
        'routdiff': 1,
        'defense': 7
    },
    'hobgoblin': {
        'name': 'Fair Folk Hobgoblins',
        'joinbattle': 6,
        'attack': 9,
        'attacktype': 'talons',
        'damage': 12,
        'magnitude': 7,
        'soak': 5,
        'command': 0,
        'routdiff': 1,
        'defense': 5
    },
    'silverwight': {
        'name': 'Silverwights',
        'joinbattle': 5,
        'attack': 9,
        'attacktype': 'claws',
        'damage': 8,
        'magnitude': 4,
        'soak': 3,
        'command': 0,
        'routdiff': 1,
        'defense': 4
    },
    'buckogre': {
        'name': 'Buck-Ogres',
        'joinbattle': 8,
        'attack': 8,
        'attacktype': 'antlers',
        'damage': 16,
        'magnitude': 12,
        'soak': 13,
        'command': 0,
        'routdiff': 1,
        'defense': 5
    }
}

