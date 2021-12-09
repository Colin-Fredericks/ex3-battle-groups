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
        'resolve': 0,
        'iscustom': true
    },
    'conscript': {
        'name': 'Conscripts',
        'joinbattle': 5,
        'attacks': [
            { 'type': 'Short sword', 'dice': 6, 'damage': 11, 'minimum': 2 },
            { 'type': 'Self bow', 'dice': 8, 'damage': 9 }
        ],
        'magnitude': 7,
        'soak': 6,
        'command': 0,
        'routdiff': 1,
        'defense': 2,
        'resist': 2,
        'senses': 4,
        'resolve': 1,
        'iscustom': false
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
        'resolve': 2,
        'iscustom': false
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
        'resolve': 4,
        'iscustom': false
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
        'resolve': 4,
        'iscustom': false
    },
    'reaver': {
        'name': 'Lintha Reaver',
        'joinbattle': 6,
        'attacks': [
            { 'type': 'Axe', 'dice': 7, 'damage': 12, 'minimum': 2 },
            { 'type': 'Dagger', 'dice': 9, 'damage': 10 },
            { 'type': 'Javelin', 'dice': 8, 'damage': 12 }
        ],
        'magnitude': 7,
        'soak': 8,
        'command': 0,
        'routdiff': 1,
        'resist': 2,
        'defense': 4,
        'senses': 5,
        'resolve': 3,
        'iscustom': false
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
        'resolve': 4,
        'iscustom': false
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
        'resolve': 5,
        'iscustom': false
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
        'resolve': 1,
        'iscustom': false
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
        'resolve': 4,
        'iscustom': false
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
        'resolve': 2,
        'iscustom': false
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
        'resolve': 3,
        'iscustom': false
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
        'resolve': 3,
        'iscustom': false
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
        'resolve': 4,
        'iscustom': false
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
        'resolve': 2,
        'iscustom': false
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
        'resolve': 1,
        'iscustom': false
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
        'resolve': 4,
        'iscustom': false
    },
    'crystalmoth': {
        'name': 'Crystalmoths',
        'joinbattle': 5,
        'attacks': [
            { 'type': 'Bite', 'dice': 9, 'damage': 9 },
            { 'type': 'Slice', 'dice': 10, 'damage': 13 }
        ],
        'magnitude': 8,
        'soak': 2,
        'command': 0,
        'routdiff': 1,
        'defense': 4,
        'resist': 0,
        'senses': 7,
        'resolve': 1,
        'iscustom': false
    },
    'drowned': {
        'name': 'Drowned',
        'joinbattle': 4,
        'attacks': [
            { 'type': 'Grapple', 'dice': 6, 'damage': 9 },
            { 'type': 'Knife', 'dice': 8, 'damage': 10 }
        ],
        'magnitude': 11,
        'soak': 3,
        'command': 0,
        'routdiff': 1,
        'defense': 3,
        'resist': 100,
        'senses': 0,
        'resolve': 3,
        'iscustom': false
    },
    'haunt': {
        'name': 'Haunts',
        'joinbattle': 4,
        'attacks': [
            { 'type': 'Short sword', 'dice': 6, 'damage': 12 },
            { 'type': 'Shield bash', 'dice': 5, 'damage': 12 }
        ],
        'magnitude': 7,
        'soak': 8,
        'command': 0,
        'routdiff': 100,
        'defense': 3,
        'resist': 100,
        'senses': 4,
        'resolve': 5,
        'iscustom': false
    },
    'keregost': {
        'name': "Keregost's Hundred Handed Army",
        'joinbattle': 11,
        'attacks': [
            { 'type': 'Grand Daiklaive', 'dice': 9, 'damage': 19 },
            { 'type': 'Longbow', 'dice': 8, 'damage': 14 },
            { 'type': 'Grapple', 'dice': 9, 'damage': 12 },
            { 'type': 'Hook Sword', 'dice': 9, 'damage': 14 }
        ],
        'magnitude': 29,
        'soak': 16,
        'command': 8,
        'routdiff': 100,
        'defense': 4,
        'resist': 100,
        'senses': 0,
        'resolve': 5,
        'iscustom': false
    },
    'walkuren': {
        'name': 'Walkuren',
        'joinbattle': 9,
        'attacks': [
            { 'type': 'Longspear', 'dice': 9, 'damage': 14 }
        ],
        'magnitude': 9,
        'soak': 9,
        'command': 0,
        'routdiff': 1,
        'defense': 3,
        'resist': 100,
        'senses': 8,
        'resolve': 4,
        'iscustom': false
    },
    'griefbees': {
        'name': 'Griefbees',
        'joinbattle': 5,
        'attacks': [
            { 'type': 'Sting', 'dice': 4, 'damage': 4 }
        ],
        'magnitude': 7,
        'soak': 4,
        'command': 0,
        'routdiff': 1,
        'defense': 4,
        'resist': 100,
        'senses': 6,
        'resolve': 4,
        'iscustom': false
    },
    'anhule': {
        'name': 'Anhule',
        'joinbattle': 7,
        'attacks': [
            { 'type': 'Bite', 'dice': 10, 'damage': 13 },
            { 'type': 'Web Grapple', 'dice': 10, 'damage': 10 }
        ],
        'magnitude': 15,
        'soak': 8,
        'command': 0,
        'routdiff': 1,
        'defense': 4,
        'resist': 0,
        'senses': 10,
        'resolve': 3,
        'iscustom': false
    },
    'metody': {
        'name': 'Metody',
        'joinbattle': 5,
        'attacks': [
            { 'type': 'Strike', 'dice': 7, 'damage': 10 },
            { 'type': 'Grapple', 'dice': 7, 'damage': 6 }
        ],
        'magnitude': 10,
        'soak': 8,
        'command': 0,
        'routdiff': 1,
        'defense': 4,
        'resist': 8,
        'senses': 5,
        'resolve': 4,
        'iscustom': false
    },
    'tomescu': {
        'name': 'Tomescu',
        'joinbattle': 7,
        'attacks': [
            { 'type': 'Sword', 'dice': 10, 'damage': 10 },
            { 'type': 'Axe', 'dice': 10, 'damage': 12 },
            { 'type': 'Sledge', 'dice': 10, 'damage': 14 },
            { 'type': 'Bow', 'dice': 10, 'damage': 10 }
        ],
        'magnitude': 9,
        'soak': 8,
        'command': 0,
        'routdiff': 1,
        'defense': 5,
        'resist': 0,
        'senses': 7,
        'resolve': 3,
        'iscustom': false
    },
    '': {
        'name': '',
        'joinbattle': ,
        'attacks': [
            { 'type': 'Axe', 'dice': 7, 'damage': 18 },
            { 'type': 'Antlers', 'dice': 8, 'damage': 16 },
            { 'type': 'Shield', 'dice': 8, 'damage': 16 }
        ],
        'magnitude': ,
        'soak': ,
        'command': 0,
        'routdiff': ,
        'defense': ,
        'resist': ,
        'senses': ,
        'resolve': ,
        'iscustom': false
    },
    'grelidaka': {
        'name': 'Grelidaka',
        'joinbattle': 8,
        'attacks': [
            { 'type': 'Claw', 'dice': 7, 'damage': 11 },
            { 'type': 'Peck', 'dice': 7, 'damage': 7 }
        ],
        'magnitude': 5,
        'soak': 2,
        'command': 0,
        'routdiff': 1,
        'defense': 5,
        'resist': 6,
        'senses': 6,
        'resolve': 4,
        'iscustom': false
    },
    'lavamoth': {
        'name': 'Lava Moths',
        'joinbattle': 6,
        'attacks': [
            { 'type': 'Wing buffet', 'dice': 9, 'damage': 9 }
        ],
        'magnitude': 9,
        'soak': 6,
        'command': 0,
        'routdiff': 1,
        'defense': 5,
        'resist': 0,
        'senses': 5,
        'resolve': 2,
        'iscustom': false
    },
    'parasiteshadow': {
        'name': 'Parasitic shadows',
        'joinbattle': 6,
        'attacks': [
            { 'type': 'Strangle', 'dice': 5, 'damage': 2 }
        ],
        'magnitude': 4,
        'soak': 1,
        'command': 0,
        'routdiff': 1,
        'defense': 5,
        'resist': 0,
        'senses': 6,
        'resolve': 1,
        'iscustom': false
    },
    '': {
        'name': '',
        'joinbattle': ,
        'attacks': [
            { 'type': 'Axe', 'dice': 7, 'damage': 18 },
            { 'type': 'Antlers', 'dice': 8, 'damage': 16 },
            { 'type': 'Shield', 'dice': 8, 'damage': 16 }
        ],
        'magnitude': ,
        'soak': ,
        'command': 0,
        'routdiff': ,
        'defense': ,
        'resist': ,
        'senses': ,
        'resolve': ,
        'iscustom': false
    },
    '': {
        'name': '',
        'joinbattle': ,
        'attacks': [
            { 'type': 'Axe', 'dice': 7, 'damage': 18 },
            { 'type': 'Antlers', 'dice': 8, 'damage': 16 },
            { 'type': 'Shield', 'dice': 8, 'damage': 16 }
        ],
        'magnitude': ,
        'soak': ,
        'command': 0,
        'routdiff': ,
        'defense': ,
        'resist': ,
        'senses': ,
        'resolve': ,
        'iscustom': false
    },
    '': {
        'name': '',
        'joinbattle': ,
        'attacks': [
            { 'type': 'Axe', 'dice': 7, 'damage': 18 },
            { 'type': 'Antlers', 'dice': 8, 'damage': 16 },
            { 'type': 'Shield', 'dice': 8, 'damage': 16 }
        ],
        'magnitude': ,
        'soak': ,
        'command': 0,
        'routdiff': ,
        'defense': ,
        'resist': ,
        'senses': ,
        'resolve': ,
        'iscustom': false
    }

};
