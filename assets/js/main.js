/*---------- Navbar ----------*/

/*-- Navbar --*/

function dropFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

/*---------- Gallery ----------*/

var slideIndex = [1];
var slideId = ["cake-pics"];
showSlides(1, 0);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1};    
  if (n < 1) {slideIndex[no] = x.length};
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

/*---------- Map ----------*/

function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 11,
                center: {
                    lat: 53.3767078,
                    lng: -6.4870433
                }
            });
            var labels = "ABC";
            var locations = [{
                lat: 53.3512766,
                lng: -6.548766
            }, {
                lat: 53.371625,
                lng: -6.5185476
            }, {
                lat: 53.3623246,
                lng: -6.5992629
            }];
            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });
            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }

/*----------Calendar----------*/

const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

date_picker_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

function toggleDatePicker (e) {
	if (!checkEventPathForClass(e.path, 'dates')) {
		dates_element.classList.toggle('active');
	}
}

function goToNextMonth (e) {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}
	mth_element.textContent = months[month] + ' ' + year;
	populateDates();
}

function goToPrevMonth (e) {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	mth_element.textContent = months[month] + ' ' + year;
	populateDates();
}

function populateDates (e) {
	days_element.innerHTML = '';
	let amount_days = 31;

	if (month == 1) {
		amount_days = 28;
	} else if (month == 3) {
        amount_days = 30;
    } else if (month == 5) {
        amount_days = 30;
    }  else if (month == 8) {
        amount_days = 30;
    }  else if (month == 10) {
        amount_days = 30;
    } else {
        amount_days = 31;
    }

	for (let i = 0; i < amount_days; i++) {
		const day_element = document.createElement('div');
		day_element.classList.add('day');
		day_element.textContent = i + 1;

		if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
			day_element.classList.add('selected');
		}

		day_element.addEventListener('click', function () {
			selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
			selectedDay = (i + 1);
			selectedMonth = month;
			selectedYear = year;

			selected_date_element.textContent = formatDate(selectedDate);
			selected_date_element.dataset.value = selectedDate;

			populateDates();
		});

		days_element.appendChild(day_element);
	}
}

function checkEventPathForClass (path, selector) {
	for (let i = 0; i < path.length; i++) {
		if (path[i].classList && path[i].classList.contains(selector)) {
			return true;
		}
	}
	
	return false;
}
function formatDate (d) {
	let day = d.getDate();
	if (day < 10) {
		day = '0' + day;
	}

	let month = d.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}

	let year = d.getFullYear();

	return day + ' / ' + month + ' / ' + year;

}/*----------Email Functionality----------*/

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ht0rz4h';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Your e-mail has been sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

/*---------- Cake Selector ----------*/
//Base Slectors

$(function(){
    $("#van-base-rad").click(function(){
        $("#cake-toggle").attr("src","assets/images/cakespec/vanillabase.png");
    });
});

$(function(){
    $("#choc-base-rad").click(function(){
        $("#cake-toggle").attr("src","assets/images/cakespec/chocbase.png");
    });
});

$(function(){
    $("#carrot-base-rad").click(function(){
        $("#cake-toggle").attr("src","assets/images/cakespec/carrotbase.png");
    });
});

$(function(){
    $("#lemon-base-rad").click(function(){
        $("#cake-toggle").attr("src","assets/images/cakespec/lemonbase.png");
    });
});

$(function(){
    $("#coffee-base-rad").click(function(){
        $("#cake-toggle").attr("src","assets/images/cakespec/coffeebase.png");
    });
});

$(function(){
    $("#rasp-choc-base-rad").click(function(){
        $("#cake-toggle").attr("src","assets/images/cakespec/raspchocbase.png");
    });
});

$(function(){
    $("#baileys-bisc-rad").click(function(){
        $("#cake-toggle").attr("src","assets/images/cakespec/chocfudgebase.png");
    });
});

//Filling Selector
//Vanilla Base and ...

$("#van-base-rad , #van-fill-rad").click(function() {
  $("#cake-toggle").attr("src" , "assets/images/cakespec/vanillavanilla.png");
});

$("#van-base-rad , #choc-fill-rad").click(function() {
  $("#cake-toggle").attr("src" , "assets/images/cakespec/vanillachoc.png");
});

$("#van-base-rad , #fud-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/vanillachocfudge.png");
});

$("#van-base-rad , #choc-ora-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/vanillaorangechoc.png");
});

$("#van-base-rad , #pb-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/vanillapeanut.png");
});

$("#van-base-rad , #lemon-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/vanillalemon.png");
});

$("#van-base-rad , #coffee-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/vanillacoffee.png");
});

$("#van-base-rad , #carm-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/vanillasaltcarm.png");
});


//Chocolate Base and ...
 
$("#choc-base-rad , #van-fill-rad").click(function() {
  $("#cake-toggle").attr("src" , "assets/images/cakespec/chocvanilla.png");
});
 
$("#choc-base-rad , #choc-fill-rad").click(function() {
  $("#cake-toggle").attr("src" , "assets/images/cakespec/chochoc.png");
});
 
$("#choc-base-rad , #fud-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/chocchocfudge.png");
});
 
