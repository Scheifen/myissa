// function takes a url and inserts the contents above the body container
function(ajaxURL) {
    $.get(ajaxURL, function(data, status) {
        if (status == 'success') {
        	$("#uBodyContainer").prepend(data)
        }
        else{
        	console.log(status ":Error with Ajax request to " ajaxURL)
        }
    })
}