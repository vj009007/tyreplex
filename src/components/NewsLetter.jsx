import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function NewsLatter() {
    const [inputValue, setInputValue] = useState('');
    const [isButtonHidden, setIsButtonHidden] = useState(true);

    const notify = () => {
        toast.success("Your question has been submitted");
        setInputValue('');
        setIsButtonHidden(true);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setIsButtonHidden(value.length < 3);
    };

    return (
        <div className="my-6">
            <div className="bg-[#FFEAAA] md:p-5 p-3 rounded-lg">
                <h5 className="text-base font-semibold">Have a question about Tyres?</h5>
                <p className='mt-2 text-sm text-gray-600'>Get an answer in 24 hours from our experts.</p>
                <div className="flex items-center gap-5 mt-6">
                    <input 
                        type="text" 
                        className='block w-full max-w-3xl py-3 px-4 rounded-3xl outline-none text-sm' 
                        placeholder='Ask or search your question' 
                        value={inputValue} 
                        onChange={handleInputChange} 
                    />
                    {!isButtonHidden && (
                        <button
                            className="w-auto rounded-md bg-[#ed1c24] px-3 py-2 text-sm font-semibold text-white shadow-sm inline-flex items-start justify-center gap-2 border border-solid border-[#ed1c24] hover:bg-transparent hover:text-[#ed1c24]"
                            onClick={notify}
                        >
                            Ask
                        </button>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default NewsLatter;
