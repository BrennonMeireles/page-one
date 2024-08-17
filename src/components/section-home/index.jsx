import './section-home.css'
import ImgDefault from '../../assets/img/img.svg'

export default function SectionHome(){
    return(
        <>
            <section>
                <div>
                    <h1>Resonate with the visitor's problem</h1>
                    <p>Describe exactly what your product or service does to solve this problem. Avoid using verbose words or phrases.</p>
                    <article>
                        <div>
                            <input type="text" placeholder="Enter your email"/>
                            <button>Try it for free</button>
                        </div>
                        <a href="">By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</a>
                    </article>
                </div>
                <img src={ImgDefault} style={{width: 616, height:640 }} alt="" />
            </section>
        </>
    )
}