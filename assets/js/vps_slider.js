
var cpu_arr = new Array('1 Core','2 Core','2 Core','4 Core','4 Core','6 Core','6 Core','8 Core');
var ram_arr = new Array('2 GB','4 GB','6 GB','8 GB','12 GB','16 GB','24 GB','32 GB');
var hdd_arr  = new Array('15 GB','30 GB','45 GB','60 GB','75 GB','90 GB','128 GB','256 GB');
var bandwidth_arr = new Array('Unlimited','Unlimited','Unlimited','Unlimited','Unlimited','Unlimited','Unlimited','Unlimited');
var ip_arr = new Array('Unlimited', 'Unlimited','Unlimited','Unlimited','Unlimited','Unlimited','Unlimited','Unlimited')
var price_arr = 	new Array('Rp. 150.000,-','Rp. 185.000,-','Rp. 250.000,-','Rp. 355.000,-','Rp. 460.000,-','Rp. 620.000,-','Rp. 1,000.000,-','Rp. 1.600.000,-');
var link_arr = 		new Array('1','2','3','4','5','6','7','8');
var b_url = 'https://client2.vpsindonesia.web.id/cart.php?a=add&configoption[21]=1&configoption[1]=1&pid=';

// This is what you want the default position to be
var def_pos = 2;

$(document).ready(function(){

    $( "#slider" ).slider({
        range: 'min',
        animate: true,
        min: 1,
        max: 8,
        paddingMin: 110,
        paddingMax: 90,
        change: function( event, ui ) {
            $('.slider-container #cpu_val span.value').html(cpu_arr[ui.value-1]);
            $('.slider-container #ram_val span.value').html(ram_arr[ui.value-1]);
            $('.slider-container #hdd_val span.value').html(hdd_arr[ui.value-1]);
            $('.slider-container #bandwidth_val span.value').html(bandwidth_arr[ui.value-1]);
            $('.slider-container #ip_val span.value').html(ip_arr[ui.value-1]);
            $('.slider-container #price_val').html(price_arr[ui.value-1]);
            $('.slider-container a.btn_vps_slider').attr('href', b_url + link_arr[ui.value-1]);
            $('.slider-container div.price_rangetxt div#icon-'+(ui.value-1)).addClass("current");
            $('.slider-container #sub-heading-'+(ui.value-1)).addClass("current1");
        }
    });
    $( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
    $('#slider').slider('value', def_pos);
    $('.icon').click(function() {
        ch_value= parseInt(this.id.slice(5)) + 1;
        $(".slider-container div.price_rangetxt div").removeClass("current");
        $(".slider-container .heading div").removeClass("current1");
        $('#slider').slider('value', ch_value);
    });
});