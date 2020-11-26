# Falke

Proyecto final para la clase de Diseño de compiladores
David Acevedo
Rodrigo Urbina

El compilador está escrito en Python 3, basado en PLY (Python Lex-Yacc)

Requisitos:
* Tener node y npm instalados
* Tener Python 3 instalado

Para correr la interfaz gráfica se tienen que instalar las dependencias del archivo package.json y después correr la aplicación. Esto se logra con las siguientes instrucciones:

npm install

npm start



Posteriormente se debe abrir en un navegador web la siguiente dirección:

localhost:3000/



Después de haber creado una secuencia de bloques válida, al hacer clic en el botón "Compile Falke" se generará y ejecutará el código y se mostrará en la misma pantalla el resultado de la ejecución.


Para correr un archivo de texto con el código en Falke se es necesario ejecutar las siguientes instrucciones desde el folder "compiler":

python main.py [nombre_archivo]

python virtualMachine.py output.txt


donde output.txt es el archivo generado por main.py que incluye la lista de variables, la lista de constantes y la lista de cuádruplos.