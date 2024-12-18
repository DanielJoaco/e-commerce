import json
from collections import defaultdict

try:
    with open('./src/data.json', 'r', encoding='utf-8') as file:
        data = json.load(file)
except FileNotFoundError:
    print("File not found. Please check the file path.")
    data = []

print(data)
# Group by table (category)
grouped_data = defaultdict(list)

for item in data:
    grouped_data[item["table"]].append(item)

# Reiniciar IDs dentro de cada categoría
for category, items in grouped_data.items():
    for new_id, item in enumerate(items, start=1):
        item["id"] = new_id  # Reinicia el ID para cada categoría

# Convert defaultdict a un diccionario regular para guardar en JSON
grouped_data = dict(grouped_data)

# Guardar en un archivo JSON
output_file = "grouped_data.json"
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(grouped_data, f, ensure_ascii=False, indent=4)