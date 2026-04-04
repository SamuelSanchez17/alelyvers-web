import { BasicStatusPage } from "@/domains/content/ui/basic-status-page";

export default function CartPage() {
  return (
    <BasicStatusPage
      eyebrow="Carrito en preparacion"
      title="Tu carrito estara disponible en la siguiente iteracion"
      description="Ya iniciamos la base del catalogo. El siguiente paso es habilitar agregar, quitar y actualizar productos."
    />
  );
}
