import React from 'react'
import './style/Contact.css'
import { motion } from "framer-motion";
function Contact() {

  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 2 }} className="service_list">
        <div className="co_sec1">
          <h2 className='co_h2 co_h21'>"Connect with Us – Your Feedback, Our Fuel!".</h2>
          <p className='co_p'>We value your thoughts and suggestions. Feel free to reach out to us through the contact form, email, or social media. Your feedback is essential for us to improve and provide you with the best content and experience. Join our growing community and let's make this blog web app even better together. Your ideas fuel our journey!</p>

          <div className='contact-form'>
            <form id='form' action='https://formspree.io/f/xqkvgowl' method='post' className='text-center' style={{ width: '100%', maxWidth: '350px' }}>
              <h2 className='cont-h2'>Contact us</h2>

              <input type='text' className='cont-input' placeholder='Name' name='Name'/>

              <input type='email' className='cont-input' placeholder='Email' name='Email'/>

              <input type='text' className='cont-input' placeholder='Subject' name='Subject'/>

              <input type='textarea' className='cont-input cont-tarea' placeholder='Message' name='Message'/>

              <button className="contact-button" type='submit' >
                <span> Send </span>
              </button>
            </form>
          </div>
        </div>
        <div className='co_sec2'>
          <ul className="">
            <li className='co_li'>
              <div>
                <svg className='co_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187 187"><g fill="none" fill-rule="evenodd"><circle cx="93.18" cy="93.18" r="93.18" fill="#232323"></circle><g fill="#F7F6EE" stroke="#F7F6EE" stroke-linecap="round" stroke-width="5" transform="translate(130 51)"><path d="M.75 16.01L15.8.96M.75.96L15.8 16.01"></path></g><g fill="#F7F6EE" stroke="#F7F6EE" stroke-linecap="round" stroke-width="5" transform="translate(39 122)"><path d="M.83 15.52L15.88.48M.83.48l15.05 15.04"></path></g><g stroke="#F7F6EE" stroke-linecap="round" stroke-width="5" transform="translate(46 64)"><path d="M92.27 9.57s0 .02-.01.04"></path><path stroke-dasharray=".099 8.88" d="M90.58 18.33C85.9 39.87 71.46 89.41 46.81 29.25v-.06C20.3-35.53 5.6 26.7 2.15 44.45"></path><path d="M1.36 48.82c0 .03-.01.04-.01.04"></path></g></g></svg>
              </div>
              <div>
                <h2 className='co_h2'> Content Creation and Publishing:</h2>
                <motion.div
                  whileInView={{ opacity: [0, 1], x: [30, 0] }}
                  transition={{ duration: 2 }}>
                  <p className='co_p'>A blog web app offers a user-friendly platform for creating, editing, and publishing content. Users can easily compose and format their articles, upload images, and schedule posts, streamlining the content creation process. This service enables individuals and businesses to share their ideas, knowledge, and stories with a global audience.</p>
                </motion.div>
              </div>
            </li>
            <li className='co_li'>
              <div>
                <svg className='co_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187 187"><g fill="none" fill-rule="evenodd"><circle cx="93.18" cy="93.18" r="93.18" fill="#232323"></circle><path fill="#F7F6EE" d="M107.87 75.24c-10.82-2.19-14.68 5.39-14.68 5.39s-3.01-5.76-10.92-5.83c-7.91-.07-11.15 5.37-11.09 11.14 0 6.16 2.88 17.88 22.01 29.64 17.8-10.68 21.01-22.39 21.4-24.47.4-2.08 2.98-12.95-6.72-15.87z"></path><path fill="#F7F6EE" fill-rule="nonzero" stroke="#F7F6EE" stroke-linecap="round" stroke-width="5" d="M93.18 35.47v18.45m0 80.56v18.45m58.73-58.73h-18.45m-80.55 0H34.46m100.25-41.53l-13.04 13.05M64.7 122.68l-13.04 13.05m83.05 0l-13.04-13.05M64.7 65.72L51.66 52.67"></path></g></svg>
              </div>
              <div>
                <h2 className='co_h2'>SEO Optimization and Analytics:</h2>
                <motion.div
                  whileInView={{ opacity: [0, 1], x: [30, 0] }}
                  transition={{ duration: 2 }}>
                  <p className='co_p'>Blog web apps often provide SEO tools and analytics to enhance content visibility. Users can optimize their articles for search engines, improving their chances of ranking higher in search results. Analytics tools track visitor metrics, allowing users to measure the impact of their content and make data-driven decisions to refine their blogging strategies.</p>
                </motion.div>
              </div>
            </li>
            <li className='co_li'>
              <div>
                <svg className='co_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186.37 186.37"><circle cx="93.18" cy="93.18" r="93.18" fill="#232323"></circle><path fill="#f7f6ee" d="M134.57 83.13c-1.61.19-7.65 2.75-10.89 2.01-3.24-.75-4.03-3.95-3.96-6.46.07-2.51 2.52-12.28 1.98-13.07-.53-.79-13.43-2.83-15.32-3.27-1.88-.44-7.95.54-3.66 9.6 4.3 9.06-4.39 12.98-7.93 13.95-.53.15-1.23.17-2.01.12v-.02C87.59 86 81.7 82.6 82.8 77.3c1.31-6.37 6.85-16.88-6-14.63-12.87 2.24-13.36 2.82-13.63 2.84-.26.01 1.8 10.4 2.26 12.97.66 3.66-1.12 5.8-2.89 6.92-.23.2-.48.35-.75.48s-.56.23-.87.3c-.01 0-.03.01-.04.02-.31.1-.75.14-1.27.13h-.21c-.07 0-.13 0-.2-.01-.33-.01-.67-.04-1.02-.08-2.96-.31-7.08-1.31-8.35-1.35-1.77-.06-8.02 1.47-8.19 10.02-.03 1.31.13 2.44.41 3.4 1.56 5.27 7.09 5.6 8.45 5.44.85-.1 2.91-.85 5.14-1.44 2.03-.53 4.2-.92 5.75-.57 3.08.71 3.95 3.63 3.96 6.08v.38c-.07 2.51-2.52 12.28-1.98 13.07.53.79 13.43 2.83 15.32 3.27.51.12 1.32.13 2.16-.09 2.25-.59 4.64-2.9 1.5-9.51-3-6.32.31-10.13 3.79-12.19 1.51-.9 3.06-1.46 4.14-1.76.53-.14 1.23-.17 2.01-.11v.02c5.19-.01 11.09 3.38 9.99 8.67-.35 1.69-.99 3.68-1.52 5.64-.49 2.52-.95 5.26-.6 6.37.1.3.23.64.4.98.95 1.64 3.19 2.43 7.72 1.64 12.86-2.24 13.36-2.82 13.62-2.84.27-.02-1.8-10.41-2.26-12.97-.87-4.88 2.58-7.05 4.57-7.72 2-.66 9.28 1.25 11.05 1.31 1.76.06 8.02-1.48 8.19-10.01.16-8.53-7.27-9.04-8.88-8.84z"></path></svg>
              </div>
              <div>
                <h2 className='co_h2'>User Interaction and Social Sharing:</h2>
                <motion.div
                  whileInView={{ opacity: [0, 1], x: [30, 0] }}
                  transition={{ duration: 2 }}>
                  <p className='co_p'>Many blog web apps include features for user interaction and social sharing. Readers can leave comments, like, and share posts on social media platforms directly from the blog, fostering engagement. These services help bloggers build a community and expand their reach by leveraging the power of social networks.</p>
                </motion.div>
              </div>
            </li>
          </ul>
        </div>
      </motion.div>
      <div className='contact-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89961.0680017138!2d77.66743348162798!3d27.44905413809195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397376c66d9638e3%3A0xa2b6d8df8bd25aef!2sOM%20Nagar%20Colony%2C%20NH-2%2C%20near%20Birjapur%2C%20Birjapur%2C%20Mathura%2C%20Uttar%20Pradesh%20281006!5e0!3m2!1sen!2sin!4v1699385319022!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      </div>
    </>
  )
}

export default Contact
