import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Dev-only: ensure no previously-installed service worker hijacks Vite module requests.
// This commonly causes "Failed to load module script ... MIME type text/html" and a blank page.
if (import.meta.env.DEV && "serviceWorker" in navigator) {
  const SW_CLEANUP_KEY = "__dev_sw_cleanup_done__";
  void navigator.serviceWorker.getRegistrations().then(async (regs) => {
    if (regs.length === 0) return;
    await Promise.all(regs.map((r) => r.unregister()));
    // Reload once after unregister so the page is no longer controlled.
    if (!sessionStorage.getItem(SW_CLEANUP_KEY)) {
      sessionStorage.setItem(SW_CLEANUP_KEY, "1");
      window.location.reload();
    }
  });
}

createRoot(document.getElementById("root")!).render(<App />);
