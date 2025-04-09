const students = [
    {
        "No": 6,
        "Código": "2024113",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "01",
        "Curso": "01",
        "Estudiante": "LIZARAZO AYALA CHRISTOPHER ALDAIR RC 1091372461",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 10,
        "Código": "2023013",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "02",
        "Curso": "01",
        "Estudiante": "CORDERO GALVIS MATIHAS EVELIO PPT 6395076",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 17,
        "Código": "2025013",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "03",
        "Curso": "01",
        "Estudiante": "CAEZ AVILA DANNA VALERIA TI 1094282956",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 18,
        "Código": "2023020",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "03",
        "Curso": "01",
        "Estudiante": "CARDONA LIZARAZO THIAGO ESTEBAN RC 1091368972",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 29,
        "Código": "2025088",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "04",
        "Curso": "01",
        "Estudiante": "FLOREZ MOSQUERA NIYIRETH",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 37,
        "Código": "2025034",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "04",
        "Curso": "01",
        "Estudiante": "SUAREZ GARCIA KLEIVER SANTIAGO TI 1093309223",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 42,
        "Código": "2022264",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "05",
        "Curso": "01",
        "Estudiante": "CORDERO GALVIS LUIS MARIO PPT 4866193",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 47,
        "Código": "2023098",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "BARBOZA NAVARRO SHARICK DALIANA TI 1104015371",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 53,
        "Código": "2018050",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "FIGUEROA SANCHEZ YORENNY ANTONIA TI 1093780465",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 55,
        "Código": "2025038",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "GOMEZ ALBARRACIN VALERY ESTEFANIA TI 1094223200",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 63,
        "Código": "2022059",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "RODRIGUEZ RUIZ SEBASTIAN TI 1093774053",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 64,
        "Código": "2018184",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "ACEVEDO GARZA JESUS ALONZO RC 1127351162",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 68,
        "Código": "2019095",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "CAMACHO ALMEIDA JUAN DIEGO TI 1094223912",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 70,
        "Código": "2023075",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "CONTRERAS GUEVARA ALEXMAR ALEXANDRA TI 1065847295",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 71,
        "Código": "2019021",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "CORTES ALMEIDA ALEXANDER RC 1094223667",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 87,
        "Código": "2018040",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "URBINA BARRERA JOSE ALEJANDRO TI 1094223515",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 105,
        "Código": "2023115",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "SANTIAGO ALARCON ISAROHA VALENTINA CE 5522146",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 107,
        "Código": "2020002",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "TORRADO BECERRA HAROL HERNANDO TI 1094223221",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 111,
        "Código": "2024111",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "AYALA FLOREZ JULIANY NICOL NES",
        "TipoDoc": "N46534425942RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 114,
        "Código": "2022272",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "CACERES HERNANDEZ ANGEL ANDRES TI 1092539737",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 118,
        "Código": "2022263",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "CORDERO GALVIS MONICA PPT 4860761",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 126,
        "Código": "2017062",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "POLENTINO FRANCO JHOAN SANTIAGO TI 1092540743",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 127,
        "Código": "2025085",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "RODRIGUEZ MENDEZ JOAN",
        "TipoDoc": "SEBASTIAN",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 128,
        "Código": "2016038",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "SANGUINO GARCIA MARIA CAMILA RC 1092950513",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 129,
        "Código": "2025052",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "UZCATEGUI LOPEZ CRISTOPHER LOPEZ TI 1248021",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 130,
        "Código": "2025073",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "VESGA SEGURA SAMUEL FERNANDO",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 131,
        "Código": "2022147",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "01",
        "Estudiante": "FERNANDEZ VERA MARCO ABRAHAM TI",
        "TipoDoc": "1094663297",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 132,
        "Código": "2016033",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "01",
        "Estudiante": "FIGUEROA SANCHEZ BRAMDON SNEIDER TI 1093768329",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 133,
        "Código": "2024070",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "01",
        "Estudiante": "FONTALVO ARAUJO MARYPAZ TI 1046710051",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 134,
        "Código": "2023078",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "01",
        "Estudiante": "GARCIA SERRANO RICARDO JOSE TI 1091389704",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 135,
        "Código": "2017078",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "01",
        "Estudiante": "GOYENECHE PARRA LAURA SOFIA TI",
        "TipoDoc": "1094222946",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 136,
        "Código": "2017082",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "01",
        "Estudiante": "HERNANDEZ CORREA LEIDY KARINA TI",
        "TipoDoc": "1093772040",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 137,
        "Código": "2020028",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "01",
        "Estudiante": "IBARRA TRUJILLO MAHIA JULIETA RC 1093305693",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 138,
        "Código": "2017201",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "01",
        "Estudiante": "LAGUADO TUBERQUIA ANA SOFIA TI",
        "TipoDoc": "1094222909",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 139,
        "Código": "2017016",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "01",
        "Estudiante": "LEAL SUAREZ VALERIA VALENTINA TI",
        "TipoDoc": "1091985247",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 140,
        "Código": "2017083",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "01",
        "Estudiante": "MAYORGA DELGADO SANTIAGO ANDRES TI",
        "TipoDoc": "1101075831",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 141,
        "Código": "2019022",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "01",
        "Estudiante": "MONTAÑEZ HOLGUIN YANEURI TI",
        "TipoDoc": "1093602603",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 142,
        "Código": "2022242",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "01",
        "Estudiante": "MONTEROSA PEREZ KLEYDER YESID TI 1094055774",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 143,
        "Código": "2016006",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "01",
        "Estudiante": "SUAREZ CASTRILLO MAYKHELL JOHANN TI 1094222534",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 144,
        "Código": "2017009",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "01",
        "Estudiante": "SUAREZ SILVA EYDER SANTIAGO TI",
        "TipoDoc": "1093773953",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 145,
        "Código": "2018109",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "01",
        "Estudiante": "TAPIAS FLOREZ SARA VALENTINA TI",
        "TipoDoc": "1093772744",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 146,
        "Código": "2025054",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "ARDILA GARCIA MARIA GABRIELA TI",
        "TipoDoc": "1092950558",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 147,
        "Código": "2023090",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "BAUTISTA DURAN SANTIAGO TI 1093434744",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 148,
        "Código": "2016044",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "CAMACHO ALMEIDA ANGELICA TI 1093770513",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 149,
        "Código": "2022198",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "GALVIS MONTEROSA JHOAN ALEXIS TI 1092947900",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 150,
        "Código": "2025075",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "GALVIZ FORERO SCARLETH ORIANA",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 151,
        "Código": "2025110",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "JAIMES GUTIERREZ ANGEL",
        "TipoDoc": "WILFREDO",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 152,
        "Código": "2024061",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "LAGUADO MENDOZA ANDREA VALENTINA TI",
        "TipoDoc": "1094834288",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 153,
        "Código": "2016140",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "LEAL RODRIGUEZ SERGIO ANDRES RC 1093765892",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 154,
        "Código": "2022160",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "MATUTE MARRUFO JENFER JOSE PEP",
        "TipoDoc": "5615389",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 155,
        "Código": "2022049",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "MORALES DUARTE MARIANGEL ANDREA CC",
        "TipoDoc": "5070880",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 156,
        "Código": "2024097",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "PALENCIA ROA DANNA YURITZA TI",
        "TipoDoc": "1079181072",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 157,
        "Código": "2020012",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "PIAMO GARCES JOSE MIGUEL PPT 1063545",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 158,
        "Código": "2016091",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "POLENTINO FRANCO SNEIDER ENRIQUE TI 1092539633",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 159,
        "Código": "2025055",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "QUIROGA MATEUS SAMUEL STHEPPANE",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 160,
        "Código": "2018061",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "RODRIGUEZ CARMONA ERICK MARCOS PPT 4981679",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 161,
        "Código": "2025093",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "RODRIGUEZ MENDEZ EMILY",
        "TipoDoc": "YULIANA",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 162,
        "Código": "2024098",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "08",
        "Curso": "02",
        "Estudiante": "SANCHEZ GARCIA SHARICK NICOLL TI 1093304664",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 163,
        "Código": "2020041",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "01",
        "Estudiante": "ACEVEDO GARZA CARLOS ALBERTO RC 1127343775",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 164,
        "Código": "2016196",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "01",
        "Estudiante": "APONTE SEPULVEDA VICTORIA JOSEFINA TI 1127962365",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 165,
        "Código": "2016084",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "01",
        "Estudiante": "FLOREZ GOMEZ JARLINTON ESTIBEN TI",
        "TipoDoc": "1094222383",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 166,
        "Código": "2017047",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "01",
        "Estudiante": "GOYENECHE PEREZ LISETH WILLIANA TI",
        "TipoDoc": "1093764255",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 167,
        "Código": "2016104",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "01",
        "Estudiante": "LAGOS CHAMORRO MEHYLIN FERNANDA TI 1093765630",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 168,
        "Código": "2022047",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "01",
        "Estudiante": "LEAL VELASCO BERONICA YOSELYN CC 6174379",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 169,
        "Código": "2016026",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "01",
        "Estudiante": "MOJICA PABON JHAN CARLOS TI",
        "TipoDoc": "1093766206",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 170,
        "Código": "2015068",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "01",
        "Estudiante": "SILVA RAMIREZ JUAN DIEGO RC",
        "TipoDoc": "1091980687",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 171,
        "Código": "2017040",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "01",
        "Estudiante": "SUAREZ GUTIERREZ CRISTIAN SEBASTIAN TI",
        "TipoDoc": "1148954194",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 172,
        "Código": "2021048",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "01",
        "Estudiante": "TERAN RIVERO YOHENYELY ANDREINA PPT 6086546",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 173,
        "Código": "2016098",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "01",
        "Estudiante": "VILLADIEGO PEREZ JOSE SANTIAGO TI",
        "TipoDoc": "1093764635",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 174,
        "Código": "2014050",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "ACEVEDO HERNANDEZ DANNA VALENTINA TI",
        "TipoDoc": "1093755317",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 175,
        "Código": "2024073",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "ARIAS BALAGUERA JESUS EDUARDO NES",
        "TipoDoc": "N131626654068RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 176,
        "Código": "2016059",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "BARRERA MARQUEZ BRANYERLIS MARCELA TI",
        "TipoDoc": "1148703726",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 177,
        "Código": "2016067",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "BOHORQUEZ CAEZ BRISNEY SOFIA TI 1092538723",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 178,
        "Código": "2015084",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "BOHORQUEZ CAEZ DEISY DAYANA TI",
        "TipoDoc": "1093753455",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 179,
        "Código": "2025040",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "BRAVO CARDENAS NIKOLL SARAY TI",
        "TipoDoc": "1091363144",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 180,
        "Código": "2020069",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "BRAVO CARRILLO ROSSY ALEXANDRA TI 1092944683",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 181,
        "Código": "52247",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "CAMARGO GALVIS DIANA MAYERLI TI 1094221052",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 182,
        "Código": "2023107",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "CRUCES LINDARTE MARLYN VANESSA TI 1092538098",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 183,
        "Código": "2022090",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "GALVIS SARMIENTO KEVIN ANDRES TI 1093761233",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 184,
        "Código": "2025047",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "GAMARRA JAUREGUI MIA TI",
        "TipoDoc": "1092946330",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 185,
        "Código": "2024112",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "GARNICA AYALA VANESA ALEXANDRA NES",
        "TipoDoc": "N46534424509RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 186,
        "Código": "2019143",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "LAGUADO TUBERQUIA MARIA FERNANDA TI",
        "TipoDoc": "1040367695",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 187,
        "Código": "2014012",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "MEJIA DIAZ LIZVETH MARCELA TI 1091361674",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 188,
        "Código": "2016194",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "PABON FLOREZ JOSE ALEJANDRO TI",
        "TipoDoc": "1094057352",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 189,
        "Código": "2025065",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "RAMIREZ MENDOZA BRAYAN",
        "TipoDoc": "DAVID",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 190,
        "Código": "2022014",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "RODRIGUEZ PIAMO SAMUEL JOSE CE 33732228",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 191,
        "Código": "2025057",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "ROMERO PATIÑO JETZABE",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 192,
        "Código": "2015098",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "09",
        "Curso": "02",
        "Estudiante": "SIERRA HERNANDEZ STEFANNY MAYVELLINE RC 1092946477",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 193,
        "Código": "2025090",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "10",
        "Curso": "01",
        "Estudiante": "ACOSTA DIAZ ZHARITH NICOL",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 194,
        "Código": "2016198",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "10",
        "Curso": "01",
        "Estudiante": "APONTE SEPULVEDA EVELYN DANIELA TI 1127962364",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 195,
        "Código": "2014051",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "10",
        "Curso": "01",
        "Estudiante": "AREVALO CORREA JAZMIN SOFHIA TI",
        "TipoDoc": "1094222072",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 196,
        "Código": "2016058",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "10",
        "Curso": "01",
        "Estudiante": "BARRERA MARQUEZ BRANDON STIVEN TI",
        "TipoDoc": "1148703724",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 197,
        "Código": "2019117",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "10",
        "Curso": "01",
        "Estudiante": "BLANCO PARRA ANDRES FELIPE TI",
        "TipoDoc": "1094221950",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 198,
        "Código": "2022141",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "10",
        "Curso": "01",
        "Estudiante": "CARRERO RAMOS JHONATAN TI 1091389802",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 199,
        "Código": "2015099",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "10",
        "Curso": "01",
        "Estudiante": "CASTRO RUIZ DIEGO ANDRES TI 1093751841",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 200,
        "Código": "2018025",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "10",
        "Curso": "01",
        "Estudiante": "FLOREZ LIZARAZO DYLAN ANDRES TI 1093598504",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 201,
        "Código": "2019029",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "10",
        "Curso": "01",
        "Estudiante": "GARCIA OYARBES NORCALIS SARAI PPT 5118416",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 202,
        "Código": "2014055",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "10",
        "Curso": "01",
        "Estudiante": "GOYENECHE PARRA KAREN VANESA TI",
        "TipoDoc": "1094221822",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 203,
        "Código": "2019027",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "10",
        "Curso": "01",
        "Estudiante": "HASTAMORIR GOYENECHE BRAYAN FERNANDOTI",
        "TipoDoc": "1093755502",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 204,
        "Código": "2015065",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "10",
        "Curso": "01",
        "Estudiante": "HERNANDEZ TARAZONA JUAN ESTEBAN TI",
        "TipoDoc": "1093763391",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 205,
        "Código": "2014045",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "10",
        "Curso": "01",
        "Estudiante": "LOPEZ GUERRERO LEIDY TALIANA TI 1093597513",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 206,
        "Código": "2018046",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "10",
        "Curso": "01",
        "Estudiante": "OJEDA PEREZ WILMER SHNAYDER PPT 5324628",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 207,
        "Código": "2019092",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "10",
        "Curso": "01",
        "Estudiante": "RODRIGUEZ ACEVEDO JUAN SEBASTIAN TI",
        "TipoDoc": "1093759095",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 208,
        "Código": "2022143",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "10",
        "Curso": "01",
        "Estudiante": "TORRES HERNANDEZ YAHIDELYN DEL CARMENTI",
        "TipoDoc": "1091393601",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 209,
        "Código": "2020076",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "BRAVO CARRILLO WILLIAM ENRIQUE TI 1093296279",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 210,
        "Código": "2022076",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "CARRERO DURAN MARIA ISABEL TI 1148684843",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 211,
        "Código": "2022134",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "CASTELLANOS RUBIO KAREN JULIETH TI 1019995426",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 212,
        "Código": "2019026",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "FERNANDEZ GUILLEN YEFERSON DANIEL CC",
        "TipoDoc": "4523543",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 213,
        "Código": "52161",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "FONSECA SUAREZ YADIR STIVEN TI 1093755405",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 214,
        "Código": "2014010",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "GONZALEZ CARREÑO KAREN LISET TI 1091361472",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 215,
        "Código": "2020032",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "HIDALGO BUITRAGO YENYFER DANIELA TI 1127926656",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 216,
        "Código": "50824",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "LEAL RODRIGUEZ EDWIN ALBEIRO RC 1094396123",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 217,
        "Código": "2019050",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "LEMUS RINCON ANTONY JESUS TI 1092157086",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 218,
        "Código": "50477",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "MANCIPE MARTINEZ EDINSON",
        "TipoDoc": "SNEIDER",
        "DocIden": "TI",
        "Ruta": ""
    },
    {
        "No": 219,
        "Código": "2022081",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "MENDEZ PINTO RONALGEL ESLEIDER TI 1148212727",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 220,
        "Código": "2020003",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "MONCADA RUIZ ABEL AARON CC",
        "TipoDoc": "1232396198",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 221,
        "Código": "2018055",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "OJEDA PEREZ ANIUSKA COROMOTO CC 5326051",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 222,
        "Código": "2017132",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "OVALLE SALON SAMUEL TI 1093300143",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 223,
        "Código": "52166",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "PAEZ MORA MARIA GABRIELA TI 1094221728",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 224,
        "Código": "2014116",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "PARRA VILLAMIZAR MARIA BELEN TI 1093300886",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 225,
        "Código": "2023132",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "RANGEL VELASQUEZ YANCLEY DAVID TI 1127051557",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 226,
        "Código": "2014058",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "RIVERA PACHECO JUAN SEBASTIAN TI 1090439441",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 227,
        "Código": "50819",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "RODRIGUEZ ROA PABLO ANDRES TI 1093750154",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 228,
        "Código": "2018115",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "11",
        "Curso": "01",
        "Estudiante": "TAPIAS FLOREZ JAIDER FABIAN TI",
        "TipoDoc": "1093751935",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 229,
        "Código": "2024116",
        "Sede": "02",
        "Jornada": "Mañana",
        "Grado": "03",
        "Curso": "01",
        "Estudiante": "LOPEZ TORRES SANTIAGO ALEJANDRO TI 1053450110",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 230,
        "Código": "2022012",
        "Sede": "05",
        "Jornada": "Mañana",
        "Grado": "03",
        "Curso": "01",
        "Estudiante": "CRUZ VILLAMIZAR MARIANGEL RC 1093797207",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "VADOS"
    },
    {
        "No": 231,
        "Código": "2019024",
        "Sede": "05",
        "Jornada": "Mañana",
        "Grado": "05",
        "Curso": "01",
        "Estudiante": "DELGADO RODRIGUEZ KEVIN",
        "TipoDoc": "SAMUEL",
        "DocIden": "TI",
        "Ruta": ""
    }
]

