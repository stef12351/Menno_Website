declare module 'react-modal-image' {
    import * as React from 'react';

    interface ModalImageProps {
        small: string;
        large: string;
        alt?: string;
        className?: string;
        hideDownload?: boolean;
        hideZoom?: boolean;
        showRotate?: boolean;
        imageBackgroundColor?: string;
        downloadFileName?: string;
    }

    const ModalImage: React.FC<ModalImageProps>;

    export default ModalImage;
}