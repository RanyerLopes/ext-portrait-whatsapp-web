export const chatsColumn = () => document.querySelector('div:has(> header [title=Chats])');
export const messagesColumn = () => chatsColumn().nextElementSibling;
export const buttonChats = () => document.querySelector('button[aria-label=Chats]:has([data-icon=chats-filled])');
export const chatsList = () => document.querySelector('[aria-label="Chat list"]');
