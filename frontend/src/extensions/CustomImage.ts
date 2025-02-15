import Image, { ImageOptions } from '@tiptap/extension-image';

const CustomImage = Image.extend<ImageOptions>({
    addOptions() {
        return {
            ...this.parent?.(),
            // Your custom option here
            handlePaste: () => false,
        };
    },
});

export default CustomImage;