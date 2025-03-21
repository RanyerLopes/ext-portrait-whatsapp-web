import { setToDefault, setToPortrait } from "./content/setFunctions";

let resizeTimeout;

const intervalId = setInterval(() => {
  try {
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        const isPortraitMode = !!JSON.parse(localStorage.getItem('portrait-mode-whatsapp-web'));
        if (window.innerWidth <= 748) {
          setToPortrait();
        } else if (isPortraitMode) {
          setToDefault();
        }
      }, 100);
    });

    clearInterval(intervalId);
  } catch (err) {}
}, 1000);
