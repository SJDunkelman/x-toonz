import React, { useRef, useState } from "react"
import emailjs from '@emailjs/browser';

export default function Signup() {
    let buttonClasses = "py-4 px-6 text-sm bg-white/50 hover:bg-white/75 text-white font-medium leading-normal rounded transition duration-200";

    const [formSent, setFormStatus] = useState(false);

    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_fyefk4t', 'template_pst70pj', form.current, '29j4F0x3Zv5IhfzKT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        emailjs.sendForm('service_fyefk4t', 'template_7e94zka', form.current, '29j4F0x3Zv5IhfzKT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setFormStatus(true);
    }

    return (
        <section className="pt-10">
            <div className="flex flex-col space-y-4 flex-wrap items-center justify-center text-white font-cabin">
                <h3 className="text-5xl font-semibold font-heading pb-4">Be the first in line</h3>
                <p className="pb-4 font-light text-xl w-3/4 md:w-full text-center">Sign up to our waiting list and get announcements straight to your inbox.</p>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col md:flex-row items-center justify-center w-3/4 md:w-2/5" method="POST">
                    <input name="email" className={`w-full md:w-2/5 mb-4 lg:mb-0 lg:mr-4 py-3 pl-4 text-sm text-white bg-white/25 border border-white rounded`} type="email" placeholder="e.g example@gmail.com" />
                    <input type="submit" value="Send" className={buttonClasses} />
                </form>
                <p className={`text-lg font-extralight ${formSent ? 'visible' : 'invisible'}`}>Subscribed! Please check your inbox for confirmation (or spam if not received).</p>
            </div>
        </section>)
}
