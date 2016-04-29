$(document).ready(function(){
    
    var armyType = 'soldier';
    
    var stats = {
        // We should never see these values.
        'name': 'I have no name',
        'joinbattle': -1,
        'attack': -1,
        'damage': -1,
        'magnitude': -1,
        'soak': -1,
        'command': -1,
        'routdiff': -1,
        'defense': -1,

        // These are default values, ok to see.
        'type': 'soldier',
        'size': 1,
        'drill': 2,
        'drilltext': 'Average',
        'might': 0
    };
    
    var armies = {
        'conscript': {
            'name': 'Conscripts',
            'joinbattle': 5,
            'attack': 7,
            'attacktype': 'sword',
            'damage': 12,
            'magnitude': 6,
            'soak': 6,
            'command': 0,
            'routdiff': 1,
            'defense': 2
        },
        'soldier': {
            'name': 'Battle-Ready Troops',
            'joinbattle': 6,
            'attack': 5,
            'attacktype': 'sword',
            'damage': 14,
            'magnitude': 6,
            'soak': 8,
            'command': 0,
            'routdiff': 1,
            'defense': 4
        },
        'elite': {
            'name': 'Elite Troops',
            'joinbattle': 10,
            'attack': 11,
            'attacktype': 'sword',
            'damage': 12,
            'magnitude': 6,
            'soak': 10,
            'command': 0,
            'routdiff': 1,
            'defense': 5
        },
        'nomad': {
            'name': 'Nomad Horse-Archers',
            'joinbattle': 6,
            'attack': 11,
            'attacktype': 'bow',
            'damage': 10,
            'magnitude': 6,
            'soak': 8,
            'command': 0,
            'routdiff': 1,
            'defense': 4
        },
        'reaver': {
            'name': 'Lintha Reaver',
            'joinbattle': 6,
            'attack': 7,
            'attacktype': 'axe',
            'damage': 12,
            'magnitude': 6,
            'soak': 8,
            'command': 0,
            'routdiff': 1,
            'defense': 4
        },
        'bride': {
            'name': 'Brides of Ahlat',
            'joinbattle': 8,
            'attack': 10,
            'attacktype': 'spear',
            'damage': 11,
            'magnitude': 6,
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
            'magnitude': 12,
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
            'magnitude': 9,
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
            'magnitude': 10,
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
            'magnitude': 6,
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
            'magnitude': 8,
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
            'magnitude': 17,
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
            'magnitude': 6,
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
            'magnitude': 3,
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
            'magnitude': 11,
            'soak': 13,
            'command': 0,
            'routdiff': 1,
            'defense': 5
        }
    }
    
    function getStats(){
        for(key in armies[armyType]){
            stats[key] = armies[armyType][key];
        }

        return;
    }
    
    function updateDisplay(){
        
        getStats();
        
        adjustMight();
        adjustDrill();
        adjustSize();

        $('#armyname').text(stats.name);
        $('#joinbattle').text(stats.joinbattle);
        $('#attack').text(stats.attack);
        $('#attacktype').text(stats.attacktype);
        $('#damage').text(stats.damage);
        $('#magnitude').text(stats.magnitude);
        $('#soak').text(stats.soak);
        $('#command').text(stats.command);
        $('#defense').text(stats.defense);
        $('#showsize').text(stats.size);
        $('#showdrill').text(stats.drilltext);
        $('#showmight').text(stats.might);

        if(stats.routdiff > 50){
            $('#routdiff').text('perfect morale');
        }else{
            $('#routdiff').text(stats.routdiff);
        }

    }
    
    updateDisplay();

    function setSize(event, ui){
        stats.size = ui.value;
        console.log('Size: ' + stats.size);
        updateDisplay();
        return;
    }
    
    function adjustSize(){
        stats.attack += stats.size;
        stats.damage += stats.size;
        stats.magnitude += stats.size;
        stats.soak += stats.size;
        return;
    }
    
    
    function setDrill(event, ui){
        stats.drill = ui.value;
        console.log('Drill: ' + stats.drill);
        updateDisplay();
        return;
    }
    
    function adjustDrill(){
        if(stats.drill == 1){
            stats.command -= 2;
            stats.routdiff += 1;
            stats.drilltext = 'Poor';
        }else if(stats.drill == 2){
            stats.defense += 1;
            stats.drilltext = 'Average';
        }else if(stats.drill == 3){
            stats.command += 2;
            stats.defense += 2;
            stats.drilltext = 'Elite';
        }

    }
    
    
    
    function setMight(event, ui){
        stats.might = ui.value;
        console.log('Might: ' + stats.might);
        updateDisplay();
        return;
    }
    
    function adjustMight(){

        if(stats.might == 0){
            // no change
        }else if(stats.might == 1){
            stats.attack += 1;
            stats.damage += 1;
            stats.defense += 1;
        }else if(stats.might == 2){
            stats.attack += 2;
            stats.damage += 2;
            stats.defense += 1;
        }else if(stats.might == 3){
            stats.attack += 3;
            stats.damage += 3;
            stats.defense += 2;
        }

        return;
    }
    
    $("#sizeslider").slider({
        orientation: "horizontal",
        min: 1,
        max: 5,
        value: 1,
        slide: setSize,
        change: setSize
    });

    $("#drillslider").slider({
        orientation: "horizontal",
        min: 1,
        max: 3,
        value: 2,
        slide: setDrill,
        change: setDrill
    });

    $("#mightslider").slider({
        orientation: "horizontal",
        min: 0,
        max: 3,
        value: 0,
        slide: setMight,
        change: setMight
    });
    
    $('#armytype').selectmenu({
        select: function(event, ui) {
            armyType = this.value;
            updateDisplay();
        }
    });
    
    $('#armytype').val('soldier');
    $('#armytype').selectmenu('refresh');
    
});