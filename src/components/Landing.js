import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Landing = () => {

    return (  

    <><div class="px-4 py-5 my-5 col-xxl-12 text-center">
            <img class="d-block mx-auto mb-5 f-r" src={require('../images/1.png')} alt="" width="172" height="157" />
            <h1 class="display-5 fw-bold f-l">Hi, I'm Muhammad Qasim AKA Mystery</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead  p-4 fs-1">“If you think math is hard, try web design.”</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" class="btn btn-dark btn-lg px-4 gap-3">Contact Me</button>
                </div>
            </div>
        </div>
            </>

    );
}
 
export default Landing;