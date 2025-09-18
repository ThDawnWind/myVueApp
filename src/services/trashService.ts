import type { Todo } from "../types/todo";

export function saveTrash(trash: Todo[]) {
  localStorage.setItem("trash", JSON.stringify(trash));
}

export function loadTrash(): Todo[] {
  const saved = localStorage.getItem("trash");
  return saved ? JSON.parse(saved) : [];
}
