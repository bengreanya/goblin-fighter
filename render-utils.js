export function renderGoblin(goblinData) {
    const goblinEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinsListEl.classList.add('goblin');
    nameEl.textContent = goblinData.name;
    hpEl.id = `goblin-face-${goblinData.id}`;
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;
    faceEl.id = `goblin-face-${goblinData.id}`;
    faceEl.textContent = goblinData.hp > 0 ? '👺' : '💀';
    if (goblinData.hp < 0) {
        goblinEl.classList.add('killed');
    }
    goblinData.El.append(nameEl, faceEl, hpEl);
    return goblinEl;
}
