import React from 'react';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-[#006039] mb-4">Oeps! Er is iets misgegaan.</h2>
                        <p className="text-gray-600 mb-4">Probeer de pagina te verversen.</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-[#006039] text-white px-6 py-2 rounded-md hover:bg-[#004c2d] transition-colors"
                        >
                            Ververs Pagina
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;