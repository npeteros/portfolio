import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export function useScrollReveal() {
  useEffect(() => {
    const scroll = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 500,
      //   reset: true,
    });

    scroll.reveal("#home");
    scroll.reveal("#about");
    scroll.reveal("#experience");
    scroll.reveal("#skills");
    scroll.reveal("#projects");
    scroll.reveal("#certificates");
    scroll.reveal("#contact");
    scroll.reveal("#content", { delay: 400, interval: 600 });
    scroll.reveal("#content-2", { delay: 600 });
    scroll.reveal("#content-3", { delay: 800 });
  }, []);
}
