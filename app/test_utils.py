import unittest
import utils
class TestUtils(unittest.TestCase):

    def test_id(self):
        li = []
        utils.id_tuit_text_plain("de la caso sa https://twitter.com/JeanineAnez/status/1233548693992767488", li)
        self.assertIsNotNone(li,li)
    
    def test_fuente(self):
        result = utils.fuente("Esta mañana, el secretario general del FPV, Israel Rodríguez que Hyun Chung tiene un plazo de 48 horas para declinar su candidatura. Nacional jueves, 27 de febrero de 2020 · 15:32 Fuente: paginasiete.bo Página Siete Digital / La Paz El candidato a la presidencia por el Frente Para la Victoria…")
        self.assertEqual("Esta mañana, el secretario general del FPV, Israel Rodríguez que Hyun Chung tiene un plazo de 48 horas para declinar su candidatura. Nacional jueves, 27 de febrero de 2020 · 15:32 ",result)