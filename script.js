<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <script>
        const numero = parseInt(prompt("Digite um número para ver a tabuada:"));
        let resultado = `Tabuada de ${numero}; \n\n`;

        for (let i= 1; i <= 10; i++) {
            resultado += `${numero} x ${i} = ${numero * i} \n`;

        }

        alert(resultado);
        
    </script>
    
</body>
</html>
