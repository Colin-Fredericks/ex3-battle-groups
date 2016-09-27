$(document).ready(function(){
    
    var armyType = 'soldier';
    var armyMenu = $('#armytype');
    var hasFormHandlers = false;
    var isPrintable = false;
    var canSeeCustom = false;
    
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
        'might': 0,
        'iscustom': false
    };
    
    // To have a set that's not adjusted for Size/Drill/Might,
    // so we can store custom armies properly.
    var baseStats = $.extend(true, {}, stats);
    
    function getStats(){
        // stats[key] = armies[armyType][key] won't work for nested reference types
        // this is a quick and easy workaround. there are better solutions.
        // consider keeping the size/drill/might/troop selection separate from the armies data.
        // then, rebuild the presentation layer every time something changes. -KR
        var size = stats.size || 0;
        var drill = stats.drill || 0;
        var might = stats.might || 0;
        stats = JSON.parse(JSON.stringify(armies[armyType]));
        baseStats = $.extend(true, {}, stats);
        stats.size = size;
        stats.drill = drill;
        stats.might = might;
        return;
    }
    

    function setSize(event, ui){
        stats.size = ui.value;
        updateDisplay();
        return;
    }
    
    function getSizeText(){
        if(stats.size == 1){ return(" (a dozen)"); }
        if(stats.size == 2){ return(" (dozens)"); }
        if(stats.size == 3){ return(" (a hundred)"); }
        if(stats.size == 4){ return(" (hundreds)"); }
        if(stats.size == 5){ return(" (a thousand)"); }
    }
    
    function increaseAttackDamage(atk, dmg) {
        atk = atk || 0;
        dmg = dmg || 0;
        if(stats.attack) { stats.attack += atk; }
        if(stats.damage) { stats.damage += dmg; }
        if(stats.attacks) {
            for(var i = 0, l = stats.attacks.length; i < l; i++) {
               stats.attacks[i].dice += atk;
               stats.attacks[i].damage += dmg;
            }
        }
    }
    
    function adjustSize(){
        increaseAttackDamage(stats.size, stats.size);
        stats.magnitude += stats.size || 0;
        stats.soak += stats.size || 0;
        return;
    }
    
    
    function setDrill(event, ui){
        stats.drill = ui.value;
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
        updateDisplay();
        return;
    }
    
    function adjustMight(){
        
        if(stats.might == 0){
            // no change
        }else if(stats.might == 1){
            stats.defense += 1;
        }else if(stats.might == 2){
            stats.defense += 1;
        }else if(stats.might == 3){
            stats.defense += 2;
        }
        
        increaseAttackDamage(stats.might, stats.might);

        return;
    }
    
    function getCustomStats(){

        if(!hasFormHandlers){

            // add form handlers to update the custom stats on form changes.
            $('.customtext').on('change keyup paste', function(){
                var temp = $(this).attr('name');
                var tempval = $(this).val();
                var numeric = $(this).hasClass('numeric');
                if($.isNumeric(tempval) && numeric){
                    armies[armyType][temp] = Number(tempval);
                }else{
                    armies[armyType][temp] = tempval;
                }
                updateDisplay();
            });
            
            $('.customcheck').change(function(){
                
                if(armies[armyType]['routdiff'] != 100){
                    armies[armyType]['routdiff'] = 100;
                }else{
                    armies[armyType]['routdiff'] = 1;
                }
                updateDisplay();
            });
            
            hasFormHandlers = true;
            
        }
        // If we already have form handlers, don't add them again.
        // Just put the numbers back into the form in the right place.
        for(var key in armies[armyType]){
            $( 'input[name=' + key + ']' ).val( armies[armyType][key] );
        }
        if(armies[armyType]['routdiff'] < 50){
            document.getElementById('pm_box').checked = false;
        }else{
            document.getElementById('pm_box').checked = true;
        }

    }

    function updateDisplay(){
                
        getStats();
        
        adjustMight();
        adjustDrill();
        adjustSize();

        $('#armyname').text(stats.name);
        $('#joinbattle').text(stats.joinbattle);
        if(typeof stats.attack !== 'undefined') {
            $('#singleattack').show();
            $('#attack').text(stats.attack);
            $('#attacktype').text(stats.attacktype);
            $('#damage').text(stats.damage);
        } else {
            $('#singleattack').hide();
        }
        if(stats.attacks) {
            var extraAttacks = '';
            for(var i = 0, l = stats.attacks.length; i < l; i++) {
                var line = stats.attacks[i];
                extraAttacks += '<tr><th>Attack (' + line.type + ')</th><td>' + line.dice;
                if(line.damage) {
                    extraAttacks += ' (Dmg ' + line.damage;
                    if(line.minimum) {
                        extraAttacks += ', min ' + line.minimum;
                    }
                    extraAttacks += ')';
                }
                if (line.control) {
                    extraAttacks += ' (' + line.control + ' dice to control)';
                }
                extraAttacks += '</td></tr>'
            }
            $('#multipleattacks').html(extraAttacks).show();
        } else {
            $('#multipleattacks').hide();
        }
        $('#magnitude').text(stats.magnitude);
        $('#soak').text(stats.soak);
        $('#command').text(stats.command);
        $('#defense').text(stats.defense);
        $('.showsize').text(stats.size + getSizeText());
        $('.showdrill').text(stats.drilltext);
        $('.showmight').text(stats.might);
        $('#senses').text(stats.senses);
        $('#resolve').text(stats.resolve);
        $('#resist').text(stats.resist);

        if(stats.routdiff > 50){
            $('#routdiff').text('perfect morale');
        }else{
            $('#routdiff').text(stats.routdiff);
        }

        if(stats.resist > 50){
            $('#resist').text('immune');
        }else{
            $('#resist').text(stats.resist);
        }

    }
    
    updateDisplay();
    
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
    
    // Add any custom armies stored locally to the drop-down menu and to the armies list.
    if(typeof Storage !== 'undefined') {
        if(typeof localStorage.BattleGroupSaves !== 'undefined' && localStorage.BattleGroupSaves !== ''){
            var savedArmies = JSON.parse(localStorage.BattleGroupSaves);
            for(var key in savedArmies){
                var tempArmy = JSON.parse(savedArmies[key])
                armyMenu.prepend('<option value="' + key +'">' + tempArmy.name + '</option>');
                armies[key] = $.extend(true, {}, tempArmy);
            }
        }
    }
    
    // Make the select menu all JQuery UI fancy.
    armyMenu.selectmenu({
        select: function(event, ui) {
            armyType = this.value;
            if(armies[armyType].iscustom){
                canSeeCustom = true;
                $('.custombox').show();
                getCustomStats();
            }else{
                canSeeCustom = false;
                $('.custombox').hide();
            }        
            updateDisplay();
        }
    });
    
    // Set up the menu so it's on the same option every time the page opens.
    armyMenu.val('soldier');
    armyMenu.selectmenu('refresh');

    // Handle the switch between regular look and printer-friendly
    $('#get-printable').button().on('click tap', function(){
        isPrintable = ! isPrintable;
        if(isPrintable){
            $('.dontprint').hide();
            $('.printonly').show();
            $('#armystats').addClass('clear');
            $('.bigbox').addClass('clear');
            if(canSeeCustom){ $('.custombox').hide(); }
            $('#get-printable .ui-button-text').text('Back to Regular Version');
        }else{
            $('.dontprint').show();
            $('.printonly').hide();
            $('#armystats').removeClass('clear');
            $('.bigbox').removeClass('clear');
            if(canSeeCustom){ $('.custombox').show(); }
            $('#get-printable .ui-button-text').text('Get Printable Version');
        }
    });
    
    // Save the current custom army in HTML5 local storage
    $('#save-local').on('click tap', function(){
    
        var savedArmies = {};
        
        if(typeof Storage === 'undefined') {
            alert('Your browser does not support this option');
            return;
        }
        if(typeof localStorage.BattleGroupSaves === 'undefined'){
            localStorage.BattleGroupSaves = '';
        }
        if(localStorage.BattleGroupSaves !== ''){
            savedArmies = JSON.parse(localStorage.BattleGroupSaves);
            for(var key in savedArmies){
                savedArmies[key] = JSON.parse(savedArmies[key]);
            }
        }
        
        var armyNumber = Object.keys(savedArmies).length;
        var armyKey = 'army' + armyNumber.toString();
        
        // If this is a duplicate, save over the old one.
        for(var key in savedArmies){
            if(savedArmies[key].name == stats.name){
                savedArmies[key] = JSON.stringify(baseStats);
                armies[key] = $.extend(true, {}, baseStats);
                localStorage.BattleGroupSaves = JSON.stringify(savedArmies);
                armyMenu.select(armyKey);
                return;
            }
        }
        
        // Otherwise, create a new entry:
        // Clone the current army stats to local storage and to the stats list.
        savedArmies[armyKey] = JSON.stringify(baseStats);
        armies[armyKey] = $.extend(true, {}, baseStats);

        // Add it to the top of the drop-down menu
        $('<option/>').attr('value', armyKey).text(armies[armyKey].name).appendTo(armyMenu);
    
        // Select new troop type.
        armyMenu.select(armyKey);
        
        // Place things back in local storage
        localStorage.BattleGroupSaves = JSON.stringify(savedArmies);

    });
    
    // Remove the army from the saved list and the dropdown menu
    $('#delete-local').on('click tap', function(){
        $('option[value='+armyType+']').remove();
        var savedArmies = JSON.parse(localStorage.BattleGroupSaves);
        delete savedArmies[armyType];
        localStorage.BattleGroupSaves = JSON.stringify(savedArmies);
    });    
    
    // Clear all of the stored armies.
    $('#clear-local').on('click tap', function(){
        localStorage.BattleGroupSaves = '';
    });
});