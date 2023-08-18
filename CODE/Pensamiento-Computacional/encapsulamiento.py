print("ENCAPSULAMIENTO DE METODOS NUMERICOS")

# Función de enumeración para calcular la raíz cuadrada
def enumeracion(objetive):
    result = 0
    while result**2 < objetive:
        result += 1
    if result**2 == objetive:
        print(f'La raiz cuadrada de {objetive} es {result}')
    else :
        print(f'{objetive} no tiene una raiz cuadrada exacta')

# Función de aproximación para calcular la raíz cuadrada
def aproximacion(objetive):
    epsilon = 0.1
    paso = epsilon**2
    result = 0.0

    while abs(result**2 - objetive) >= epsilon and result <= objetive:
        result += paso

    if abs(result**2 - objetive ) >= epsilon:
        print(f"No se encontro la raiz cuadrada de {objetive}")
    else:
        print(f"La raiz cuadrada de {objetive} es {result}")

# Función de búsqueda binaria para calcular la raíz cuadrada
def busquedaBinaria(objetive):
    epsilon = 0.000001
    bajo    = 0.0
    alto = max(1.0, objetive)
    respuesta = (alto + bajo) / 2

    while abs(respuesta**2 - objetive) >= epsilon:
        if respuesta**2 < objetive:
            bajo = respuesta
        else:
            alto = respuesta
        
        respuesta = (alto + bajo ) / 2
        
    print(f"La raiz cuadrada de {objetive} es {respuesta}")

# Bucle principal
while True:
    numberUser = int(input("Escoge un numero entero:"))
    print("Selecciona el metodo deseado:")
    print("Enumeracion: 1 // Aproximacion: 2 // Busqueda Binaria: 3")
    opcionMethod = int(input("Opción: "))

    if opcionMethod == 1:
        enumeracion(numberUser)
        break
    elif opcionMethod == 2:
        aproximacion(numberUser)
        break
    elif opcionMethod == 3:
        busquedaBinaria(numberUser)
        break
    else:
        print("Opción inválida. Por favor, selecciona 1, 2 o 3.")