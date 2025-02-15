import React, { useState } from 'react';
import { Editor } from '@tiptap/react';

interface MenuBarProps {
    editor: Editor | null;
}

const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
    const [showColorPicker, setShowColorPicker] = useState(false);

    if (!editor) {
        return null;
    }

    const handleButtonClick = (e: React.MouseEvent, callback: () => void) => {
        e.preventDefault();
        callback();
    };

    const colors = [
        '#000000',
        '#006039',
        '#A4C2C2',
        '#EF4444',
        '#F59E0B',
        '#10B981',
        '#3B82F6',
    ];

    return (
        <div className="border-b border-gray-200 p-2 flex flex-wrap gap-2">
            <button
                type="button"
                onClick={(e) => handleButtonClick(e, () => editor.chain().focus().toggleBold().run())}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`p-2 rounded ${editor.isActive('bold') ? 'bg-gray-200' : ''}`}
            >
                bold
            </button>
            <button
                type="button"
                onClick={(e) => handleButtonClick(e, () => editor.chain().focus().toggleItalic().run())}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`p-2 rounded ${editor.isActive('italic') ? 'bg-gray-200' : ''}`}
            >
                italic
            </button>
            <button
                type="button"
                onClick={(e) => handleButtonClick(e, () => editor.chain().focus().toggleUnderline().run())}
                className={`p-2 rounded ${editor.isActive('underline') ? 'bg-gray-200' : ''}`}
            >
                underline
            </button>
            <button
                type="button"
                onClick={(e) => handleButtonClick(e, () => editor.chain().focus().toggleStrike().run())}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={`p-2 rounded ${editor.isActive('strike') ? 'bg-gray-200' : ''}`}
            >
                strike
            </button>
            <button
                type="button"
                onClick={(e) => handleButtonClick(e, () => editor.chain().focus().setParagraph().run())}
                className={`p-2 rounded ${editor.isActive('paragraph') ? 'bg-gray-200' : ''}`}
            >
                paragraph
            </button>
            <button
                type="button"
                onClick={(e) => handleButtonClick(e, () => editor.chain().focus().toggleHeading({ level: 1 }).run())}
                className={`p-2 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''}`}
            >
                h1
            </button>
            <button
                type="button"
                onClick={(e) => handleButtonClick(e, () => editor.chain().focus().toggleHeading({ level: 2 }).run())}
                className={`p-2 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''}`}
            >
                h2
            </button>
            <button
                type="button"
                onClick={(e) => handleButtonClick(e, () => editor.chain().focus().toggleHeading({ level: 3 }).run())}
                className={`p-2 rounded ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200' : ''}`}
            >
                h3
            </button>
            <button
                type="button"
                onClick={(e) => handleButtonClick(e, () => editor.chain().focus().toggleBulletList().run())}
                className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-gray-200' : ''}`}
            >
                bullet list
            </button>
            <button
                type="button"
                onClick={(e) => handleButtonClick(e, () => editor.chain().focus().toggleOrderedList().run())}
                className={`p-2 rounded ${editor.isActive('orderedList') ? 'bg-gray-200' : ''}`}
            >
                ordered list
            </button>
            <button
                type="button"
                onClick={(e) => handleButtonClick(e, () => editor.chain().focus().toggleCodeBlock().run())}
                className={`p-2 rounded ${editor.isActive('codeBlock') ? 'bg-gray-200' : ''}`}
            >
                code block
            </button>
            <button
                type="button"
                onClick={(e) => handleButtonClick(e, () => editor.chain().focus().toggleBlockquote().run())}
                className={`p-2 rounded ${editor.isActive('blockquote') ? 'bg-gray-200' : ''}`}
            >
                blockquote
            </button>
            <div className="border-l pl-2 flex items-center gap-1">
                {colors.map((color) => (
                    <button
                        key={color}
                        type="button"
                        onClick={(e) => handleButtonClick(e, () => editor.chain().focus().setColor(color).run())}
                        className={`w-6 h-6 rounded-md border ${editor.isActive('textStyle', { color }) ? 'ring-2 ring-offset-1 ring-black' : ''
                            }`}
                        style={{ backgroundColor: color }}
                        title={color}
                    />
                ))}

                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setShowColorPicker(!showColorPicker)}
                        className="w-6 h-6 rounded-md border flex items-center justify-center bg-white"
                        title="Custom color"
                    >
                        <span className="text-xs">+</span>
                    </button>
                    {showColorPicker && (
                        <div className="absolute top-full mt-1 left-0 bg-white shadow-lg rounded-md p-2 z-50">
                            <input
                                type="color"
                                onChange={(e) => {
                                    editor.chain().focus().setColor(e.target.value).run();
                                    setShowColorPicker(false);
                                }}
                                className="w-8 h-8 cursor-pointer"
                            />
                        </div>
                    )}
                </div>

                <button
                    type="button"
                    onClick={(e) => handleButtonClick(e, () => editor.chain().focus().unsetColor().run())}
                    className="px-2 py-1 text-sm border rounded hover:bg-gray-100"
                    title="Clear color"
                >
                    clear
                </button>
            </div>
        </div>
    );
};

export default MenuBar;