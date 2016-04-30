$(document).ready(function(){
    
    var armyType = 'soldier';
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
        'might': 0
    };
    
    function getStats(){
        for(key in armies[armyType]){
            stats[key] = armies[armyType][key];
        }

        return;
    }
    

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
    
    function getCustomStats(){

        if(!hasFormHandlers){

            // add form handlers to update the custom stats on form changes.
            $('.customtext').on('change keyup paste', function(){
                var temp = $(this).attr('name');
                var tempval = $(this).val();
                var numeric = $(this).hasClass('numeric');
                if($.isNumeric(tempval) && numeric){
                    armies['custom'][temp] = Number(tempval);
                }else{
                    armies['custom'][temp] = tempval;
                }
                updateDisplay();
            });
            
            $('.customcheck').change(function(){
                
                if(armies['custom']['routdiff'] != 100){
                    armies['custom']['routdiff'] = 100;
                }else{
                    armies['custom']['routdiff'] = 1;
                }
                console.log(armies['custom']['routdiff']);
                updateDisplay();
            });
            
            hasFormHandlers = true;
            
        }
        // If we already have form handlers, don't add them again.
        // Just put the numbers back into the form in the right place.
        for(key in armies['custom']){
            $( 'input[name=' + key + ']' ).val( armies['custom'][key] );
        }
        if(armies['custom']['routdiff'] < 50){
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
        $('#senses').text(stats.senses);
        $('#resolve').text(stats.resolve);

        if(stats.routdiff > 50){
            $('#routdiff').text('perfect morale');
        }else{
            $('#routdiff').text(stats.routdiff);
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
    
    // Make the select menu all JQuery UI fancy.
    $('#armytype').selectmenu({
        select: function(event, ui) {
            armyType = this.value;
            if(armyType === 'custom'){
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
    $('#armytype').val('soldier');
    $('#armytype').selectmenu('refresh');

    // Handle the switch between regular look and printer-friendly
    $('#get-printable').button().on('click tap', function(){
        isPrintable = ! isPrintable;
        if(isPrintable){
            $('.dontprint').hide();
            $('#armystats').addClass('clear');
            $('.bigbox').addClass('clear');
            if(canSeeCustom){ $('.custombox').hide(); }
            $('#get-printable .ui-button-text').text('Back to Regular Version');
        }else{
            $('.dontprint').show();
            $('#armystats').removeClass('clear');
            $('.bigbox').removeClass('clear');
            if(canSeeCustom){ $('.custombox').show(); }
            $('#get-printable .ui-button-text').text('Get Printable Version');
        }
    });
    
});