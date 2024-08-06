"use client"
import { Footer } from "@/app/components/Footer";
import * as S from "./styles";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formCareersSchema } from "../../schemas/careers";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";
import useRecaptcha from "@/app/hooks/useReCaptcha";
import { useEffect, useState } from "react";

type FormState = {
	name: string;
	phone: string;
	surname: string;
	linkedin: string;
	email: string;
	jobPosition: string;
	message: FileList;
};

const Careers = () => {
	const i18n = useTranslations("General");
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
	  setIsClient(true);
	}, []);

	const { captchaElement, isValidCaptcha, isRecaptchaCheck , handleResetCaptcha} = useRecaptcha();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormState>({
		resolver: zodResolver(formCareersSchema),
	});

	const onSubmit = async (data: FormState) => {


		if (!isRecaptchaCheck) {
			toast.error("Por favor, marque o captcha.");
			return
		}

		if (!isValidCaptcha) {
			toast.error("Captcha inválido.");
			return
		}

		const formData = new FormData();
		formData.append("name", data.name);
		formData.append("phone", data.phone);
		formData.append("surname", data.surname);
		formData.append("linkedin", data.linkedin);
		formData.append("email", data.email);
		formData.append("jobPosition", data.jobPosition);
		//formData.append("message", data.message[0]);

		try {
			const formElement = document.querySelector("form");
			if (formElement) {
				const response = await emailjs.sendForm(
					"service_4wckzkz",
					"template_h53rj33",
					formElement,
					"gbLsD5DrpFwWMmkq5"
				);

				if (response.status === 200) {
					toast.success("E-mail enviado com sucesso!");
					handleResetCaptcha();
					

					reset();
				} else {
					toast.error(
						"Falha ao enviar o e-mail. Por favor, tente novamente."

					);
				}
			} else {
				toast.error(
					"Falha ao enviar o e-mail. Por favor, tente novamente."
				);
			}
		} catch (error) {
			toast.error(
				"Falha ao enviar o e-mail. Por favor, tente novamente."
			);
		}
	};

	if (!isClient) {
		return null; 
	  }

	return (
		<>
			<Toaster />
			<S.MainContainer>
				<S.Title>{i18n("workAtOpen")}</S.Title>
				<S.Subtitle>{i18n("workAtOpenDescription")}</S.Subtitle>
				<S.Banner>
					<S.Image src="/images/careers.webp" alt="Um escritório" />
				</S.Banner>
				<S.FormContainer>
					<S.FormTitle>{i18n("workFormTitle")}</S.FormTitle>
					<S.Form onSubmit={handleSubmit(onSubmit)}>
						<S.FormRowContainer>
							<S.FormColumnContainer>
								<S.Label htmlFor="name">{i18n("name")}</S.Label>
								<S.Input
									type="text"
									placeholder={i18n("name")}
									{...register("name")}
								/>
								{errors.name && (
									<S.ErrorMessage>
										{errors.name.message}
									</S.ErrorMessage>
								)}

								<S.Label htmlFor="phone">
									{i18n("phone")}
								</S.Label>
								<S.Input
									type="tel"
									placeholder={i18n("phone")}
									{...register("phone")}
								/>
								{errors.phone && (
									<S.ErrorMessage>
										{errors.phone.message}
									</S.ErrorMessage>
								)}
							</S.FormColumnContainer>

							<S.FormColumnContainer>
								<S.Label htmlFor="surname">
									{i18n("surname")}
								</S.Label>
								<S.Input
									type="text"
									placeholder={i18n("surname")}
									{...register("surname")}
								/>
								{errors.surname && (
									<S.ErrorMessage>
										{errors.surname.message}
									</S.ErrorMessage>
								)}

								<S.Label htmlFor="linkedin">
									{i18n("linkedin")}
								</S.Label>
								<S.Input
									type="text"
									placeholder={i18n("linkedin")}
									{...register("linkedin")}
								/>
								{errors.linkedin && (
									<S.ErrorMessage>
										{errors.linkedin.message}
									</S.ErrorMessage>
								)}
							</S.FormColumnContainer>

						</S.FormRowContainer>

						<S.Label htmlFor="email">{i18n("email")}</S.Label>
						<S.FullInput
							type="email"
							placeholder={i18n("email")}
							{...register("email")}
						/>
						{errors.email && (
							<S.ErrorMessage>
								{errors.email.message}
							</S.ErrorMessage>
						)}

						<S.Label htmlFor="jobPosition">
							{i18n("jobPosition")}
						</S.Label>
						<S.FullInput
							type="text"
							placeholder={i18n("jobPosition")}
							{...register("jobPosition")}
						/>
						{errors.jobPosition && (
							<S.ErrorMessage>
								{errors.jobPosition.message}
							</S.ErrorMessage>
						)}

						<S.Label htmlFor="message">{i18n("message")}</S.Label>
						<S.FileInput type="file" {...register("message")} />
						{errors.message && (
							<S.ErrorMessage>
								{errors.message.message}
							</S.ErrorMessage>
						)}
						<S.ContentCaptcha>
							{
								captchaElement
							}

						</S.ContentCaptcha>
						<S.SubmitButton type="submit">
							{i18n("sendMyResume").toUpperCase()}
						</S.SubmitButton>
					</S.Form>
				</S.FormContainer>
			</S.MainContainer>
			<Footer />
		</>
	);
};

export default Careers;
