import { useState, useEffect } from "react";
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

  // window.addEventListener('scroll', () => console.log(window.scrollY))

  useEffect(() => {
    window.scroll(0,1000)
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Sprint points calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.page}>
        <h1 className={styles.title}>Sprint points calculator</h1>
        <button type="button" onClick={() => {alert('hello!')}}>Let's start</button>
        </div>

          <div className={styles.page}>
            <label>How many devs</label>
            <input
              type="text"
              name="devs"
              value={devs}
              onChange={onChangeDevs}
            ></input>
            <button type="button" onClick={() => {alert('hello!')}}>Next -></button>
          </div>

          <div className={styles.page}>
            <label>How many days off</label>
            <input
              type="text"
              name="days-off"
              value={daysOff}
              onChange={onChangeDaysOff}
            ></input>
          </div>

          <div className={styles.page}>
            <label>Average points</label>
            <input
              type="text"
              name="average-points"
              value={averagePoints}
              onChange={onChangeAveragePoints}
            ></input>
          </div>

          <div className={styles.page}>
        <p className={styles.description}>
          {points > 0 && `You can do ${points} bloody points, move on!`}
        </p>
        </div>
      </main>
      </div>
  );
}
