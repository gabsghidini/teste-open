import { z } from "zod";

export const formContactsSchema = z.object({
	name: z.string().nonempty({ message: "Nome é obrigatório" }),
	phone: z.string().nonempty({ message: "Telefone é obrigatório" }),
	surname: z.string().nonempty({ message: "Sobrenome é obrigatório" }),
	email: z.string().email({ message: "Email inválido" }),
	additionalInfo: z.string(),
});
