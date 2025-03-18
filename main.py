import pdfplumber
import pandas as pd
import json

# Ruta del archivo PDF
pdf_path = "students_bus.pdf"

# Lista para almacenar los datos
records = []

# Leer el PDF
with pdfplumber.open(pdf_path) as pdf:
    for page in pdf.pages:
        text = page.extract_text()
        if text:
            lines = text.split("\n")
            for line in lines:
                parts = line.split()
                if len(parts) >= 9:  # Verificar que la línea tiene suficientes datos
                    record = {
                        "No": parts[0],
                        "Código": parts[1],
                        "Sede": parts[2],
                        "Jornada": parts[3],
                        "Grado": parts[4],
                        "Curso": parts[5],
                        "Estudiante": " ".join(parts[6:-3]),  # Nombre completo
                        "TipoDoc": parts[-3],
                        "DocIden": parts[-2],
                        "Ruta": parts[-1],
                    }
                    records.append(record)

# Convertir a DataFrame
df = pd.DataFrame(records)

# Guardar como Excel
excel_path = "students_bus2.xlsx"
df.to_excel(excel_path, index=False)

# Guardar como JSON
json_path = "students_bus2.json"
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(records, f, ensure_ascii=False, indent=4)

print(f"Archivos generados: {excel_path}, {json_path}")
