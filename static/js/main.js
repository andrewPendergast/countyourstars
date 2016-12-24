var demographics = {
	getCaucasianMale : function () {
		return $('#quantityCaucasianMale').html();
	},
	getCaucasianFemale : function () {
		return $('#quantityCaucasianFemale').html();
	},
	getHispanicMale : function() {
		return $('#quantityHispanicMale').html();
	},
	getHispanicFemale : function () {
		return $('#quantityHispanicFemale').html();
	},
	getBlackMale : function () {
		return $('#quantityBlackMale').html();
	},
	getBlackFemale : function (){
		return $('#quantityBlackFemale').html();
	},
	getOtherMale : function () {
		return $('#quantityOtherMale').html();
	},
	getOtherFemale : function () {
		return $('#quantityOtherFemale').html();
	},
	getOrganizationName : function () {
		return $('#organizationName').val();
	},
	getEventName : function (){
		return $('#eventName').val();
	},
	getTotal : function() {
		return parseInt($('#quantityCaucasianMale').html())+
		parseInt($('#quantityCaucasianFemale').html())+
		parseInt($('#quantityHispanicMale').html())+
		parseInt($('#quantityHispanicFemale').html())+
		parseInt($('#quantityBlackMale').html())+
		parseInt($('#quantityBlackFemale').html())+
		parseInt($('#quantityOtherMale').html())+
		parseInt($('#quantityOtherFemale').html());
	}
};

