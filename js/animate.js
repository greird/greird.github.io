$( document ).ready(function() {

	var inprogress = 1;
	var done = 1;
	var standby = 1;

	$("#tags-legend .label-warning").click(
		function() {
			if (inprogress == 1) {
				$(this).stop( true, true ).fadeTo( "fast", 0.50 );
    			$(".tags .label-warning").stop( true, true ).hide();
    			inprogress = 0;
    		}
    		else {
    			$(this).stop( true, true ).fadeTo( "fast", 1 );
    			$(".tags .label-warning").stop( true, true ).show();
    			inprogress = 1;
    		}
    		console.log("in progress visible = "+inprogress+"; standby visible = "+standby+"; done visible = "+done);
  		});
	$("#tags-legend .label-primary").click(
		function() {
			if (standby == 1) {
				$(this).stop( true, true ).fadeTo( "fast", 0.50 );
    			$(".tags .label-primary").stop( true, true ).hide();
    			standby = 0;
    		}
    		else {
    			$(this).stop( true, true ).fadeTo( "fast", 1 );
    			$(".tags .label-primary").stop( true, true ).show();
    			standby = 1;
    		}
    		console.log("in progress visible = "+inprogress+"; standby visible = "+standby+"; done visible = "+done);
  		});
	$("#tags-legend .label-success").click(
		function() {
			if (done == 1) {
				$(this).stop( true, true ).fadeTo( "fast", 0.50 );
    			$(".tags .label-success").stop( true, true ).hide();
    			done = 0;
    		}
    		else {
    			$(this).stop( true, true ).fadeTo( "fast", 1 );
    			$(".tags .label-success").stop( true, true ).show();
    			done = 1;
    		}
    		console.log("in progress visible = "+inprogress+"; standby visible = "+standby+"; done visible = "+done);
  		});
});