 

 import styles from "./styles/common.module.css"
 import Link from "next/link"

 const NotFound = () =>{
    return (
        <section className={styles.container}>
            <div className={styles.error_page}>
                <h1>401</h1>
                <h2>Not Found</h2>
                <p>Could not ding requested resource</p>
            <Link href="/">
            <button>
                Go to home page
                </button></Link>
            </div>

        </section>
    )
 }


 export default NotFound ;