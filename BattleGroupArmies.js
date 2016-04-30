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
        'defense': 0,
        'resist': 0,
        'senses': 0,
        'resolve': 0
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
        'defense': 2,
        'resist': 2,
        'senses': 4,
        'resolve': 1
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
        'defense': 4,
        'resist': 2,
        'senses': 4,
        'resolve': 2
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
        'defense': 5,
        'resist': 2,
        'senses': 9,
        'resolve': 4
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
        'resist': 2,
        'defense': 4,
        'senses': 7,
        'resolve': 4
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
        'resist': 2,
        'defense': 4,
        'senses': 5,
        'resolve': 3
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
        'defense': 5,
        'resist': 2,
        'senses': 4,
        'resolve': 4
    },
    'automaton': {
        'name': 'Automata',
        'joinbattle': 8,
        'attacks': [
            { 'type': 'Sword', 'dice': 8, 'damage': 16, 'minimum': 2 },
            { 'type': 'Unarmed', 'dice': 10, 'damage': 14 }
        ],
        'magnitude': 13,
        'soak': 13,
        'command': 0,
        'routdiff': 100,
        'resist': 100,
        'defense': 4,
        'senses': 1,
        'resolve': 5
    },
    'zombie': {
        'name': 'Zombies',
        'joinbattle': 2,
        'attacks': [
            { 'type': 'Bite', 'dice': 5, 'damage': 16 }
        ],
        'magnitude': 10,
        'soak': 3,
        'command': 0,
        'routdiff': 100,
        'resist': 100,
        'defense': 2,
        'senses': 4,
        'resolve': 1
    },
    'warghost': {
        'name': 'War Ghosts',
        'joinbattle': 5,
        'attacks': [
            { 'type': 'Sword', 'dice': 7, 'damage': 12, 'minimum': 2 }
        ],
        'magnitude': 11,
        'soak': 8,
        'command': 0,
        'routdiff': 1,
        'defense': 4,
        'resist': 100,
        'senses': 5,
        'resolve': 4
    },
    'bonesider': {
        'name': 'Bonesiders',
        'joinbattle': 6,
        'attacks': [
            { 'type': 'Claw', 'dice': 6, 'damage': 11 }
        ],
        'magnitude': 7,
        'soak': 4,
        'command': 0,
        'routdiff': 1,
        'defense': 4,
        'resist': 100,
        'senses': 1,
        'resolve': 2
    },
    'greenmaw': {
        'name': 'Grenmaws',
        'joinbattle': 8,
        'attacks': [
            { 'type': 'Bite', 'dice': 8, 'damage': 19, 'minimum': 2 },
            { 'type': 'Tail Slam', 'dice': 10, 'damage': 17 }
        ],
        'magnitude': 15,
        'soak': 10,
        'command': 0,
        'routdiff': 1,
        'defense': 5,
        'resist': 9,
        'senses': 9,
        'resolve': 3
    },
    'bloodape': {
        'name': 'Blood Apes',
        'joinbattle': 6,
        'attacks': [
            { 'type': 'Claws', 'dice': 11, 'damage': 15 }
        ],
        'magnitude': 9,
        'soak': 7,
        'command': 0,
        'routdiff': 1,
        'defense': 4,
        'resist': 8,
        'senses': 6,
        'resolve': 3
    },
    'cataphract': {
        'name': 'Fair Folk Cataphracts',
        'joinbattle': 11,
        'attacks': [
            { 'type': 'Horizon Cutter', 'dice': 16, 'damage': 16, 'minimum': 2 },
            { 'type': 'Dream Curdling Bow', 'dice': 14, 'damage': 16 }
        ],
        'magnitude': 18,
        'soak': 14,
        'command': 0,
        'routdiff': 1,
        'defense': 7,
        'resist': 12,
        'senses': 11,
        'resolve': 4
    },
    'hobgoblin': {
        'name': 'Fair Folk Hobgoblins',
        'joinbattle': 6,
        'attacks': [
            { 'type': 'Bite', 'dice': 7, 'damage': 14 },
            { 'type': 'Talons', 'dice': 9, 'damage': 12 }
        ],
        'magnitude': 7,
        'soak': 5,
        'command': 0,
        'routdiff': 1,
        'defense': 5,
        'resist': 6,
        'senses': 4,
        'resolve': 2
    },
    'silverwight': {
        'name': 'Silverwights',
        'joinbattle': 5,
        'attacks': [
            { 'type': 'Bite', 'dice': 5, 'damage': 12 },
            { 'type': 'Claws', 'dice': 9, 'damage': 8 }
        ],
        'magnitude': 4,
        'soak': 3,
        'command': 0,
        'routdiff': 1,
        'defense': 4,
        'resist': 2,
        'senses': 5,
        'resolve': 1
    },
    'buckogre': {
        'name': 'Buck-Ogres',
        'joinbattle': 8,
        'attacks': [
            { 'type': 'Axe', 'dice': 7, 'damage': 18 },
            { 'type': 'Antlers', 'dice': 8, 'damage': 16 },
            { 'type': 'Shield', 'dice': 8, 'damage': 16 }
        ],
        'magnitude': 12,
        'soak': 13,
        'command': 0,
        'routdiff': 1,
        'defense': 5,
        'resist': 2,
        'senses': 8,
        'resolve': 4
    }
}

