import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from './contexts/AuthContext';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import MenuBar from './components/MenuBar';
import DOMPurify from 'dompurify';
import './styles/editor.css';
import CustomImage from './extensions/CustomImage';

interface Post {
    id: string;
    title: string;
    content: string;
    author: string;
    category: string;
    imageUrl?: string;
    date: string;
}

const AdminBlog: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const { token } = useAuth();
    const formRef = useRef<HTMLFormElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [previewData, setPreviewData] = useState({
        title: '',
        author: '',
        content: '',
        imageUrl: ''
    });

    const [editingPost, setEditingPost] = useState<Post | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    // Update editor configuration to disable default image paste handling
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3]
                }
            }),
            Underline,
            TextStyle,
            Color.configure({
                types: [TextStyle.name]
            }),
            CustomImage.configure({
                inline: true,
                allowBase64: false,
                // Disable default paste so our handler runs only
            }),
        ],
        content: '',
        onUpdate: ({ editor }) => {
            if (contentRef.current) {
                contentRef.current.value = editor.getHTML();
            }
        }
    });

    const fetchPosts = async () => {
        const response = await fetch('http://localhost:3001/api/posts');
        const data = await response.json();
        setPosts(data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.currentTarget);
            const content = editor?.getHTML() || '';

            // Make sure we're sending all required fields
            formData.set('content', content);
            formData.set('title', formData.get('title') as string);
            formData.set('author', formData.get('author') as string); // Add this line to ensure author is sent

            const response = await fetch('http://localhost:3001/api/posts', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to create blog post');
                } else {
                    throw new Error(`Server error: ${response.status} ${response.statusText}`);
                }
            }

            // Reset form and states
            if (formRef.current) {
                formRef.current.reset();
            }
            editor?.commands.setContent('');

            alert('Blog post successfully created!');
            await fetchPosts();
        } catch (error) {
            console.error('Error creating blog post:', error);
            alert('Failed to create blog post. Please try again.');
        }
    };

    const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!editingPost) return;

        try {
            const formData = new FormData(e.currentTarget);
            const content = editor?.getHTML() || '';

            // Make sure we're sending all required fields
            formData.set('content', content);
            formData.set('title', formData.get('title') as string);
            formData.set('author', formData.get('author') as string);

            const response = await fetch(`http://localhost:3001/api/posts/${editingPost.id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to update blog post');
                } else {
                    throw new Error(`Server error: ${response.status} ${response.statusText}`);
                }
            }

            const updatedPost = await response.json();
            console.log('Post updated successfully:', updatedPost);

            // Reset form and states
            if (formRef.current) {
                formRef.current.reset();
            }
            editor?.commands.setContent('');
            setEditingPost(null);
            setIsEditing(false);

            // Refresh the posts list
            await fetchPosts();

            alert('Blog post successfully updated!');
        } catch (error) {
            console.error('Error updating blog post:', error);
            alert(error instanceof Error ? error.message : 'Failed to update blog post. Please try again.');
        }
    };

    const startEditing = (post: Post) => {
        setEditingPost(post);
        setIsEditing(true);

        // Populate the form with post data
        if (formRef.current) {
            const titleInput = formRef.current.querySelector<HTMLInputElement>('#title');
            const authorInput = formRef.current.querySelector<HTMLInputElement>('#author');

            if (titleInput) titleInput.value = post.title;
            if (authorInput) authorInput.value = post.author;
        }

        // Set editor content
        editor?.commands.setContent(post.content);

        // Scroll to form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (postId: string) => {
        try {
            const response = await fetch(`http://localhost:3001/api/posts/${postId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete blog post');
            }

            alert('Blog post successfully deleted!');
            await fetchPosts();
        } catch (error) {
            console.error('Error deleting blog post:', error);
            alert('Failed to delete blog post. Please try again.');
        }
    };

    const handlePreview = () => {
        if (formRef.current) {
            const titleInput = formRef.current.querySelector<HTMLInputElement>('#title');
            const authorInput = formRef.current.querySelector<HTMLInputElement>('#author');
            const content = editor?.getHTML() || '';

            setPreviewData({
                title: titleInput?.value || '',
                author: authorInput?.value || '',
                content,
                imageUrl: ''
            });

            setIsPreviewOpen(true);
        }
    };

    const handlePostClick = (post: Post) => {
        setSelectedPost(post);
    };

    useEffect(() => {
        const handleResize = (container: HTMLElement) => {
            const img = container.querySelector('img');
            const handle = container.querySelector('.resize-handle');
            if (!img || !handle) return;

            let isResizing = false;
            let startX: number;
            let startWidth: number;
            let startHeight: number;

            handle.addEventListener('mousedown', (event) => {
                const e = event as MouseEvent;
                e.preventDefault();
                isResizing = true;
                startX = e.pageX;
                startWidth = img.clientWidth;
                startHeight = img.clientHeight;
                container.classList.add('resizing');

                const mouseMoveHandler = (e: MouseEvent) => {
                    if (!isResizing) return;
                    const width = startWidth + (e.pageX - startX);
                    const height = (width / startWidth) * startHeight;
                    img.style.width = `${width}px`;
                    img.style.height = `${height}px`;
                };

                document.addEventListener('mousemove', mouseMoveHandler);

                document.addEventListener('mouseup', () => {
                    isResizing = false;
                    container.classList.remove('resizing');
                    document.removeEventListener('mousemove', mouseMoveHandler);
                });
            });
        };

        // Apply resize handlers to all image containers
        const containers = document.querySelectorAll('.image-container');
        containers.forEach(container => handleResize(container as HTMLElement));
    }, []);

    useEffect(() => {
        // Function to attach resize handlers to any image-container that does not yet have them
        const attachResizeHandlers = () => {
            const containers = document.querySelectorAll('.image-container');
            containers.forEach((container) => {
                // Avoid double attaching by checking a custom attribute
                if (container.getAttribute('data-resize-attached') === 'true') return;
                container.setAttribute('data-resize-attached', 'true');

                const img = container.querySelector('img');
                const handle = container.querySelector('.resize-handle');
                if (!img || !handle) return;

                let isResizing = false;
                let startX: number, startWidth: number, startHeight: number;

                const mouseDownHandler = (e: MouseEvent) => {
                    e.preventDefault();
                    isResizing = true;
                    startX = e.pageX;
                    startWidth = img.clientWidth;
                    startHeight = img.clientHeight;
                    container.classList.add('resizing');
                    document.addEventListener('mousemove', mouseMoveHandler);
                    document.addEventListener('mouseup', mouseUpHandler);
                };

                const mouseMoveHandler = (e: MouseEvent) => {
                    if (!isResizing) return;
                    const newWidth = startWidth + (e.pageX - startX);
                    const newHeight = (newWidth / startWidth) * startHeight;
                    img.style.width = `${newWidth}px`;
                    img.style.height = `${newHeight}px`;
                };

                const mouseUpHandler = () => {
                    isResizing = false;
                    container.classList.remove('resizing');
                    document.removeEventListener('mousemove', mouseMoveHandler);
                    document.removeEventListener('mouseup', mouseUpHandler);
                };

                handle.addEventListener('mousedown', mouseDownHandler as EventListener);
            });
        };

        // Wait a short time after content changes so newly inserted images are in the DOM
        const timeoutId = setTimeout(attachResizeHandlers, 300);
        return () => clearTimeout(timeoutId);
    }, [editor]);

    const editorContent = editor?.getHTML();

    useEffect(() => {
        // Function to attach resize handlers to any image-container that does not yet have them
        const attachResizeHandlers = () => {
            const containers = document.querySelectorAll('.image-container');
            containers.forEach((container) => {
                // Avoid double attaching by checking a custom attribute
                if (container.getAttribute('data-resize-attached') === 'true') return;
                container.setAttribute('data-resize-attached', 'true');

                const img = container.querySelector('img');
                const handle = container.querySelector('.resize-handle');
                if (!img || !handle) return;

                let isResizing = false;
                let startX: number, startWidth: number, startHeight: number;

                const mouseDownHandler = (e: MouseEvent) => {
                    e.preventDefault();
                    isResizing = true;
                    startX = e.pageX;
                    startWidth = img.clientWidth;
                    startHeight = img.clientHeight;
                    container.classList.add('resizing');
                    document.addEventListener('mousemove', mouseMoveHandler);
                    document.addEventListener('mouseup', mouseUpHandler);
                };

                const mouseMoveHandler = (e: MouseEvent) => {
                    if (!isResizing) return;
                    const newWidth = startWidth + (e.pageX - startX);
                    const newHeight = (newWidth / startWidth) * startHeight;
                    img.style.width = `${newWidth}px`;
                    img.style.height = `${newHeight}px`;
                };

                const mouseUpHandler = () => {
                    isResizing = false;
                    container.classList.remove('resizing');
                    document.removeEventListener('mousemove', mouseMoveHandler);
                    document.removeEventListener('mouseup', mouseUpHandler);
                };

                handle.addEventListener('mousedown', mouseDownHandler as EventListener);
            });
        };

        // Wait a short time after content changes so newly inserted images are in the DOM
        const timeoutId = setTimeout(attachResizeHandlers, 300);
        return () => clearTimeout(timeoutId);
    }, [editorContent]);

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
                <form
                    ref={formRef}
                    onSubmit={isEditing ? handleEdit : handleSubmit}
                    className="w-full max-w-none space-y-8 bg-white p-8 rounded-lg shadow mb-8"
                    encType="multipart/form-data"
                >
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            required
                            placeholder="Voer een titel in..."
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3" /* Added p-3 for more padding */
                        />
                    </div>
                    <div>
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                            Author
                        </label>
                        <input
                            type="text"
                            name="author"
                            id="author"
                            required
                            placeholder="Voer een auteur in..."
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3" /* Added p-3 for more padding */
                            defaultValue="" // Remove any default value
                        />
                    </div>
                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                            Content
                        </label>
                        <MenuBar editor={editor} />
                        <div className="border p-4 rounded-md">
                            <EditorContent editor={editor} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            placeholder="Kies een afbeelding..."
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3" /* Added p-3 for more padding */
                        />
                    </div>
                    <div className="flex space-x-4">
                        <button
                            type="button"
                            onClick={handlePreview}
                            className="w-1/3 bg-gray-600 text-white py-4 px-6 rounded-md hover:bg-gray-700 transition-colors text-lg font-medium mt-6"
                        >
                            Preview
                        </button>
                        <button
                            type="submit"
                            className="w-1/3 bg-[#006039] text-white py-4 px-6 rounded-md hover:bg-[#004c2d] transition-colors text-lg font-medium mt-6"
                        >
                            {isEditing ? 'Update Blog Post' : 'Add Blog Post'}
                        </button>
                        {isEditing && (
                            <button
                                type="button"
                                onClick={() => {
                                    setIsEditing(false);
                                    setEditingPost(null);
                                    if (formRef.current) {
                                        formRef.current.reset();
                                    }
                                    editor?.commands.setContent('');
                                }}
                                className="w-1/3 bg-gray-400 text-white py-4 px-6 rounded-md hover:bg-gray-500 transition-colors text-lg font-medium mt-6"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>

                {posts.length === 0 ? (
                    <p>No posts available</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post: Post) => (
                            <div
                                key={post.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                                onClick={() => handlePostClick(post)}
                            >
                                {post.imageUrl && (
                                    <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                                )}
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-[#006039] mb-2 line-clamp-1">
                                        {post.title}
                                    </h2>
                                    <div
                                        className="prose prose-sm max-w-none text-gray-600 mb-4 overflow-hidden"
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(post.content)
                                        }}
                                    />
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">
                                            {new Date(post.date).toLocaleDateString('nl-NL', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => startEditing(post)}
                                                className="inline-flex items-center px-3 py-1.5 bg-[#006039] text-white text-sm font-medium rounded hover:bg-[#004c2d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006039] transition-colors"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(post.id)}
                                                className="inline-flex items-center px-3 py-1.5 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {isPreviewOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-[#006039]">Preview</h2>
                                    <button
                                        onClick={() => setIsPreviewOpen(false)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <article className="prose max-w-none">
                                    {previewData.imageUrl && (
                                        <img
                                            src={previewData.imageUrl}
                                            alt="Preview"
                                            className="w-full h-64 object-cover rounded-lg mb-6"
                                        />
                                    )}
                                    <h1 className="text-3xl font-bold text-[#006039] mb-2">{previewData.title}</h1>
                                    <div className="text-gray-600 mb-6">
                                        By {previewData.author} | {new Date().toLocaleDateString('nl-NL', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </div>
                                    <div
                                        className="prose prose-lg"
                                        dangerouslySetInnerHTML={{
                                            __html: typeof DOMPurify.sanitize === 'function'
                                                ? DOMPurify.sanitize(previewData.content)
                                                : previewData.content
                                        }}
                                    />
                                </article>
                                <div className="mt-6 flex justify-end">
                                    <button
                                        onClick={() => setIsPreviewOpen(false)}
                                        className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {selectedPost && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-[#006039]">{selectedPost.title}</h2>
                                    <h2 className="text-2xl font-bold text-[#006039]">{selectedPost?.title}</h2>
                                    <button
                                        onClick={() => setSelectedPost(null)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <article className="prose max-w-none">
                                    {selectedPost?.imageUrl && (
                                        <img
                                            src={selectedPost.imageUrl}
                                            alt={selectedPost.title ?? ''}
                                            className="w-full h-64 object-cover rounded-lg mb-6"
                                        />
                                    )}
                                    <div className="text-gray-600 mb-6">
                                        Door {selectedPost?.author} | {new Date(selectedPost?.date ?? new Date()).toLocaleDateString('nl-NL', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </div>
                                    <div
                                        className="prose prose-lg"
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(selectedPost?.content ?? '')
                                        }}
                                    />
                                </article>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminBlog;

