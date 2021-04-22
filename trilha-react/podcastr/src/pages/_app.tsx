import { Header } from '../components/Header';

import '../styles/global.scss';
import styles from '../styles/app.module.scss';
import { Player } from '../components/Player';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  );
}
