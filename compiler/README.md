# Proyecto Final - Diseño de Compiladores

Proyecto final para la clase de Diseño de compiladores

Se incluyen el lexer y el parser en PLY.
Se incluyen el archivo principal (main.py) y los archivos necesarios para construir el programa (lex.py y yacc.py)

En este avance nos pusimos al corriente con las entregas 5 y 6. Creamos la maquina virtual y tiene funcionalidad para la mayor parte de los requisitos, pero aún nos faltan strings y arreglos. Cambiamos los cuadruplos para que guarden direcciones de memoria en lugar de los nombres de las variables.

Primero es necesario correr el archivo main.py que incluye el lexer y el parser con:

python main.py [nombre archivo prueba]

Después se ejecuta la máquina virtual corriendo:

python virtualMachine.py output.txt

donde output.txt es el archivo generado por main.py que incluye la lista de variables, la lista de constantes y la lista de cuádruplos.
