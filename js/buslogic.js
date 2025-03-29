const divEstudiante = document.getElementById("estudiante");
const pNombre = document.getElementById("nombre");
const pCodigo = document.getElementById("codigo");
const pRuta = document.getElementById("ruta");
const pFecha = document.getElementById("fecha");


const students = [
    {
        "No": 1,
        "Código": "2024037",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "01",
        "Curso": "01",
        "Estudiante": "ARRIETA MENDOZA XAVIEL ANTONIO NES",
        "TipoDoc": "N131626622432RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 2,
        "Código": "2024002",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "01",
        "Curso": "01",
        "Estudiante": "CELY DEPABLOS STEPHANIA KAROL RC 1030043380",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 3,
        "Código": "2024118",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "01",
        "Curso": "01",
        "Estudiante": "CONTRERAS RODRIGUEZ YEFRY JESUS RC 1092647343",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 4,
        "Código": "2025100",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "01",
        "Curso": "01",
        "Estudiante": "CUEVAS MATEUS DILAN MAURICIO",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 5,
        "Código": "2025084",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "01",
        "Curso": "01",
        "Estudiante": "FLOREZ MOSQUERA JAINNY LISBETH",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
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
        "No": 7,
        "Código": "2024036",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "01",
        "Curso": "01",
        "Estudiante": "NAVARRO MARTINEZ DEOVAINER JESUS",
        "TipoDoc": "NES",
        "DocIden": "N131626622424RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 8,
        "Código": "2024018",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "01",
        "Curso": "01",
        "Estudiante": "RAMIREZ OJEDA ARIANNA ISABELLA RC 1094226497",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 9,
        "Código": "2025072",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "01",
        "Curso": "01",
        "Estudiante": "VESGA SEGURA MARIANA",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
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
        "No": 11,
        "Código": "2023086",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "02",
        "Curso": "01",
        "Estudiante": "FLOREZ MENDOZA JHON SEBASTIAN RC",
        "TipoDoc": "1094225525",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 12,
        "Código": "2023114",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "02",
        "Curso": "01",
        "Estudiante": "MENDOZA MONTAÑEZ ASHLEY ABIGAIL RC",
        "TipoDoc": "1092547507",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 13,
        "Código": "2023150",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "02",
        "Curso": "01",
        "Estudiante": "NAVARRO MARTINEZ DEOVANIS JOSE",
        "TipoDoc": "NES",
        "DocIden": "N131626521023RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 14,
        "Código": "2023096",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "02",
        "Curso": "01",
        "Estudiante": "VALERO RIVERO EXIMAR SAMARA BERENICE PPT 6111236",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 15,
        "Código": "2022214",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "03",
        "Curso": "01",
        "Estudiante": "BARRERA MARQUEZ ASHLY ANTHONELLA TI",
        "TipoDoc": "1094396513",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 16,
        "Código": "2022192",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "03",
        "Curso": "01",
        "Estudiante": "BLANCO CONTRERAS YAIRETH ADRIANA RC",
        "TipoDoc": "1030042164",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
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
        "No": 19,
        "Código": "2021073",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "03",
        "Curso": "01",
        "Estudiante": "CELY DEPABLOS KLEIVER SMITH RC",
        "TipoDoc": "131625018178RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 20,
        "Código": "2022003",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "03",
        "Curso": "01",
        "Estudiante": "HERNANDEZ PINEDA THIAGO ANDRES RC",
        "TipoDoc": "1098807069",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 21,
        "Código": "2024057",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "03",
        "Curso": "01",
        "Estudiante": "MORA TAMAYO DANIEL HABRAN PPT 7231087",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 22,
        "Código": "2022067",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "03",
        "Curso": "01",
        "Estudiante": "NAVAS BAUTISTA",
        "TipoDoc": "JUANESTEBAN",
        "DocIden": "RC",
        "Ruta": ""
    },
    {
        "No": 23,
        "Código": "2022150",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "03",
        "Curso": "01",
        "Estudiante": "NAVAS GARCES ROTCEH MONSERRATT NES",
        "TipoDoc": "N131625295954RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 24,
        "Código": "2025026",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "03",
        "Curso": "01",
        "Estudiante": "ROZO ZAMBRANO JAVIER ALEJANDRO TI 1090525714",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 25,
        "Código": "2022269",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "03",
        "Curso": "01",
        "Estudiante": "SUAREZ ALBA HERSON DAVID RC 1092004658",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 26,
        "Código": "2025107",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "03",
        "Curso": "01",
        "Estudiante": "TELLEZ ROBLES KAMILA",
        "TipoDoc": "VALENTINA",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 27,
        "Código": "2021071",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "03",
        "Curso": "01",
        "Estudiante": "TORRES SARMIENTO LUIS ANGEL RC 1093795772",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 28,
        "Código": "2022031",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "04",
        "Curso": "01",
        "Estudiante": "ACOSTA VELASCO MARBELIS KATERIN RC 1148213998",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
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
        "No": 30,
        "Código": "2023077",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "04",
        "Curso": "01",
        "Estudiante": "GARCIA SERRANO DIEGO ALEJANDRO TI 1091389703",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 31,
        "Código": "2021064",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "04",
        "Curso": "01",
        "Estudiante": "LAGUADO TUBERQUIA JUAN DANIEL TI",
        "TipoDoc": "1094224533",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 32,
        "Código": "2021065",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "04",
        "Curso": "01",
        "Estudiante": "LEAL RODRIGUEZ DORIS YASMIN RC 1093194421",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 33,
        "Código": "2021044",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "04",
        "Curso": "01",
        "Estudiante": "MAYORGA DELGADO LAURA VALENTINA RC",
        "TipoDoc": "1093793486",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 34,
        "Código": "2025104",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "04",
        "Curso": "01",
        "Estudiante": "MOLINA MONCADA KLEYVER",
        "TipoDoc": "JOSE",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 35,
        "Código": "2022001",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "04",
        "Curso": "01",
        "Estudiante": "ORTIZ ROZO JHOINER SEBASTIAN TI",
        "TipoDoc": "1094224749",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 36,
        "Código": "2021046",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "04",
        "Curso": "01",
        "Estudiante": "RAMIREZ OJEDA SCARLETT SHANIE TI",
        "TipoDoc": "1094224790",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
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
        "No": 38,
        "Código": "2021047",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "05",
        "Curso": "01",
        "Estudiante": "BARRIOS RIVERO EDISMAR PAOLA PPT 6086654",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 39,
        "Código": "2024054",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "05",
        "Curso": "01",
        "Estudiante": "BERBESI BUENO JEZREL HEBZIBA TI",
        "TipoDoc": "1094276416",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 40,
        "Código": "2025083",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "05",
        "Curso": "01",
        "Estudiante": "BRICEÑO PEREZ LUISANA VALENTINA",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 41,
        "Código": "2025029",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "05",
        "Curso": "01",
        "Estudiante": "CELY CACERES RAFAEL ANDRES TI 1092541775",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
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
        "No": 43,
        "Código": "2024076",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "05",
        "Curso": "01",
        "Estudiante": "DURAN PEREZ CRISTIAN RONALDO TI 1091077393",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 44,
        "Código": "2024093",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "05",
        "Curso": "01",
        "Estudiante": "GARCIA MONCADA YINDER SMITH NES",
        "TipoDoc": "N44755418573RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 45,
        "Código": "2023046",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "05",
        "Curso": "01",
        "Estudiante": "GUILLEN PINTO LUIS ELIAS NES",
        "TipoDoc": "N131626441384RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 46,
        "Código": "2023125",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "05",
        "Curso": "01",
        "Estudiante": "GUILLEN PINTO LUIS EMMANUEL NES",
        "TipoDoc": "N131626441389RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
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
        "No": 48,
        "Código": "2025017",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "BONILLA CARDENAS MELANIE STEFANIA TI 1093782021",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 49,
        "Código": "2017104",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "BUITRAGO BARON ZAMIR STIVEN TI 1093774552",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 50,
        "Código": "2019053",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "BUSTOS DIAZ LILIBETH VALERIA TI 1091365341",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 51,
        "Código": "2025127",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "CARDENAS MORA ROBINSON CAMILO",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 52,
        "Código": "2018111",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "CELY DEPABLOS LITZY MILEIDY NES",
        "TipoDoc": "N131624153761RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
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
        "No": 54,
        "Código": "2025061",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "GARCIA MARIN",
        "TipoDoc": "EMMANUEL",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
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
        "No": 56,
        "Código": "2025048",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "JULIO CARMONA ELIAS DAVID TI",
        "TipoDoc": "1085111437",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 57,
        "Código": "2017030",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "LEAL RODRIGUEZ BRAYAN FABIAN RC 1093770787",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 58,
        "Código": "2025019",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "MEJIA MIRANDA Deisy Carolina TI 1.126.126.020",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 59,
        "Código": "2019002",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "MOJICA PABON SHAYRA MELISSA TI",
        "TipoDoc": "1094223560",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 60,
        "Código": "2019056",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "MONTAÑEZ HOLGUIN SAMUEL TI",
        "TipoDoc": "1094223869",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 61,
        "Código": "2023015",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "PEREZ DURAN ELKIN ANDRES TI 1139125766",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 62,
        "Código": "2023164",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "01",
        "Estudiante": "RODRIGUEZ FLOREZ JUAN JOSE TI",
        "TipoDoc": "1091988782",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
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
        "No": 65,
        "Código": "2025069",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "ALDANA RINCON SHARAY VALENTINA TI",
        "TipoDoc": "1092541997",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 66,
        "Código": "2024067",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "ARIAS BALAGUERA FRANCY DARIANNA NES",
        "TipoDoc": "N131626654061RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 67,
        "Código": "2025117",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "CALIXTO RIOS IRENE SOFIA",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
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
        "No": 69,
        "Código": "2025116",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "CONTRERAS FERRER MILLAN JUSSIE",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
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
        "No": 72,
        "Código": "2024066",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "DELGADO PARADA DANNA VANESA TI 1093775401",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 73,
        "Código": "2019109",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "FERNANDEZ RODRIGUEZ MILIANGELYS",
        "TipoDoc": "VALENTINNEAS",
        "DocIden": "N131624382917RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 74,
        "Código": "2024099",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "GARCIA PABA NATALIA NATACHA",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 75,
        "Código": "2025079",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "GRATEROL NIÑO AARON",
        "TipoDoc": "JOSUE",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 76,
        "Código": "2025060",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "HIDALGO MOYETONES DARIANYER SOFIA",
        "TipoDoc": "NES",
        "DocIden": "N131626901121RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 77,
        "Código": "2025041",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "MANRIQUE SALAZAR ALLISON BRIGITH TI",
        "TipoDoc": "1093141315",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 78,
        "Código": "2022273",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "MATEUS SERRANO WHITNEY ARANZA TI 1094396377",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 79,
        "Código": "2025037",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "PATIÑO VELASCO BEIKLER JHOSEF PPT 7123889",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 80,
        "Código": "2019015",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "PEÑALOZA CORTES DAYRON ALEXIS RC 1094223504",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 81,
        "Código": "2023079",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "PEREZ ESPAÑA SCARLIS VALENTINA",
        "TipoDoc": "NES",
        "DocIden": "N131626451015RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 82,
        "Código": "2022116",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "PEREZ JAIMES NORYELIS NATALY PPT",
        "TipoDoc": "N6848907",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 83,
        "Código": "2025039",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "PERNIA PEREZ GABRIELA ANDREINA PN",
        "TipoDoc": "1546",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 84,
        "Código": "2025058",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "RAMIREZ MENDOZA THOMAS",
        "TipoDoc": "FELIPE",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 85,
        "Código": "2023110",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "RODRIGUEZ PEREZ ANGELA JADITH TI 1091992874",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 86,
        "Código": "2019120",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "SOLORZANO RUIZ DEYLANI LISBETH",
        "TipoDoc": "NUIP",
        "DocIden": "N63794331107RUTA",
        "Ruta": "CALIFORNIA"
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
        "No": 88,
        "Código": "2025030",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "VASQUEZ BARAJAS MIGUEL ANTONIO TI 1092354563",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 89,
        "Código": "2025128",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "06",
        "Curso": "02",
        "Estudiante": "YLARRAZA ROMERO DAMARIS ALEJANDRA",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 90,
        "Código": "2023021",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "ACUÑA MENDOZA SILVIA CAMILA TI",
        "TipoDoc": "1094223125",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 91,
        "Código": "2025016",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "BAUTISTA BARROSO DANIELA ESPERANZA TI",
        "TipoDoc": "1094291588",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 92,
        "Código": "2024117",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "BERBESI RODRIGUEZ LADY VALENTINA TI 1092954621",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 93,
        "Código": "2023091",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "BORRERO DURAN LUCIANA TI 1092954051",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 94,
        "Código": "2019025",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "BRICEÑO GUILLEN DIEGO ALEJANDRO RC",
        "TipoDoc": "1214215586",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 95,
        "Código": "2015001",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "BUITRAGO BARON LAURA CECILIA TI 1093760593",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 96,
        "Código": "2025020",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "CAEZ AVILA JESUS LEONARDO TI",
        "TipoDoc": "1095821928",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 97,
        "Código": "2025115",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "CONTRERAS FERRER OWHER PARISS",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 98,
        "Código": "2025015",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "GONZALEZ RODRIGUEZ JOHAN ANDREY TI 1092953848",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 99,
        "Código": "2024104",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "HERNANDEZ SILVA ANTONY GABRIEL TI",
        "TipoDoc": "1127055807",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 100,
        "Código": "2025044",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "JULIO CARMONA ANYELA MARIANA TI",
        "TipoDoc": "1085110747",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
    },
    {
        "No": 101,
        "Código": "2018056",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "OJEDA PEREZ KEYLER SEBASTIAN PPT 5325396",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 102,
        "Código": "2018099",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "ORTEGA RODRIGUEZ LILIAN VALERIA RC",
        "TipoDoc": "1094223190",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 103,
        "Código": "2025099",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "PAEZ ZAPATA DANNA",
        "TipoDoc": "VALENTINA",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 104,
        "Código": "2023136",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "RANGEL VELASQUEZ DANNA VALERIA TI 1093767597",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
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
        "No": 106,
        "Código": "2018094",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "SOLANO LOPEZ DANIEL ESTIBEN TI 1093306083",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
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
        "No": 108,
        "Código": "2022164",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "URQUIJO GARCIA JHON GENDERSON TI 1093779211",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 109,
        "Código": "2018044",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "01",
        "Estudiante": "VILLADIEGO PEREZ JUAN PABLO TI",
        "TipoDoc": "1093777757",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 110,
        "Código": "2025068",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "ALDANA RINCON LUISA FERNANDA TI",
        "TipoDoc": "1092538977",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
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
        "No": 112,
        "Código": "2019094",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "BERMON SOLORZANO HISSELLY YAMILETH NES",
        "TipoDoc": "N131624329273RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 113,
        "Código": "2019118",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "BLANCO PARRA LUIS SANTIAGO TI",
        "TipoDoc": "1094222797",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
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
        "No": 115,
        "Código": "2022139",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "CARRERO RAMOS JHEIMER JOSE NES",
        "TipoDoc": "N38015030206RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 116,
        "Código": "2020091",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "CARTAYA VELIZ BRIANDERLYS YEISMAR PPT 5986527",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 117,
        "Código": "2024065",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "CASANOVA MORENO HENYELI VALENTINA PPT 6035213",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
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
        "No": 119,
        "Código": "2017110",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "FLOREZ MENDOZA MAICOL ESTIBEN TI",
        "TipoDoc": "1094222919",
        "DocIden": "RUTA",
        "Ruta": "COROZAL"
    },
    {
        "No": 120,
        "Código": "2023044",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "GRANADILLO ZERPA MARIANGELES VALENTINAPEP 7139679",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 121,
        "Código": "2020089",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "GUTIERREZ CORONADO BRIANNY BRISLEY PPT 6158979",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 122,
        "Código": "2025108",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "PABON ROJAS SANTIAGO",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 123,
        "Código": "2018095",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "PEÑALOZA SIERRA SARA VALERIA TI 1094223261",
        "TipoDoc": "RUTA",
        "DocIden": "LA",
        "Ruta": "MUTIS"
    },
    {
        "No": 124,
        "Código": "2022222",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "PIÑANGO MENDOZA MARIANNY ANTONELLA PPT 5257100",
        "TipoDoc": "RUTA",
        "DocIden": "LOS",
        "Ruta": "PATIOS"
    },
    {
        "No": 125,
        "Código": "2024068",
        "Sede": "01",
        "Jornada": "Mañana",
        "Grado": "07",
        "Curso": "02",
        "Estudiante": "PIZA PEÑALOZA YEIDEN SAMUEL TI",
        "TipoDoc": "1093766872",
        "DocIden": "RUTA",
        "Ruta": "CALIFORNIA"
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


let estudiante = students.find(student => student.Código === "2016140")
// console.log(estudiante)
// console.log(estudiante.Estudiante)
// console.log(students[0]["Código"])

function showcodes(code) {
    var timestamp = new Date();
    var formattedDate = timestamp.toLocaleDateString("es-CO", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: "America/Bogota"
    });

    let estudiante = students.find(student => student.Código === code);
    if (!estudiante) {
        console.log("No se encontró el estudiante con el código proporcionado.");
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
