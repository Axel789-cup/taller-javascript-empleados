# Sistema de Gestión de Empleados y Nómina

## Descripción del proyecto

Este proyecto consiste en desarrollar un sistema en JavaScript para gestionar empleados y calcular sus pagos según el tipo de contrato que tengan.

## Objetivo

Aplicar los conceptos de programación orientada a objetos mediante clases, herencia, encapsulamiento, polimorfismo y arreglos.

## Clases utilizadas

- **Empleado:** es la clase principal que contiene los datos generales de cada empleado.
- **EmpleadoPlanta:** representa a los empleados que reciben un salario fijo.
- **Contratista:** representa a los empleados que reciben su pago según la tarifa por hora y las horas trabajadas.

## Conceptos aplicados

- **Herencia:** las clases EmpleadoPlanta y Contratista heredan de la clase Empleado.
- **Encapsulamiento:** se utilizan atributos privados para proteger los datos de los empleados.
- **Polimorfismo:** el método calcularPago() funciona de manera diferente según el tipo de empleado.
- **Arreglos:** se utiliza un arreglo para almacenar varios empleados y recorrerlos para calcular sus pagos.
- **Validaciones:** se verifica que los datos sean válidos y que no se acepten salarios, tarifas u horas negativas.

## Pruebas realizadas

Se realizan pruebas con empleados de planta y contratistas para comprobar el cálculo de sus pagos. También se prueba el rechazo de un salario negativo para verificar el funcionamiento de las validaciones.

## Herramientas utilizadas

- JavaScript
- Visual Studio Code
- GitHub

## Autor

Aprendiz del programa de formación.
