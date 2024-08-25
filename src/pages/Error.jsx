import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export function Error() {
    const { id } = useParams();
    let pageName = id.replace("-", " ");
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");
    };

    return (
        <div className="flex items-center justify-center px-2 md:px-0 py-20">
            <div>
                <p className="text-sm font-semibold text-black">404 error</p>
                <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
                    We can&apos;t find <span className='text-[#ed1c24]'>{pageName}</span> page
                </h1>
                <p className="mt-4 text-gray-500">
                    Sorry, the page you are looking for doesn&apos;t exist or has been moved.
                </p>
                <div className="mt-6 flex items-center space-x-3">
                    <button
                        type="button"
                        onClick={handleNavigate}
                        className="inline-flex items-center rounded-md border border-[#ed1c24] px-3 py-2 text-sm font-semibold text-[#ed1c24] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Go back To Home Page
                    </button>
                </div>
            </div>
        </div>
    );
}
