import { useRef, useState, useEffect, useCallback } from 'react';
import { verifyRecaptcha } from '@/app/actions/recaptcha';
import ReCAPTCHA from "react-google-recaptcha";
import { set } from 'zod';

function useRecaptcha() {
    const [isValidCaptcha, setIsValidCaptcha] = useState(false);
    const [resetRecaptcha, setResetRecaptcha] = useState(false);
    const [isRecaptchaCheck, setIsRecaptchaCheck] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';


    const handleResetCaptcha  = () => {

        setResetRecaptcha(true);
        setIsValidCaptcha(false);
        setIsRecaptchaCheck(false);


    }

    const onChangeCaptcha = useCallback(async (recaptchaToken: string | null) => {
        if (recaptchaToken) {
            try {
                const response = await verifyRecaptcha(recaptchaToken);
                setIsRecaptchaCheck(true);

                if (response.success) {
                    setIsValidCaptcha(true);
                    return;
                }

                setIsValidCaptcha(false);
            } catch (error) {
                console.log(error);
                setIsValidCaptcha(false);
            }
        }
    }, []);

    useEffect(() => {
        if (resetRecaptcha) {
            recaptchaRef.current?.reset();
            setResetRecaptcha(false);
         
        }
    }, [resetRecaptcha]);

    const captchaElement = (
        <ReCAPTCHA
            sitekey={siteKey}
            ref={recaptchaRef}
            onChange={onChangeCaptcha}
        />
    );

    return { captchaElement, isValidCaptcha, isRecaptchaCheck, handleResetCaptcha };
}

export default useRecaptcha;
