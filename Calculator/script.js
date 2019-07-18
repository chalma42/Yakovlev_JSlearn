var operation = prompt('Вариант операции: + - * /', '+');

function plus(){
	let first = prompt('Первое слагаемое',20);
	let second = prompt('Второе слагаемое',10);
	let sum = Number(first) + Number(second);
	alert('Сумма=' + sum);
}
function minus(){
	let first = prompt('Уменьшаемое',20);
	let second = prompt('Вычитаемое',10);
	let raz = Number(first) - Number(second);
	alert('Разность=' + raz);
}
function umn(){
	let first = prompt('Число',20);
	let second = prompt('Умножит на',10);
	let proiz = Number(first) * Number(second);
	alert('Произведение=' + proiz);
}
function del(){
	let first = prompt('Делимое',20);
	let second = prompt('Делитель',10);
	let rez = Number(first) / Number(second);
	alert('Результат=' + rez);
}

switch(operation){
	case '+': 
		plus();
		break;
	case '-': 
		minus();
		break;
	case '*': 
		umn();
		break;
	case '/': 
		del();
		break;
	default:
		alert('Ошибка, неверное значение!');
}