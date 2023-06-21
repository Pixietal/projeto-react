import { useEffect, useState } from "react";
import toast from "react-simple-toasts";
import { api } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { LinkButton } from "../components/LinkButton";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Helmet } from "react-helmet";

const initialNotepad = {
  id: 0,
  title: "",
  subtitle: "",
  content: "",
  created_at: "",
};

export function ViewNotepadRoute() {
  const params = useParams();
  const navigate = useNavigate();
  const [notepad, setNotepad] = useState(initialNotepad);

  async function loadNotepad() {
    const response = await api.get(`/notepads/${params.id}`);
    const nextNotepad = response.data;
    setNotepad(nextNotepad);
  }

  async function deleteNotepad() {
    const response = await api.delete(`/notepads/${params.id}`);
    if (response.data.success === true) {
      toast(`Oba! O notepad #${notepad.id} foi deletado com sucesso!`);
      navigate("/");
    } else {
      toast("Ops! Houve um erro ao deletar o notepad!");
    }
  }

  useEffect(() => {
    loadNotepad();
  }, []);

  return (
    <Card>
      <Helmet>
        <title>Notepad</title>
      </Helmet>
      <Breadcrumbs
        links={[
          { href: "/", label: "Home" },
          {
            href: `/ver-notepad/${params.id}`,
            label: `Ver notepad #${params.id}`,
          },
        ]}
      />

      <div className="text-gray-400 mb-2">#{notepad.id}</div>
      <div className="text-gray-400">
        {new Date(notepad.created_at).toLocaleDateString()}
      </div>
      <Title>{notepad.title}</Title>
      <p className="mb-4 text-gray-500">{notepad.subtitle}</p>
      <p>{notepad.content}</p>

      <div className="flex gap-2">
        <Button className="bg-red-500 hover:bg-red-800" onClick={deleteNotepad}>
          Deletar
        </Button>
        <LinkButton
          className="bg-purple-500 hover:bg-purple-700"
          to={`/editar-notepad/${params.id}`}
        >
          Editar
        </LinkButton>
      </div>
    </Card>
  );
}
