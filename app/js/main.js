var catLevel 		= document.getElementsByClassName('catLevel');

var genBtn 			= document.getElementById('generate_btn');
var parseBtn		= document.getElementById('parse_btn');
var resetBtn		= document.getElementById('reset_btn');
var genInputs		= document.getElementById('generated_inputs');
var genJSON			= document.getElementById('generated_json');
var parsedContainer	= document.getElementById('container_parsed-html');
var catAmount 		= document.getElementById('catAmount');
var currentCat;

function createInputs() {
	for(var i = 0; i < catLevel.length; i++) {
		if(catLevel[i].selected) {
			currentCat = catLevel[i].value;
			console.log(currentCat);
		}
	}
	
	console.log(parseInt(catAmount.value));
	for(var i = 0; i < parseInt(catAmount.value); i++) {
		var genInputContainer = document.createElement('div');
		genInputContainer.className = 'inputContainer';

		console.log('The current count is ' + i);

		if(currentCat === 'level_1_cat') {

			var level_1_label = document.createElement('h3');
			level_1_label.textContent = 'Title for level-1 category #' + (i + 1);

			var level_1_name = document.createElement('input');
			level_1_name.className = 'form-control level_1 level_1-name catName';
			level_1_name.setAttribute('placeholder', 'Level-1 name');

			var level_1_url_label = document.createElement('h4');
			level_1_url_label.textContent = 'category url level-1 category #' + (i + 1);

			var level_1_url = document.createElement('input');
			level_1_url.className = 'form-control level_1 level_2-url catUrl';
			level_1_url.setAttribute('placeholder', 'Level-1 url');

			genInputContainer.append(level_1_label);
			genInputContainer.append(level_1_name);
			genInputContainer.append(level_1_url_label);
			genInputContainer.append(level_1_url);
			genInputs.append(genInputContainer);

		} else if(currentCat === 'level_2_cat') {

			var level_2_label = document.createElement('h3');
			level_2_label.textContent = 'Example title for level-2 category #' + (i + 1);

			var level_2_name = document.createElement('input');
			level_2_name.className = 'form-control level_2 level_2-name catName';
			level_2_name.setAttribute('placeholder', 'Level-2 name');

			var level_2_url_label = document.createElement('h4');
			level_2_url_label.textContent = 'Example category url level-2 category #' + (i + 1);

			var level_2_url = document.createElement('input');
			level_2_url.className = 'form-control level_2 level_2-url catUrl';
			level_2_url.setAttribute('placeholder', 'Level-2 url');

			genInputContainer.append(level_2_label);
			genInputContainer.append(level_2_name);
			genInputContainer.append(level_2_url_label);
			genInputContainer.append(level_2_url);
			genInputs.append(genInputContainer);

		} else if(currentCat === 'level_3_cat') {

			var level_3_label = document.createElement('h3');
			level_3_label.textContent = 'TItle for level-3 category #' + (i + 1);

			var level_3_name = document.createElement('input');
			level_3_name.className = 'form-control level_3 level_3-name catName';
			level_3_name.setAttribute('placeholder', 'Level-3 name');

			var level_3_url_label = document.createElement('h4');
			level_3_url_label.textContent = 'category url level-3 category #' + (i + 1);

			var level_3_url = document.createElement('input');
			level_3_url.className = 'form-control level_3 level_3-url catUrl';
			level_3_url.setAttribute('placeholder', 'Level-3 url');

			genInputContainer.append(level_3_label);
			genInputContainer.append(level_3_name);
			genInputContainer.append(level_3_url_label);
			genInputContainer.append(level_3_url);
			genInputs.append(genInputContainer);
		}
	}
	genBtn.setAttribute('disabled', 'true');
}

function parseData() {
	var totalCatAmount = parseInt(catAmount.value);
	var catNameArr = document.getElementsByClassName('catName');
	var catUrlArr = document.getElementsByClassName('catUrl');
	var parsedData;
	
	for(var i = 0; i < totalCatAmount; i++) {
		var plainHTML = document.createElement('p');
		console.log('The current count for parsed data is ' + i);
		console.log(catNameArr[i].value);
		console.log(catUrlArr[i].value);

		parsedData = '<li><a class="nav-child" href="$httpUrl(\'Search-Show\',\'cgid\',\'' + catUrlArr[i].value + '\')$">' + catNameArr[i].value + '</a></li>';

		plainHTML.textContent = parsedData;
		parsedContainer.append(plainHTML);
	}
	parseBtn.setAttribute('disabled', 'true');
}

function resetData() {
	catAmount.value = '';
	genInputs.textContent = '';
	parsedContainer.textContent = '';
	genBtn.removeAttribute('disabled');
	parseBtn.removeAttribute('disabled');
}

genBtn.addEventListener('click', createInputs, false);
parseBtn.addEventListener('click', parseData, false);
resetBtn.addEventListener('click', resetData, false);