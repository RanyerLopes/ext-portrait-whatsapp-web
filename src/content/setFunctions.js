import { backToChats, goToMessages } from "./portraitListeners";
import { buttonChats, chatsColumn, chatsList, messagesColumn } from "./DOMElements";

export function setToPortrait() {
  const chatsColumnEl = chatsColumn();
  const messagesColumnEl = messagesColumn();
  const chatsListEl = chatsList();
  const buttonChatsEl = buttonChats();

  chatsColumnEl.parentElement.style.width = window.innerWidth + 'px';
  chatsColumnEl.parentElement.style.minWidth = 'initial';
  chatsColumnEl.style.width = '100%';
  chatsColumnEl.style.maxWidth = 'initial';
  chatsColumnEl.style.flex = 'initial';
  messagesColumnEl.style.width = '100%';
  messagesColumnEl.style.display = 'none';

  chatsListEl.addEventListener('click', goToMessages);
  buttonChatsEl.addEventListener('click', backToChats);

  localStorage.setItem('portrait-mode-whatsapp-web', JSON.stringify(1));
}

export function setToDefault() {
  const chatsColumnEl = chatsColumn();
  const messagesColumnEl = messagesColumn();
  const chatsListEl = chatsList();
  const buttonChatsEl = buttonChats();

  chatsColumnEl.parentElement.setAttribute('style', '');
  chatsColumnEl.setAttribute('style', '');
  messagesColumnEl.setAttribute('style', '');

  chatsListEl.removeEventListener('click', goToMessages);
  buttonChatsEl.removeEventListener('click', backToChats);

  localStorage.setItem('portrait-mode-whatsapp-web', JSON.stringify(0));
}
