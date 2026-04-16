import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.matchMedia(query).matches;
        }
        return false;
    });

    useEffect(() => {
        const media = window.matchMedia(query);
        // Sync immediately in case it changed between render and effect
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

        // Use the proper MediaQueryList API — Safari iOS doesn't reliably fire
        // window 'resize' when the browser toolbar slides in/out, but 'change'
        // on the MediaQueryList always fires correctly.
        if (typeof media.addEventListener === 'function') {
            media.addEventListener('change', listener);
            return () => media.removeEventListener('change', listener);
        } else {
            // Legacy fallback (Safari < 14)
            media.addListener(listener);
            return () => media.removeListener(listener);
        }
    }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

    return matches;
}
