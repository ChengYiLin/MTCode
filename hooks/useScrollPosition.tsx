import type { DependencyList } from 'react';
import { useRef, useEffect } from 'react';

interface IPosition {
    x: number;
    y: number;
}

interface IScrollProps {
    prevPos: IPosition;
    currPos: IPosition;
}

const getScrollPosition = () => {
    if (typeof window === 'undefined') {
        return { x: 0, y: 0 };
    }

    const targetPosition = document?.body?.getBoundingClientRect();

    return {
        x: targetPosition.x,
        y: targetPosition.y,
    };
};

const useScrollPosition = (
    onScollCallBack: (props: IScrollProps) => void,
    dependency: DependencyList
) => {
    const position = useRef(getScrollPosition());

    const handleScroll = () => {
        const currentPosition = getScrollPosition();
        onScollCallBack({
            prevPos: position.current,
            currPos: currentPosition,
        });

        position.current = currentPosition;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, dependency);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
};

export default useScrollPosition;
