"use client";

/*
 * Este componente me sirve para trabajar la UI en caso de algún error
 * Los errores siempre vienene del lado del cliente
 */

interface ErrorProps {
  error: Error; // Tipo Error lo trae Next.js en su componente Error.js
  reset: () => void; // Método reset lo trae Next.js en su componente Error.js
}

export default function Error({ error, reset }: ErrorProps) {
  console.log(error);

  return (
    <>
      <div>
        <p>❗There is an error</p>
        <button onClick={reset}>Page Reload</button>
      </div>
    </>
  );
}
