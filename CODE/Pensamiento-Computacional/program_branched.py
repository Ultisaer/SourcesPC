numSelectUsers1 = int(input("Che escoge un numero entero: "))
numSelectUsers2 = int(input("Otra vez: "))

if numSelectUsers1 > numSelectUsers2:
    print("El numero " , numSelectUsers1 , " es mayor que" , numSelectUsers2)
elif numSelectUsers1 < numSelectUsers2:
    print("El numero " , numSelectUsers1 , " es menor que" , numSelectUsers2)
else:
    print("Son iguales")
