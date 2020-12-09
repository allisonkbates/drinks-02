import Link from 'next/link';
import styles from './nav.module.css';

export default function Nav() {
	return (
		<div className={styles.nav}>
			<Link href="/">
				<div className={styles.logoContainer}>
					<img className={styles.logoImg} src="/logo-color.svg"></img>
					<h1 className={styles.logoTitle}>Drinks DB</h1>
				</div>
			</Link>
			<Link href="/add">
				<a className={styles.link}>Add a Drink</a>
			</Link>
		</div>
	)
}