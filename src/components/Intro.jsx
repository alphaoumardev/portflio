import  "./css/intro.css"
import diallo from './img/921.png'
const Intro = () =>
{
    return (
        <div className="i">
             <div className="left">
                 <div className="wrapper">
                     <h2 className="intro">Hello my Name is </h2>
                     <h1 className="name">Alph Oumar Diallo </h1>
                     <div className="title">
                         <div className="title-wrapper">
                             <div className="title-item">Web Developer</div>
                             <div className="title-item">UI Designer</div>
                             <div className="title-item">Blog writer</div>
                             <div className="title-item">Content Creator</div>
                             <div className="title-item">Psychologist</div>
                         </div>
                     </div>
                     <p className="description">
                         Welcome to the JavaScriptTutorial.net website!
                         This JavaScript Tutorial helps you learn the JavaScript programming language
                         from scratch quickly and effectively.
                         Are not sure where to start learning JavaScript.
                     </p>
                 </div>
             </div>

            <div className="right">

                <div className="clip">
                    <img className="diallo" src={diallo} alt="me"/>
                </div>
            </div>


        </div>
    );
};

export default Intro;
