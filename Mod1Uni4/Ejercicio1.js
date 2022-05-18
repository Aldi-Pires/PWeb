var distance;
var means = ["a pie", "bicicleta", "colectivo", "auto", "avión"];
var resmess = 'Su medio de transporte es ';

distance = prompt('Ingrese la distancia en metros', ' ');

distance = parseInt(distance);

if (distance <= 1000) {
    document.write(resmess + means[0]);
} else {
    if (distance > 1000 && distance < 10000) {
        document.write(resmess + means[1]);
    } else {
        if (distance > 10000 && distance < 30000) {
            document.write(resmess + means[2]);
        } else {
            if (distance > 30000 && distance < 100000) {
                document.write(resmess + means[3]);
            } else {
                document.write(resmess + means[4]);
            }
        }
    }
}

