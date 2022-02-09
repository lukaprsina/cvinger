import React, { useRef, useEffect } from 'react'

// https://stackoverflow.com/a/57926311/14393392
function useEventListener(eventName: string, handler: any, element: EventTarget | null = null) {
    // Create a ref that stores handler
    const savedHandler = useRef<(event: Event) => any>();
    const savedElement = useRef<EventTarget>();

    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(
        () => {
            // Make sure element supports addEventListener
            // On
            if (!element)
                savedElement.current = window;
            else
                savedElement.current = element;

            const refElement = savedElement.current;

            const isSupported = refElement && refElement.addEventListener;
            if (!isSupported) return;

            // Create event listener that calls handler function stored in ref
            const eventListener = (event: Event) => {
                if (typeof savedHandler.current != "undefined")
                    savedHandler.current(event)
            };

            // Add event listener
            refElement.addEventListener(eventName, eventListener);

            // Remove event listener on cleanup
            return () => {
                refElement.removeEventListener(eventName, eventListener);
            };
        },
        [eventName, element] // Re-run if eventName or element changes
    );
};

export default useEventListener