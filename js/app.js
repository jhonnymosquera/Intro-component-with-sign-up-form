document.addEventListener('DOMContentLoaded', function () {
	iniciarApp();
});

function iniciarApp() {
	btn();
}

function btn() {
	const btn = document.querySelector('.button');
	btn.onclick = function (e) {
		e.preventDefault();
		inputs();
	};
}

function inputs() {
	const inputs = document.querySelectorAll('.formulario-input');
	inputs.forEach((input) => {
		errorMessage(input);
	});
}

function errorMessage(input) {
	const errorMessage = document.querySelectorAll(`.${input.id}`);
	errorMessage.forEach((e) => {
		input.addEventListener('input', () => {
			input.classList.remove('input-error');
			e.style.visibility = 'hidden';
		});

		if (input.value === '') {
			input.placeholder = '';
			input.classList.add('input-error');
			e.style.visibility = 'visible';
		}
	});
}
