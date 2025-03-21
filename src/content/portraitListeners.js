import { chatsColumn, messagesColumn } from "./DOMElements";

export function backToChats(){
  const messagesColumnEl = messagesColumn();
  const chatsColumnEl = chatsColumn();

  messagesColumnEl.style.display = 'none';
  chatsColumnEl.style.display = 'flex';
}

export function goToMessages(ev) {
  if (ev.target.dataset.icon === 'chevron') {
    return;
  }

  const messagesColumnEl = messagesColumn();
  const chatsColumnEl = chatsColumn();

  messagesColumnEl.style.display = 'block';
  chatsColumnEl.style.display = 'none';
}

export function resizeListener() {

}
