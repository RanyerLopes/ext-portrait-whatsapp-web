export const chatsColumn = () => document.querySelectorAll('div:has(> header [title])')[1];
export const messagesColumn = () => chatsColumn().nextElementSibling;
export const buttonChats = () => document.querySelector('button[aria-label]:has([data-icon=chats-filled])');
export const chatsList = () => document.querySelector('#pane-side > div > div > [aria-label]');
