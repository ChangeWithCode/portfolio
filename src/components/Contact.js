import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
    return (


        <><div class="wrapper rounded d-flex align-items-stretch">
            <div class="bg-yellow">
                <div class="text-white">
                    <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                </div>
                <div class="pt-5 cursive">
                    Please describe your product idea in a nutshell
                </div>
                <div class="pt-sm-5 pt-5 cursive mt-sm-5">
                    We need your email to reach you back
                </div>
            </div>
            <div class="contact-form">
                <div class="h3">Hire Us</div>
                <form>
                    <div class="form-group pt-3">
                        <label for="message">Message</label>
                        <textarea name="message" class="form-control" required></textarea>
                    </div>
                    <div class="d-flex align-items-center flex-wrap justify-content-between pt-4">
                        <div class="form-group pt-lg-2 pt-3">
                            <label for="name ">Your Name</label>
                            <input type="text"  name="name" class="form-control" required />
                        </div>
                        <div class="form-group pt-lg-2 pt-3">
                            <label for="name">Your Email</label>
                            <input type="email" name="email" class="form-control" required />
                        </div>
                    </div>
                    <div class="d-flex align-items-center flex-wrap justify-content-between pt-lg-5 mt-lg-4 mt-5">
                    <button type="button" class="btn btn-dark btn-lg px-4 gap-3" data-bs-toggle="modal" data-bs-target="#myModal">Contact Me</button>
                    </div>
                </form>
            </div>
        </div><div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="myModalLabel">Thank You
                                <span class="fas fa-heart"></span>
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="ps-2">Thank You for sharing your views with us. We will get back to you as soon as
                                possible.</div>
                        </div>
                    </div>
                </div>
            </div></>

    );
}
 
export default Contact;