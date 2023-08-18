objetive = int(input("Escoge un  entero : "))
result = 0

while result**2 < objetive:
    result += 1
    print(result)
if result**2 == objetive:
    print(f'La raiz cuadrada de {objetive} es {result}')
else :
    print(f'{objetive} no tiene un raiz cuadrada exacta')