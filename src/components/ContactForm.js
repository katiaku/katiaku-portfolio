import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translation.json";
import translationES from "../locales/es/translation.json";
import { toast } from "react-toastify";

const resources = {
    en: {
        translation: translationEN,
    },
    es: {
        translation: translationES,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export const ContactForm = () => {

    const { t } = useTranslation();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs
        .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        })
        .then(
            () => {
                console.log('SUCCESS!');
                toast.success("Your message is sent successfully", {
                    position: "bottom-right",
                    theme: "colored"
                });
                form.current.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
                toast.error("There was an error...", {
                    position: "bottom-right",
                    theme: "colored"
                });
            },
        );
    };

    return (
        <div className='flex flex-col lg:gap-0 lg:flex-row w-full'>
            <div className='bg-yellow-200 lg:bg-purple-400 lg:border-b-[3rem] lg:border-yellow-200 xl w-full h-[350px] lg:h-[400px] lg:w-1/2 p-8 px-8 md:px-20 relative'>
                <div className='glass p-8 absolute -top-10'>
                    <p className='uppercase cursor-default text-3xl md:text-4xl text-slate-800 font-bold text-center'>{ t("contact_header") }</p>
                </div>
                <div className='text-slate-800 px-10 lg:px-0 w-full h-full flex flex-col start-center justify-center gap-8 font-semibold text-lg md:text-xl'>
                    <p>{ t("contact_p1") }</p>
                    <p>{ t("contact_p2") }</p>
                </div>
            </div>

            <div className='w-full h-[400px] lg:w-1/2 bg-purple-400 lg:border-b-[3rem] lg:border-yellow-200 p-8 px-8 mb-20 md:px-20'>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className='flex flex-col gap-4 items-start glass p-8 w-full text-md text-slate-800'
                >
                    <div className='w-full'>
                        <label className='font-semibold'>
                            { t("form_name") }
                        </label>
                        <input
                            required
                            type="text"
                            name="user_name"
                            className='focus:outline-none focus:ring-1 focus:ring-slate-800 bg-transparent border-[1px] border-slate-800 rounded-xl px-4 py-2 w-full'
                        />
                    </div>

                    <div className='w-full'>
                        <label className='font-semibold'>
                            { t("form_email") }
                        </label>
                        <input
                            required
                            type="email"
                            name="user_email"
                            className='focus:outline-none focus:ring-1 focus:ring-slate-800 bg-transparent border-[1px] border-slate-800 rounded-xl px-4 py-2 w-full'
                        />
                    </div>

                    <div className='w-full'>
                        <label className='font-semibold'>
                            { t("form_message") }
                        </label>
                        {/* <input
                            type="text"
                            name="message"
                            className='focus:outline-none bg-transparent border-[1px] border-slate-800 rounded-full px-4 py-2 w-full'
                        /> */}
                        <textarea
                            required
                            name="message"
                            rows="4"
                            class="focus:outline-none focus:ring-1 focus:ring-slate-800 bg-transparent border-[1px] border-slate-800 rounded-xl px-4 py-2 w-full resize-none"
                        />
                    </div>

                    <input
                        type="submit"
                        value={ t("btn_send") }
                        className='btn mt-6 self-end cursor-pointer'
                    />
                </form>
            </div>
        </div>
    );
};