const divEstudiante = document.getElementById("estudiante");
const pNombre = document.getElementById("nombre");
const pCodigo = document.getElementById("codigo");
const pRuta = document.getElementById("ruta");
const pFecha = document.getElementById("fecha");


let estudiante = students.find(student => student.Código === "2016140")

function showcodes(code, ruta) {
    var timestamp = new Date();
    var formattedDate = timestamp.toLocaleDateString("es-CO", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: "America/Bogota"
    });

    let estudiante = students.find(student => student.Código === code && student.Ruta === ruta);
    if (!estudiante) {
        alert('No se encontró el estudiante con el código proporcionado o no corresponde a la ruta ' + ruta + '.');
        return;
    }

    // Actualizar el contenido en el HTML
    pNombre.innerText = `Nombre: ${estudiante.Estudiante}`;
    pCodigo.innerText = `Código: ${estudiante.Código}`;
    pRuta.innerText = `Ruta: ${estudiante.Ruta}`;
    pFecha.innerText = `Fecha: ${formattedDate}`;

    // Hacer visible el div del estudiante
    divEstudiante.style.display = "block";
    estudiante_registrado = {
        "Nombre": estudiante.Estudiante,
        "Código": estudiante.Código,
        "Ruta": estudiante.Ruta,
        "Fecha": formattedDate
    };

    informes.push(estudiante_registrado);

    // Actualizar el archivo Excel
    exportToExcel(estudiante_registrado);

    alert(informes.length);
}


