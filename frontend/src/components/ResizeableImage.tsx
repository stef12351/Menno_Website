import React, { useState, useRef } from 'react';

interface ResizableImageProps {
    src: string;
    alt: string;
    initialWidth?: number;
    maxWidth?: number;
    minWidth?: number;
}

const ResizableImage: React.FC<ResizableImageProps> = ({
    src,
    alt,
    initialWidth = 300,
    maxWidth = 800,
    minWidth = 100
}) => {
    const [width, setWidth] = useState(initialWidth);
    const [isDragging, setIsDragging] = useState(false);
    const startXRef = useRef(0);
    const startWidthRef = useRef(width);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        startXRef.current = e.clientX;
        startWidthRef.current = width;
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            const deltaX = e.clientX - startXRef.current;
            const newWidth = startWidthRef.current + deltaX;

            if (newWidth >= minWidth && newWidth <= maxWidth) {
                setWidth(newWidth);
            }
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    React.useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className="relative inline-block" style={{ width: `${width}px` }}>
            <img
                src={src}
                alt={alt}
                className="max-w-full h-auto"
            />
            <div
                className="absolute -right-2 -bottom-2 w-4 h-4 bg-[#006039] cursor-se-resize rounded-sm"
                onMouseDown={handleMouseDown}
            />
        </div>
    );
};

export default ResizableImage;