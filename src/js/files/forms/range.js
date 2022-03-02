// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
//import 'nouislider/dist/nouislider.css';

export function rangeInit() {

	const rangeItems = document.querySelectorAll('[data-range]');
	if(rangeItems.length) {
		rangeItems.forEach(rangeItems => {
			const fromValue = rangeItems.querySelector('[data-range-from]');
			const toValue = rangeItems.querySelector('[data-range-to]');
			const item = rangeItems.querySelector('[data-range-item]');
			noUiSlider.create(item, {
				start: [Number(fromValue.value), Number(toValue.value)], // [0,200000]
				tooltips: [true, true],
				connect: true,
				range: {
					'min': [Number(fromValue.dataset.rangeFrom)],
					'max': [Number(toValue.dataset.rangeTo)]
				}
			});
			item.noUiSlider.on('update', function (values, handle) {
				fromValue.value = values[handle];
				toValue.value = values[handle];
				
			});
		});
	}
}
rangeInit();
