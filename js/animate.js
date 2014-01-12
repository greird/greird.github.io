$( document ).ready(function() {

	var inprogress = 1;
	var done = 1;
	var standby = 1;

	$("#tags-legend .label-warning").click(
		function() {
			if (inprogress == 1) {
    			$(".tags .label-warning").stop( true, true ).hide();
    			inprogress = 0;
    		}
    		else {
    			$(".tags .label-warning").stop( true, true ).show();
    			inprogress = 1;
    		}
    		console.log("in progress visible = "+inprogress+"; standby visible = "+standby+"; done visible = "+done);
  		});
	$("#tags-legend .label-primary").click(
		function() {
			if (standby == 1) {
    			$(".tags .label-warning").stop( true, true ).show();
    			$(".tags .label-success").stop( true, true ).show();
    			standby = 0;
    		}
    		else {
    			$(".tags .label-primary").stop( true, true ).show();
    			$(".tags .label-warning").stop( true, true ).hide();
    			$(".tags .label-success").stop( true, true ).hide();
    			standby = 1;
    		}
    		console.log("in progress visible = "+inprogress+"; standby visible = "+standby+"; done visible = "+done);
  		});
	$("#tags-legend .label-success").click(
		function() {
			if (done == 1) {
    			$(".tags .label-primary").stop( true, true ).show();
    			$(".tags .label-warning").stop( true, true ).show();
    			done = 0;
    		}
    		else {
    			$(".tags .label-success").stop( true, true ).show();
    			$(".tags .label-primary").stop( true, true ).hide();
    			$(".tags .label-warning").stop( true, true ).hide();
    			done = 1;
    		}
    		console.log("in progress visible = "+inprogress+"; standby visible = "+standby+"; done visible = "+done);
  		});
});