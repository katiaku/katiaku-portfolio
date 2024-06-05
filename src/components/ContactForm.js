import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    // emailjs
    //     .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
    //         publicKey: 'YOUR_PUBLIC_KEY',
    //     })
    //     .then(
    //         () => {
    //         console.log('SUCCESS!');
    //         },
    //         (error) => {
    //         console.log('FAILED...', error.text);
    //         },
    //     );
    };

    return (
        <div className='flex flex-col gap-10 lg:gap-0 lg:flex-row w-full'>
            <div className='bg-yellow-200 lg:bg-purple-400 xl w-full h-[350px] lg:h-[400px] lg:w-1/2 p-8 px-8 md:px-20 relative'>
                <div className='glass p-8 absolute -top-10'>
                    <p className='uppercase cursor-default text-3xl md:text-4xl text-slate-800 font-bold text-center'>Let's talk!</p>
                </div>
                <div className='text-slate-800 px-10 lg:px-0 w-full h-full flex flex-col start-center justify-center gap-8 font-semibold text-lg md:text-xl'>
                    <p>Whether you have a question, want to start a project or simply want to connect.</p>
                    <p>Feel free to send me a message in the contact form and I will get back to you promptly.</p>
                </div>
            </div>

            <div className='w-full h-[400px] lg:w-1/2 bg-purple-400 p-8 px-8 mb-20 md:px-20'>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className='flex flex-col gap-4 items-start glass p-8 w-full text-lg text-slate-800'
                >
                    <div className='w-full'>
                        <label className='font-semibold'>
                            Name
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            className='focus:outline-none bg-transparent border-[1px] border-slate-800 rounded-full px-4 py-2 w-full'
                        />
                    </div>

                    <div className='w-full'>
                        <label className='font-semibold'>
                            Email
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            className='focus:outline-none bg-transparent border-[1px] border-slate-800 rounded-full px-4 py-2 w-full'
                        />
                    </div>

                    <div className='w-full'>
                        <label className='font-semibold'>
                            Message
                        </label>
                        <input
                            type="text"
                            name="message"
                            className='focus:outline-none bg-transparent border-[1px] border-slate-800 rounded-full px-4 py-2 w-full'
                        />
                    </div>

                    <input
                        type="submit"
                        value="Send"
                        className='btn mt-6 self-end'
                    />
                </form>
            </div>
        </div>
    );
};
