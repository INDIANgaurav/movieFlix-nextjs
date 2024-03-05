import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from "../../app/contact/contact.module.css"
import ContactForm from '../components/ContactForm'
const page = () => {
  return (
    <>
    <div className={styles.container}>
      
      <h1>Contact us</h1>
       <ContactCard/>
        <section className={styles.contact_section}>
          <h2> we'd love to hear <span>from you</span></h2>
          <ContactForm/>
        </section>
 </div>
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14063.59861721133!2d76.95006079999996!3d28.21036115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d309057956f4f%3A0x6f806aafc0ff78a6!2sTauru%2C%20Haryana!5e0!3m2!1sen!2sin!4v1709622596916!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" 
 className={styles.mapping}
 referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default page
