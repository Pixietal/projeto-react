import { z } from "zod";

const title = z
  .string()
  .min(2, {
    message: "Atenção! O título precisa ter pelo menos 2 caracteres!",
  })
  .max(20, {
    message: "Atenção! O título precisa ter no máximo 20 caracteres!",
  });

const subtitle = z
  .string()
  .min(4, {
    message: "Atenção! O subtítulo precisa ter pelo menos 4 caracteres!",
  })
  .max(22, {
    message: "Atenção! O subtítulo precisa ter no máximo 22 caracteres!",
  });

const content = z
  .string()
  .min(6, {
    message: "Atenção! O conteúdo precisa ter pelo menos 6 caracteres!",
  })
  .max(240, {
    message: "Atenção! O conteúdo precisa ter no máximo 240 caracteres!",
  });

export const NotepadSchema = z.object({
  title,
  subtitle,
  content,
});
