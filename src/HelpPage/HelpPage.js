import React from 'react'
import './HelpPage.css'

function HelpPage() {

  return (
    <section className="FAQ-container">
            <div className="FAQText">
                    <u> <h1>Here are some FAQs</h1></u>
            <p className='paragraph-container'>
                     <h2> 1. My game is not loading! What should I do?</h2> 

                     <h3> Please make sure you have installed:
                        <ul>
                            <li>✷ Npm install axios</li>
                            <li>✷ Npm install use-sound</li>
                            
                        </ul>
                        Then refresh the site and become a farm tycoon🎉
                     </h3>
                     </p>

                    <p className='paragraph-container'>
                     <h2>2. Why can't I sell my crops?</h2>

                    <h3>Most of our crops take 20 days to be ready to harvest so have a little patience and you will be rewarded!</h3>
                    </p>
                   
                    <p className='paragraph-container'>
                        <h2>3. I don't like my farm. What can I do?</h2>

                        <h3> Firstly, Im sure it was really good!</h3>
                        <h3>If you're really not happy, you can either delete your entire farm or just a specific field and retry!</h3>
                    </p>
            </div>
    
    </section>
  )
}

export default HelpPage