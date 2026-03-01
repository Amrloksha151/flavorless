function remove (target, id) {
    target = target.filter( i => i.id !== id);
    localStorage.setItem("INCOMES", JSON.stringify(INCOMES));
}

(() => {
    document.addEventListener('DOMContentLoaded', (event) => {})
})();