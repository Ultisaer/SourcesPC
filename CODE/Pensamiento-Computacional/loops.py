countExternal = 0
countInternal = 0

while countExternal <= 12:
    while countInternal <= 60:
        print(countExternal, countInternal )
        countInternal += 1

        if countInternal >= 3:
            break

    countExternal += 1
    countInternal = 0

    x = 0.0
for i in range(10):
    x += 0.1

tolerancia = 1e-9  # margen de error aceptable
if abs(x - 1.0) < tolerancia:
    print(f'x está cerca de 1.0')
else:
    print(f'x no está cerca de 1.0')
