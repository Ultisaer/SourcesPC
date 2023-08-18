import unittest

def suma(num_1, num_2):
    """
    Función que realiza la suma de dos números.

    Args:
        num_1 (int): Primer número.
        num_2 (int): Segundo número.

    Returns:
        int: Resultado de la suma de num_1 y num_2.
    """
    return num_1 + num_2

class CajaNegraTest(unittest.TestCase):
    """
    Clase que contiene los casos de prueba para la función suma.
    """
    def test_sema_dos_positivos(self):
        """
        Caso de prueba que verifica la suma de dos números positivos.
        """
        num_1 = 10
        num_2 = 5
        resultado = suma(num_1, num_2)

        self.assertEqual(resultado, 15)

    def test_suma_dos_negativos(self):
        """
        Caso de prueba que verifica la suma de dos números negativos.
        """
        num_1 = -10
        num_2 = -7

        resultado = suma(num_1, num_2)

        self.assertEqual(resultado, -17)

if __name__ == '__main__':
    unittest.main()
