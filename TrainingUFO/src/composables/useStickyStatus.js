import { ref, onMounted, onUnmounted } from "vue";

export function useStickyStatus(plateRef) {
    const isStuck = ref(false);
    let observer = null;

    onMounted(() => {
        const plate = plateRef?.value;
        if (!plate) 
            return;

        observer = new IntersectionObserver(([entry]) => {
            isStuck.value = !entry.isIntersecting;
        });

        observer.observe(plate);
    });

    onUnmounted(() => observer?.disconnect());

    return { isStuck };
}