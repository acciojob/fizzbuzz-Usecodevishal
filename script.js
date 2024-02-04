//your JS code here. If required.
let vessel = document.getElementById('container');
vessel.style.width = "fit-content";

for(let i = 1;i <= 100; i++){
	let p = document.createElement("p");
	if(i%15 === 0){
		
		p.innerText = `FizzBuzz`;
		vessel.appendChild(p);
	}else if(i%3 === 0){
		
		p.innerText = "Fizz"
		vessel.appendChild(p);
	}else if(i%5 === 0){
		p.innerText = "Buzz";
		vessel.appendChild(p);
	}else {
		p.innerText = `${i}`;
		vessel.appendChild(p);
	}
}