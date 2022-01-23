// Сдвиг карты в мобильной версии, чтобы блок не перекрыл середину карты
export function addOffset(map) {
    const offsetY = map.getSize().y * 0.1;

    map.panBy([0, -offsetY], {animate: false});
}