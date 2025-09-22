export function saveTrash(trash) {
    localStorage.setItem("trash", JSON.stringify(trash));
}
export function loadTrash() {
    const saved = localStorage.getItem("trash");
    return saved ? JSON.parse(saved) : [];
}
