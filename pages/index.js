import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Index.module.css'

const DAYS_PER_SPRINT = 10

export default function Points() {
  const [devs, setDevs] = useState('')
  const onChangeDevs = event => setDevs(event.target.value);

  const [daysOff, setDaysOff] = useState('')
  const onChangeDaysOff = event => setDaysOff(event.target.value);

  const [averagePoints, setAveragePoints] = useState('')
  const onChangeAveragePoints = event => setAveragePoints(event.target.value);

  const points = Math.round(devs * (averagePoints/devs) * (((devs*DAYS_PER_SPRINT) - daysOff)/100))
  console.log(devs)

  // Is the calculation correct?
  // How to think about if average number of points doesn't have same number of devs?

  // Maybe should be multiple questions first: how many weeks is the sprint, how many devs, how many days off, what's the average points, how many devs scored that average, how long was that sprint
  // Maybe secondary options should be extra settings hidden behind a toggle

  // Error states: number only allowed, show error message if not
  // Flat up or down numbers if there have decimals 

  // Add styling
  // Add Bulb branding
  // Edit from where CSS is coming from

  // Clean, separate and add Typescript
  // Deploy to pointscalculator.app

  // What other improvements that came over night I forgot???

  // React spring with card coming in from top or left so it becomes like a Typeform form

  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sprint points calculator
        </h1>
        <div className={styles.grid}>
        <div className={styles.card}>
        <label htmlFor="devs">How many devs</label>
        <input type="text" inputMode="numeric" pattern="[0-9]*" id="devs" name="devs" required min="1" step="1" value={devs} onChange={onChangeDevs}></input>
        </div>

        <div className={styles.card}>
        <label htmlFor="days-off">How many days off</label>
        <input type="text" inputMode="numeric" pattern="[0-9]*" id="days-off" name="days-off" required min="1" step="0.5" value={daysOff} onChange={onChangeDaysOff}></input>
        </div>

        <div className={styles.card}>
        <label htmlFor="average-points">Average points</label>
        <input type="text" inputMode="numeric" pattern="[0-9]*" id="average-points" name="average-points" required min="1" step="1" value={averagePoints} onChange={onChangeAveragePoints}></input>
        </div>
        </div>

        <p className={styles.description}>
          {devs && daysOff && averagePoints && `You can do ${points} bloody points, move on!`}
        </p>
      </main>
    </div>
  )
}
