# Portrait WhatsApp Web Extension

Esta extensão de navegador melhora o comportamento do WhatsApp Web em viewports menores e no modo retrato (como tablets ou janelas de navegador estreitas). Ela replica a experiência do aplicativo móvel ao habilitar uma funcionalidade de clique para expandir nas conversas dentro da lista de chats.

## 🎯 Features
✅ Expandir mensagens de chat ao clicar — Igual ao aplicativo móvel do WhatsApp.

✅ Otimizado para modo retrato — Melhora a usabilidade em telas estreitas.

✅ Leve e rápido — Impacto mínimo no desempenho.

## 🚀 Instalação
### Requisitos
- **NodeJS**
- **NPM or Yarn**

> [!NOTE]
> No momento, a extensão não foi lançada na Chrome Web Store ou na loja de extensões do Mozilla Firefox

#### 1. Clone este repositório:
#### 2. Instale as dependências e construa a extensão:
Usando Yarn:
```bash
   yarn install && yarn build
```
Usando NPM:
```bash
   npm install && npm run build
```
_O diretório `dist` deve ser criado._

#### 3. Abra a página de extensões do seu navegador:
Chrome: Acesse [chrome://extensions/](chrome://extensions/)

Edge: Acesse [edge://extensions/](edge://extensions/)

Firefox: Acesse [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox)

#### 4. Habilite o modo Desenvolvedor.

#### 5. Clique em "Carregar descompactado" e selecione o diretório `dist` no projeto.

## 🛠️ Uso

Abra o WhatsApp Web.

Redimensione sua janela para um viewport estreito, semelhante ao modo retrato.

Clique em qualquer chat na lista para expandi-lo — similar ao comportamento do WhatsApp no celular.

## 🧠 Como funciona

A extensão escuta eventos de redimensionamento da janela e aplica um comportamento semelhante ao aplicativo mobile ao acessar os chats. Ela garante que:

Quando estiver no modo retrato (largura estreita), os chats só se expandam ao serem clicados.

Ao voltar para telas mais largas, o comportamento padrão do WhatsApp Web retorna.

# 📌 Roadmap

🔜 Lançamento na Web Store — Publicar a extensão na Chrome Web Store para facilitar a instalação.

🔜 Lançamento de CRX nos Pacotes do Repositório — Fornecer uma versão empacotada .crx diretamente nesse repositório para instalação manual.

# 💡 Contrição

Sinta-se à vontade para fazer um fork do projeto e enviar pull requests! Todas as ideias, melhorias e correções de bugs são bem-vindas.

# 📄 Licença

Este projeto está licenciado sob a Licença MIT.
