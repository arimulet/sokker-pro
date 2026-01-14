import Image from "next/image";
import Profile from "@/components/profile";
// Los estilos se importan en _app.tsx para cumplir con las restricciones de Next.js

export default function Home() {
  return (
    <main className="main">
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">src/pages/index.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            
          </a>
        </div>
      </div>

      <div className="center">
        <Image
          className="logo"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

    
    </main>
  );
}