$("#choc-base-rad , #choc-ora-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/chocorangechoc.png");
});
 
$("#choc-base-rad , #pb-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/chocpeanut.png");
});
 
$("#choc-base-rad , #lemon-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/choclemon.png");
});
 
$("#choc-base-rad , #coffee-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/choccoffee.png");
});
 
$("#choc-base-rad , #carm-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/chocsaltcarm.png");
});
 
//Carrot Base and ...
 
$("#carrot-base-rad , #van-fill-rad").click(function() {
  $("#cake-toggle").attr("src" , "assets/images/cakespec/carrotvanilla.png");
});
 
$("#carrot-base-rad , #choc-fill-rad").click(function() {
  $("#cake-toggle").attr("src" , "assets/images/cakespec/carrotchoc.png");
});
 
$("#carrot-base-rad , #fud-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/carrotchocfudge.png");
});
 
$("#carrot-base-rad , #choc-ora-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/carrotorangechoc.png");
});
 
$("#carrot-base-rad , #pb-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/carrotpeanut.png");
});
 
$("#carrot-base-rad , #lemon-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/carrotlemon.png");
});
 
$("#carrot-base-rad , #coffee-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/carrotcoffee.png");
});
 
$("#carrot-base-rad , #carm-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/carrotsaltcarm.png");
});
 
//Lemon Base and ...
 
$("#lemon-base-rad , #van-fill-rad").click(function() {
  $("#cake-toggle").attr("src" , "assets/images/cakespec/lemonvanilla.png");
});
 
$("#lemon-base-rad , #choc-fill-rad").click(function() {
  $("#cake-toggle").attr("src" , "assets/images/cakespec/lemonchoc.png");
});
 
$("#lemon-base-rad , #fud-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/lemonchocfudge.png");
});
 
$("#lemon-base-rad , #choc-ora-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/lemonorangechoc.png");
});
 
$("#lemon-base-rad , #pb-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/lemonpeanut.png");
});
 
$("#lemon-base-rad , #lemon-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/lemonlemon.png");
});
 
$("#lemon-base-rad , #coffee-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/lemoncoffee.png");
});
 
$("#lemon-base-rad , #carm-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/lemonsaltcarm.png");
});
 
//Coffee Base and ...
 
$("#coffee-base-rad , #van-fill-rad").click(function() {
  $("#cake-toggle").attr("src" , "assets/images/cakespec/coffeevanilla.png");
});
 
$("#coffee-base-rad , #choc-fill-rad").click(function() {
  $("#cake-toggle").attr("src" , "assets/images/cakespec/coffeechocolate.png");
});
 
$("#coffee-base-rad , #fud-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/coffeechocfudge.png");
});
 
$("#coffee-base-rad , #choc-ora-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/coffeeorangechoc.png");
});
 
$("#coffee-base-rad , #pb-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/coffeepeanut.png");
});
 
$("#coffee-base-rad , #lemon-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/coffeelemon.png");
});
 
$("#coffee-base-rad , #coffee-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/coffeecoffee.png");
});
 
$("#coffee-base-rad , #carm-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/coffeesaltcarm.png");
});
 
//Raspberry Base and ...
 
 
$("#rasp-choc-base-rad , #van-fill-rad").click(function() {
  $("#cake-toggle").attr("src" , "assets/images/cakespec/raspchocvanilla.png");
});
 
$("#rasp-choc-base-rad , #choc-fill-rad").click(function() {
  $("#cake-toggle").attr("src" , "assets/images/cakespec/raspchocchoc.png");
});
 
$("#rasp-choc-base-rad , #fud-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/raspchocchocfudge.png");
});
 
$("#rasp-choc-base-rad , #choc-ora-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/raspchocorangechoc.png");
});
$("#rasp-choc-base-rad , #pb-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/raspchocpeanut.png");
});
 
$("#rasp-choc-base-rad , #lemon-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/raspchoclemon.png");
});
 
$("#rasp-choc-base-rad , #coffee-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/raspchoccoffee.png");
});
 
$("#rasp-choc-base-rad , #carm-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/raspsaltcarm.png");
});
//Bailey's Biscuit Base and ...
 
$("#baileys-bisc-rad , #van-fill-rad").click(function() {
  $("#cake-toggle").attr("src" , "assets/images/cakespec/chocfudgevanilla.png");
});
 
$("#baileys-bisc-rad , #choc-fill-rad").click(function() {
  $("#cake-toggle").attr("src" , "assets/images/cakespec/chocfudgechoc.png");
});
 
$("#baileys-bisc-rad , #fud-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/chocfudgechocfudge.png");
});
 
$("#baileys-bisc-rad , #choc-ora-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/chocfudgeorangechoc.png");
});
$("#baileys-bisc-rad , #pb-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/chocfudgepeanut.png");
});
 
$("#baileys-bisc-rad , #lemon-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/chocfudgelemon.png");
});
 
$("#baileys-bisc-rad , #coffee-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/chocfudgecoffee.png");
});
 
$("#baileys-bisc-rad , #carm-fill-rad").click(function(){
    $("#cake-toggle").attr("src" , "assets/images/cakespec/chocfudgesaltcarm.png");
});
