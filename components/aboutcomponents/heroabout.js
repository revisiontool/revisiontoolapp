import React from 'react'
import style from '../../styles/globalcomponentstyles/heroabout.module.css'
import Heading from './Heading.js'
import Founders from './Founders.js'
import Exam from './Exam.js'
import Why from './Why.js'
import Word from './Word.js'
import Break from './Break.js'
import ContactForm from '../globalcomponents/contactform'
import TypeFormWidget from '../popups/typeformwidget'



export default class HeroAbout extends React.Component {

    static async getInitialProps(){
      return {}
    }

    render() {
        return (
          <div className={style.herotext}>
            <Heading />
            <Founders />
            <Exam />
            <Why />
            <Word />
            <Break />
            {/* <TypeFormWidget /> */}
            <ContactForm />
          </div>
        );
      };
    }