// console.log(informes.length)
// let table = document.getElementById("table-registrados");
// let tbody = table.querySelector("tbody");
// tbody.innerHTML = ""; // Limpiar el contenido existente
// informes.forEach(informe => {
//     let row = document.createElement("tr");
//     row.innerHTML = `
//         <td>${informe.Nombre}</td>
//         <td>${informe.Código}</td>
//         <td>${informe.Ruta}</td>
//         <td>${informe.Fecha}</td>
//     `;
//     tbody.appendChild(row);
// });
// // Mostrar la tabla

function exportToExcel(data) {
    const fileName = "informe.xlsx";
    let workbook, worksheet;

    try {
        // Intentar cargar el archivo existente
        const file = localStorage.getItem(fileName);
        if (file) {
            const workbookBlob = new Blob([Uint8Array.from(atob(file), c => c.charCodeAt(0))], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            workbook = XLSX.read(workbookBlob, { type: 'binary' });
            worksheet = workbook.Sheets["Informe"];
        } else {
            // Crear un nuevo libro y hoja si no existe
            workbook = XLSX.utils.book_new();
            worksheet = XLSX.utils.json_to_sheet([]);
            XLSX.utils.book_append_sheet(workbook, worksheet, "Informe");

            // Agregar encabezados si es un archivo nuevo
            worksheet["A1"] = { v: "Nombre" };
            worksheet["B1"] = { v: "Código" };
            worksheet["C1"] = { v: "Ruta" };
            worksheet["D1"] = { v: "Fecha" };
        }

        // Obtener el número de filas existentes
        const rowCount = XLSX.utils.sheet_to_json(worksheet).length + 1;

        // Agregar la nueva fila de datos
        worksheet[`A${rowCount}`] = { v: data.Nombre };
        worksheet[`B${rowCount}`] = { v: data.Código };
        worksheet[`C${rowCount}`] = { v: data.Ruta };
        worksheet[`D${rowCount}`] = { v: data.Fecha };

        // Actualizar el archivo Excel en el almacenamiento local
        const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
        const fileContent = btoa(Array.from(new Uint8Array(wbout.split("").map(c => c.charCodeAt(0)))).map(byte => String.fromCharCode(byte)).join(""));
        localStorage.setItem(fileName, fileContent);

        alert("Archivo Excel actualizado correctamente");
    } catch (error) {
        console.error("Error al crear o actualizar el archivo Excel:", error);
    }
}

function renderTable() {
    let table = document.getElementById("table-registrados");
    let tbody = table.querySelector("tbody");
    tbody.innerHTML = ""; // Limpiar el contenido existente

    informes.forEach(informe => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${informe.Nombre}</td>
            <td>${informe.Código}</td>
            <td>${informe.Ruta}</td>
            <td>${informe.Fecha}</td>
        `;
        tbody.appendChild(row);
    });
}
