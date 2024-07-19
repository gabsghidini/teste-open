'use server';

export const verifyRecaptcha = async (recaptchaToken: string) => {


    try {

        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.PRIVATE_RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            }

        )


        const data = await response.json();

        if (!data.success) {

            return {
                success: false,
                message: 'Captcha verification failed',
                errorCodes: data['error-codes']
            }
        }


        return {
            success: data.success,
            message: 'Captcha veryfied successfully'
        }

    } catch (error) {

        console.log(error);
        return {
            success: false,
            message: 'Error verifying captcha',
            errorCodes: error

        }
    }






}