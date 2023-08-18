objetive = int(input("Escoge un  entero : "))
epsilon = 0.1
paso = epsilon**2
result = 0.0

while abs(result**2 - objetive) >= epsilon and result <= objetive:
    print(abs(result**2 - objetive) , result)
    result += paso

if abs(result**2 - objetive ) >= epsilon:
    print(f"No se encontro la raiz cuadrada de {objetive}")
else:
    print(f"La raiz cuadrada de {objetive} es {result}")