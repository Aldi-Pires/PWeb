var num = []; //5 números
var highestN = 0;


for (i = 0; i <= 4; i++) {
    num[i] = prompt('Ingrese un número');
    num[i] = parseInt(num[i]);
    
    if (num[i] > highestN) {
        highestN = num[i]
    }
} 
document.write(highestN);


