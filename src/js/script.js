const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener( 'click', (event) => {
		//удаляем класс
		let tabsCurrent = event.target.parentElement.children;
		for(let t = 0; t < tabsCurrent.length; t++) {
			tabsCurrent[t].classList.remove('tab--active');
		}
		//добавляем класс текущий
		event.target.classList.add('tab--active');

		//удаляем класс
		let contentsCurrent = event.target.parentElement.nextElementSibling.children;
		
		for(let c = 0; c < contentsCurrent.length; c++) {
			contentsCurrent[c].classList.remove('content--active');
		}
		//добавляем класс текущий
		contents[i].classList.add('content--active');
	});
}