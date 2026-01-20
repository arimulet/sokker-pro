import LoginForm from "@/components/LoginForm";
// Los estilos se importan en _app.tsx para cumplir con las restricciones de Next.js

export default function Home() {

  return (
    <main className="main">
      <div className="content-container">
        <LoginForm />
        
        {/* Placeholder para la tabla de jugadores */}
        <div className="players-table-placeholder">
          <h3>Lista de Jugadores</h3>
          <p>La tabla de jugadores se implementará aquí</p>
        </div>
      </div>
    </main>
  );
}
