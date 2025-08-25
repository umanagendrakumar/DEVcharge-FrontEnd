import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Feedback = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSucces] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);


        emailjs.sendForm(
            'serviceidkunk',  // Replace with your EmailJS Service ID
            'template_qop4m9q', // Replace with your EmailJS Template ID
            e.target,           // Form reference
            '-e4aQxH864emqv0fq'      // Replace with your EmailJS User ID
        )
            .then((result) => {
                setIsFormSubmitted(true);
                setIsLoading(false);
                setIsSucces(true);

                setTimeout(() => {
                    setIsFormSubmitted(false);
                    setIsSucces(false);
                }, 2000);

            }, (error) => {
                setIsFormSubmitted(true);
                setIsLoading(false);
                setIsSucces(false);
                setTimeout(() => {
                    setIsFormSubmitted(false);
                }, 2000);

            });

        e.target.reset();
    };
    const inputClassName = "border p-2 focus:border-blue-500 focus:outline-none";

    return (
        <main className="w-full px-6 shadow-sm flex-1 flex justify-center items-center">
            <div className="toast toast-center toast-top mt-32 z-2">
                {isFormSubmitted && isSuccess && (
                    <div className="alert alert-success">
                        <span>Message sent successfully.</span>
                    </div>
                )}
                {isFormSubmitted && !isSuccess && (
                    <div className="bg-orange-700 alert">
                        <span>Failed to send message. Please try again.</span>
                    </div>
                )}
            </div>
            <div className="p-4 w-[600px]">
                <h1 className="mb-4">Come on, Don't <span className=' text-violet-300 text-xl'>leave withOut giving feedBACK....</span></h1>
                <form onSubmit={sendEmail} className='flex flex-col gap-4'>
                    <input className={inputClassName} type="text" name="name" placeholder="Your Name*" required></input>
                    <input className={inputClassName} type="email" name="email" placeholder="Your Email*" required></input>
                    <input className={inputClassName} type="text" name="text" placeholder="One Line feedBACK*" required></input>
                    <textarea className={inputClassName} name="message" placeholder="Drop ideas that charge the application to work super fast.........."></textarea>
                    <button className="btn bg-gradient-to-r from-[#905ef2] via-[#3e68f2] to-[#03d9ff] flex items-center gap-2" type="submit">
                        <span className={`${isLoading ? 'loading loading-dots loading-xs' : ''}`}></span>
                        {isLoading ? 'Sending' : 'Send feedBACK'}
                    </button>

                </form>
            </div>
        </main>
    );
};

export default Feedback;