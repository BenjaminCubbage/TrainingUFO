import { onMounted, onUnmounted } from "vue";
import { setCSSVar } from "@/util/cssVar";

export function useDOMReactiveCSSVar(targetRef, scopeRef, varName, computeValue) {
  let resizeObserver = null;
  let mutationObserver = null;

  function update() {
    const el = targetRef?.value;
    const scope = scopeRef?.value;
    
    if (!el || !scope) 
        return;

    try {
      const value = computeValue(el);
      setCSSVar(varName, value, scope);
    } catch (err) {
      console.warn(`[useDOMReactiveCSSVar] Failed to compute value for ${varName}:`, err);
    }
  };

  onMounted(() => {
    const el = targetRef?.value;

    if (!el) 
        return;

    resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(el);

    mutationObserver = new MutationObserver(update);
    mutationObserver.observe(el, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    requestAnimationFrame(update);
    window.addEventListener("resize", update);
  });

  onUnmounted(() => {
    resizeObserver?.disconnect();
    mutationObserver?.disconnect();
    window.removeEventListener("resize", update);
  });

  return { update };
}