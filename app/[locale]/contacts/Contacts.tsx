import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import * as S from "./styles";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formContactsSchema } from "../../schemas/contacts";
import { Toaster, toast } from "react-hot-toast";

import emailjs from "emailjs-com";

type FormState = {
	name: string;
	phone: string;
	surname: string;
	email: string;
	additionalInfo: string;
};

const Contacts = () => {
	const i18n = useTranslations("General");

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormState>({
		resolver: zodResolver(formContactsSchema),
	});

	const onSubmit = async (data: FormState) => {
		const formData = new FormData();
		formData.append("name", data.name);
		formData.append("phone", data.phone);
		formData.append("surname", data.surname);
		formData.append("email", data.email);
		formData.append("additionalInfo", data.additionalInfo);

		try {
			const formElement = document.querySelector("form");
			if (formElement) {
				const response = await emailjs.sendForm(
					"service_4wckzkz",
					"template_qoc4bq6",
					formElement,
					"gbLsD5DrpFwWMmkq5"
				);

				if (response.status === 200) {
					toast.success("Enviado com sucesso!");
					reset();
				} else {
					toast.error(
						"Erro ao enviar o e-mail. Por favor, tente novamente."
					);
				}
			} else {
				toast.error(
					"Erro ao enviar o e-mail. Por favor, tente novamente."
				);
			}
		} catch (error) {
			toast.error("Erro ao enviar o e-mail. Por favor, tente novamente.");
		}
	};

	return (
		<>
			<Header />
			<Toaster />
			<S.MainContainer>
				<S.Title>{i18n("contact")}.</S.Title>
				<S.FormContainer>
					<S.FormTitle>{i18n("techTeam")}</S.FormTitle>
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
								<S.Label htmlFor="email">
									{i18n("email")}
								</S.Label>
								<S.Input
									type="text"
									placeholder={i18n("email")}
									{...register("email")}
								/>
								{errors.email && (
									<S.ErrorMessage>
										{errors.email.message}
									</S.ErrorMessage>
								)}
							</S.FormColumnContainer>
						</S.FormRowContainer>
						<S.Label htmlFor="additionalInfo">
							{i18n("additionalInfo")}
						</S.Label>
						<S.TextArea
							placeholder={i18n("additionalInfo")}
							{...register("additionalInfo")}
						/>
						<S.Label />
						<S.SubmitButton>
							{i18n("sendMyContact").toUpperCase()}
						</S.SubmitButton>
					</S.Form>
				</S.FormContainer>
			</S.MainContainer>
			<Footer />
		</>
	);
};

export default Contacts;