$(document).ready(function() {
    $('#fullpage').fullpage({
		sectionsColor:['#3498DB', '#16405B', '#7ABAE4', '#314B5B', '#2875A8', '#3498DB'],
		afterLoad: function(anchorLink, index){
			if (index == 1) {
				setBreakdown();
			}
			if (index == 2) {
				setBreakdown();
			}
			if (index == 3) {
				setBreakdown();
			}
			if (index == 4) {
				setBreakdown();
			}
			if (index == 5) {
				setBreakdown();
			}
			if (index == 6) {
				setBreakdown();
			}
		},
		navigation: true
	});
	
});
function incrementClicked(clicked_id) {
	switch (clicked_id) {
		case 'incrementCaucasianMale':
			var quantityCaucasianMale = $('#quantityCaucasianMale').html();
			quantityCaucasianMale++;
			$('#quantityCaucasianMale').html(quantityCaucasianMale);
			break;
		case 'incrementCaucasianFemale':
			var quantityCaucasianFemale = $('#quantityCaucasianFemale').html();
			quantityCaucasianFemale++;
			$('#quantityCaucasianFemale').html(quantityCaucasianFemale);
			break;		
		case 'incrementHispanicMale': 
			var quantityHispanicMale = $('#quantityHispanicMale').html();
			quantityHispanicMale++;
			$('#quantityHispanicMale').html(quantityHispanicMale);
			break;
		case 'incrementHispanicFemale': 
			var quantityHispanicFemale = $('#quantityHispanicFemale').html();
			quantityHispanicFemale++;
			$('#quantityHispanicFemale').html(quantityHispanicFemale);
			break;
		case 'incrementBlackMale': 
			var quantityBlackMale = $('#quantityBlackMale').html();
			quantityBlackMale++;
			$('#quantityBlackMale').html(quantityBlackMale);
			break;
		case 'incrementBlackFemale': 
			var quantityBlackFemale = $('#quantityBlackFemale').html();
			quantityBlackFemale++;
			$('#quantityBlackFemale').html(quantityBlackFemale);
			break;
		case 'incrementOtherMale':
			var quantityOtherMale = $('#quantityOtherMale').html();
			quantityOtherMale++;
			$('#quantityOtherMale').html(quantityOtherMale);
			break;
		case 'incrementOtherFemale':
			var quantityOtherFemale = $('#quantityOtherFemale').html();
			quantityOtherFemale++;
			$('#quantityOtherFemale').html(quantityOtherFemale);
			break;
	}
}
function decrementClicked(clicked_id) {
	switch (clicked_id) {
		case 'decrementCaucasianMale':
			var quantityCaucasianMale = $('#quantityCaucasianMale').html();
			if (quantityCaucasianMale > 0 ){
				quantityCaucasianMale--;
			}
			$('#quantityCaucasianMale').html(quantityCaucasianMale);
			break;
		case 'decrementCaucasianFemale':
			var quantityCaucasianFemale = $('#quantityCaucasianFemale').html();
			if (quantityCaucasianFemale > 0 ){
				quantityCaucasianFemale--;
			}
			$('#quantityCaucasianFemale').html(quantityCaucasianFemale);
			break;		
		case 'decrementHispanicMale': 
			var quantityHispanicMale = $('#quantityHispanicMale').html();
			if (quantityHispanicMale > 0) {
				quantityHispanicMale--;
			}
			$('#quantityHispanicMale').html(quantityHispanicMale);
			break;
		case 'decrementHispanicFemale': 
			var quantityHispanicFemale = $('#quantityHispanicFemale').html();
			if (quantityHispanicFemale > 0){
				quantityHispanicFemale--;
			}
			$('#quantityHispanicFemale').html(quantityHispanicFemale);
			break;
		case 'decrementBlackMale': 
			var quantityBlackMale = $('#quantityBlackMale').html();
			if (quantityBlackMale > 0){
				quantityBlackMale--;
			}
			$('#quantityBlackMale').html(quantityBlackMale);
			break;
		case 'decrementBlackFemale': 
			var quantityBlackFemale = $('#quantityBlackFemale').html();
			if (quantityBlackFemale > 0){
				quantityBlackFemale--;
			}
			$('#quantityBlackFemale').html(quantityBlackFemale);
			break;
		case 'decrementOtherMale':
			var quantityOtherMale = $('#quantityOtherMale').html();
			if (quantityOtherMale > 0){
				quantityOtherMale--;
			}
			$('#quantityOtherMale').html(quantityOtherMale);
			break;
		case 'decrementOtherFemale':
			var quantityOtherFemale = $('#quantityOtherFemale').html();
			if (quantityOtherFemale > 0){
				quantityOtherFemale--;
			}
			$('#quantityOtherFemale').html(quantityOtherFemale);
			break;	
	}
}
function setBreakdown() {
	$('#demographicTitle').html(demographics.getOrganizationName() + " - " + demographics.getEventName());
	$('#total').html(demographics.getTotal());
	$('#breakdownCaucasianMale').html(demographics.getCaucasianMale());
	$('#breakdownCaucasianFemale').html(demographics.getCaucasianFemale());
	$('#breakdownHispanicMale').html(demographics.getHispanicMale());
	$('#breakdownHispanicFemale').html(demographics.getHispanicFemale());
	$('#breakdownBlackMale').html(demographics.getBlackMale());
	$('#breakdownBlackFemale').html(demographics.getBlackFemale());
	$('#breakdownOtherMale').html(demographics.getOtherMale());
	$('#breakdownOtherFemale').html(demographics.getOtherFemale());
	generateChart(quantityCaucasianMale, quantityCaucasianFemale, quantityHispanicMale, quantityHispanicFemale, quantityBlackMale, quantityBlackFemale, quantityOtherMale, quantityOtherFemale);
}
function share(clicked_id) {
	var d = new Date();
	var subject = "Demographic Breakdown for " + $('#demographicTitle').html();
	var body =
	"Here is the demograhics breakdown for the " + demographics.getOrganizationName() +
	" " +
	demographics.getEventName() +
	" on " +
	d.getMonth() + "/" + d.getDay() + "/" + d.getFullYear()+
	":"+
	escape('\r\n') +
	escape('\r\n') +
	"Total Attendees: " + demographics.getTotal() +
	escape('\r\n') +
	"Caucasian Men: " + demographics.getCaucasianMale() + 
	escape('\r\n') +
	"Caucasian Women: " + demographics.getCaucasianFemale() +
	escape('\r\n') +
	"Hispanic Men: " + demographics.getHispanicMale() +
	escape('\r\n') +
	"Hispanic Women: " + demographics.getHispanicFemale() +
	escape('\r\n') +
	"Black Men: " + demographics.getBlackMale() +
	escape('\r\n') +
	"Black Women: " +demographics.getBlackFemale() +
	escape('\r\n') +
	"Men of other ethnicities: " + demographics.getOtherMale() +
	escape('\r\n') +
	"Women of other ethnicities: " + demographics.getOtherFemale()+
	escape('\r\n')+
	escape('\r\n') +
	"Go Noles!";

	if (clicked_id == "emailResults") {
		window.location="mailto:?subject=" + subject + "&body="+body;
	}
	else{
		select(body);
		document.execCommand("copy");
	}
}
function generateChart(){
	var ctx = $("#myChart");
	var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Caucasian men", "Caucasian women", "Hispanic maen", "Hispanic women", "Black men", "Black women", "Men of other races", "Women of other races"],
        datasets: [{
            label: '# of Votes',
            data: [demographics.getCaucasianMale(), demographics.getCaucasianFemale(), demographics.getHispanicMale(), demographics.getHispanicFemale(), demographics.getBlackMale(), demographics.getBlackFemale(), demographics.getOtherMale(), demographics.getOtherFemale()],
            backgroundColor: [
                '#1abc9c',
                '#2ecc71',
                '#A8A717',
                '#9b59b6',
                '#f1c40f',
                '#e67e22',
				'#c0392b',
				'#2c3e50'
            ],
            borderColor: [
				'#FFFFFF'
            ],
            borderWidth: 3
        }]
    }
});
}