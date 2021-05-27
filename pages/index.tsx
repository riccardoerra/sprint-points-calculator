import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Index.module.css";

const DAYS_PER_SPRINT: number = 10;

export default function Points() {
  const [devs, setDevs] = useState<number>();
  const onChangeDevs = (event) => setDevs(event.target.value);

  const [daysOff, setDaysOff] = useState<number>();
  const onChangeDaysOff = (event) => setDaysOff(event.target.value);

  const [averagePoints, setAveragePoints] = useState<number>();
  const onChangeAveragePoints = (event) => setAveragePoints(event.target.value);

  const pointsPerDev = averagePoints / devs;
  const totalDays = devs * DAYS_PER_SPRINT;
  const daysOffFactor = (totalDays - daysOff) / totalDays;

  const points: number = Math.round(devs * pointsPerDev * daysOffFactor);

  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sprint points calculator</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <label>How many devs</label>
            <input
              type="text"
              name="devs"
              value={devs}
              onChange={onChangeDevs}
            ></input>
          </div>

          <div className={styles.card}>
            <label>How many days off</label>
            <input
              type="text"
              name="days-off"
              value={daysOff}
              onChange={onChangeDaysOff}
            ></input>
          </div>

          <div className={styles.card}>
            <label>Average points</label>
            <input
              type="text"
              name="average-points"
              value={averagePoints}
              onChange={onChangeAveragePoints}
            ></input>
          </div>
        </div>

        <p className={styles.description}>
          {points > 0 && `You can do ${points} bloody points, move on!`}
        </p>
      </main>
    </div>
  );
}
