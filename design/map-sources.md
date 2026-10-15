# Географическая основа карты ЯНАО

Контур: geoBoundaries gbOpen RUS ADM1, feature RU-YAN, shapeID 28173009B47279883421777. Источник набора: OpenStreetMap / Wambacher. Представленный год границ — 2017; сборка geoBoundaries — 12 декабря 2023. Генерализованная геометрия предназначена для обзорной карты, не кадастра.

Метаданные: https://www.geoboundaries.org/api/current/gbOpen/RUS/ADM1/
Файл: https://media.githubusercontent.com/media/wmgeolab/geoBoundaries/9469f09/releaseData/gbOpen/RUS/ADM1/geoBoundaries-RUS-ADM1_simplified.geojson
Лицензия: Open Data Commons Open Database License 1.0; https://www.openstreetmap.org/copyright . На сайте сохранена атрибуция со ссылкой на источник.

Координаты восьми городов: GeoNames, populated places, https://www.geonames.org/advanced-search.html?country=RU&q=Jamalo-Neneckij&startRow=0 . Координаты исходных точек находятся в src/data/map.ts вместе с проецированными координатами. Выноски меняют только положение подписей, не точки городов.

Проекция: коническая равноугольная Ламберта; стандартные параллели 64° и 72° с. ш., центральный меридиан 74° в. д., начало 68° с. ш. Единый масштаб для контура, городов и градусной сетки; SVG preserveAspectRatio="xMidYMid meet". Географические проекции имеют искажения; выбранная проекция подходит для обзорной карты на северных широтах.

Воспроизведение: node scripts/generate-map.cjs. Исходный выделенный GeoJSON: src/data/yamal.geojson. Сборка сайта использует статические пути SVG из src/data/map.ts, не загружает внешний картографический сервис.
