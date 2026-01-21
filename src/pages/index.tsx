'use client'

import { useEffect, useState } from "react";
import LoginForm from "@/components/LoginForm";
import ApiService from "@/services/ApiService";
import { Button } from "@mui/material";
// Los estilos se importan en _app.tsx para cumplir con las restricciones de Next.js

import styles from './index.module.scss'
import Section from "@/components/Section";
import { Player } from "@/database";

export default function Home() {
  const [players, setPlayers] = useState([])
  const loadPlayers = async () => {
    const result = await ApiService.getPlayers()
    console.log(players)

    setPlayers(result.players)

  }

  const handleOnCreatePlayerClick = async () => {
    await ApiService.updatePlayers()

    await loadPlayers()
  }

  useEffect(() => {
    // call to get players
    loadPlayers()

  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <LoginForm />

        <Button onClick={handleOnCreatePlayerClick} > Add Players </Button>
        {/* Placeholder para la tabla de jugadores */}
        <Section>
          <h3>Lista de Jugadores</h3>
          <p>La tabla de jugadores se implementará aquí</p>
          {players.map((player: Player) => {
            return <div>{player.name} {player.surname} {player.age}yo</div>
          })}
        </Section>
      </div>

    </main>
  );
}
