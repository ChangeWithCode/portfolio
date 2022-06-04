const About = () => {
    return ( 
        <div class="container px-1 py-2 col-xxl-10 overflow-hidden">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5 overflow-hidden">
            <div class="col-lg-6 overflow-hidden">
                <h3 class="display-5 fw-bold lh-1 mb-3 heading">About Me</h3>
                <p class="lead pb-4 pt-4 about_para" >I'm a Pakistani based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" class="btn btn-dark btn-lg px-4 me-md-2">More About Me</button>
                </div>
            </div>
            <div class="col-lg-6 overflow-hidden">

            <img class="d-block mx-auto mb-5 f-r" src={require('../images/web.png')} alt="" width="450"  />
            </div>
        </div>
    </div>


     );
}
 
export default About;