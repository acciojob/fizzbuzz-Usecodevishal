//your JS code here. If required.
let container = document.createElement('div');
container.style.width = "fit-content";

for(let i = 1;i<=100; i++){
	let p = document.createElement("p");
	if(i%15 === 0){
		
		p.innerText = `FizzBuzz`;
		container.appendChild(p);
	}else if(i%3 === 0){
		
		p.innerText = "Fizz"
		container.appendChild(p);
	}else if(i%5 === 0){
		p.innerText = "Buzz";
		container.apendChild(p);
	}else {
		p.innerText = `${i}`;
		container.appendChild(p);
	}
}