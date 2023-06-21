import { useNavigate } from "react-router-dom";
import { useZorm } from "react-zorm";
import toast from "react-simple-toasts";
import { Button } from "../components/Button";
import { ErrorMessage } from "../components/ErrorMessage";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Card } from "../components/Card";
import { api } from "../api";
import { NotepadSchema } from "../notepadSchema";
import { Helmet } from "react-helmet";

export function CreateNotepadRoute() {
  const navigate = useNavigate();
  const zo = useZorm("create-notepad", NotepadSchema, {
    async onValidSubmit(event) {
      event.preventDefault();
      const response = await api.post("/notepads", event.data);
      if (response.data.success) {
        toast("Oba! Seu notepad foi criado com sucesso!");
        navigate("/");
      } else {
        toast("Ops! Houve um erro ao criar o seu notepad.");
      }
    },
  });

  return (
    <Card>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Breadcrumbs
        links={[
          { href: "/", label: "Home" },
          {
            href: "/criar-notepad",
            label: "Criar notepad",
          },
        ]}
      />
      <form ref={zo.ref} className="flex flex-col gap-2 ">
        <h1 className="text-center font-bold text-2xl">Novo notepad</h1>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Digite um título"
            className={`rounded p-2 border focus:border-purple-500 outline-none w-full ${zo.errors.title(
              " border-red-600 focus:border-red-800"
            )} `}
            name={zo.fields.title()}
          />
          {zo.errors.title((error) => (
            <ErrorMessage>{error.message}</ErrorMessage>
          ))}
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Digite um subtítulo"
            className={`rounded p-2 border focus:border-pruple-500 outline-none w-full ${zo.errors.subtitle(
              " border-red-600 focus:border-red-800"
            )} `}
            name={zo.fields.subtitle()}
          />
          {zo.errors.subtitle((error) => (
            <ErrorMessage>{error.message}</ErrorMessage>
          ))}
        </div>
        <div className="flex flex-col">
          <textarea
            placeholder="Digite um assunto"
            className={`rounded p-2 border focus:border-purple-500 outline-none resize-none w-full ${zo.errors.content(
              " border-red-600 focus:border-red-800"
            )} `}
            name={zo.fields.content()}
          />
          {zo.errors.content((error) => (
            <ErrorMessage>{error.message}</ErrorMessage>
          ))}
        </div>
        <Button type="submit">Enviar</Button>
      </form>
    </Card>
  );
}
