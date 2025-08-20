import { MessagesSquare } from "lucide-react";

export function ContactChat() {
  return (
    <div className=" border-t border-b p-6 flex gap-4 text-lg">
      <MessagesSquare />
      <p>
        Si tienes alguna duda recuerda que puedes hablar con PERSON INMOBILIARIA
        por chat.
      </p>
    </div>
  );
}
