import { z } from "zod";

const fileValidation = z.custom(
	() => {
		return true;
	},
	{
		message: "Arquivo inválido ou ausente",
	}
);

export const formCareersSchema = z.object({
	name: z.string().nonempty({ message: "Nome é obrigatório" }),
	phone: z.string().nonempty({ message: "Telefone é obrigatório" }),
	surname: z.string().nonempty({ message: "Sobrenome é obrigatório" }),
	linkedin: z.string().nonempty({ message: "Linkedin é obrigatório" }),
	email: z.string().email({ message: "Email inválido" }),
	jobPosition: z.string().nonempty({
		message: "Posição que você quer se candidatar é obrigatório",
	}),
	message: fileValidation,
});
