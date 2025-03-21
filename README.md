# Portrait WhatsApp Web Extension

This browser extension enhances WhatsApp Web's behavior on smaller, portrait viewports (like tablets or narrow browser windows). It replicates the mobile app experience by enabling a click-to-expand functionality on chats within the chat list.

## 🎯 Features

✅ Expand chat messages on click — Just like on WhatsApp's mobile app.

✅ Optimized for portrait mode — Enhances usability on narrow screens.

✅ Lightweight and fast — Minimal performance impact.

## 🚀 Installation

### Requirements
- **NodeJS**
- **NPM or Yarn**

> [!NOTE]
> At the moment extension not released in Chrome Web Store or Mozilla Firefox extensions store

#### 1. Clone this repository:
#### 2. Install dependencies and build extension:
Using Yarn:
```bash
   yarn install && yarn build
```
Using NPM:
```bash
   npm install && npm run build
```
_The directory `dist` must be created._

#### 3. Open your browser's extension page:
Chrome: Go to [chrome://extensions/](chrome://extensions/)

Edge: Go to [edge://extensions/](edge://extensions/)

Firefox: Go to [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox)

#### 4. Enable Developer mode.

#### 5. Click "Load unpacked" and select the `dist` directory in project.

## 🛠️ Usage

Open WhatsApp Web.

Resize your window to a narrow, portrait-like viewport.

Click on any chat in the list to expand it — similar to how WhatsApp behaves on mobile.

## 🧠 How it works

The extension listens to window resize events and applies a mobile-like behavior to the UI. It ensures that:

When in portrait mode (narrow width), chats only expand when clicked.

When returning to wider screens, the default WhatsApp Web behavior comes back.

# 📌 Roadmap

🔜 Web Store Release — Publish the extension on the Chrome Web Store for easier installation.

🔜 Release CRX on Repository Packages — Provide a .crx packaged version directly in the repository for manual installation.

# 💡 Contributing

Feel free to fork the project and submit pull requests! All ideas, improvements, and bug fixes are welcome.

# 📄 License

This project is licensed under the MIT License.
