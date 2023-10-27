import 'boxicons'
import React, { useState } from 'react'
import "./Contact.css"
export default function Contact() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [subject,setSubject] = useState("")
  const [message,setMessage] = useState("")

  const sendData = async () =>{
    try{
      const user = {
        name:name,
        email:email,
        subject:subject,
        message:message
      };
      const data = await fetch("http://localhost:8000/api/user/contact",{
        method:"post",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
      });
    }catch{}
  };

  const name1 = (e) =>{
    const value = e.target.value;
    setName(value)
  };

  const email1 = (e)=>{
    const value = e.target.value;
    setEmail(value)
  };

  const subject1 = (e)=>{
    const value = e.target.value;
    setSubject(value)
  };

  const message1 = (e)=>{
    const value = e.target.value;
    setMessage(value)
  };

  return (
    <>
     {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
     <section id="contact" class="contact my-5">

      {/* <!--  Section Title --> */}
     
      {/* <!-- End Section Title --> */}

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-6">

            <div class="row gy-4">
              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="200">
                <box-icon name="rocket"></box-icon>
                  <h3>Address</h3>
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="300">
                <box-icon name="rocket"></box-icon>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                  <p>+1 6678 254445 41</p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="400">
                <box-icon name="Envelope"></box-icon>
                  <h3>Email Us</h3>
                  <p><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="a9c0c7cfc6e9ccd1c8c4d9c5cc87cac6c4">[email&#160;protected]</a></p>
                  <p><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="5c3f3332283d3f281c39243d312c3039723f3331">[email&#160;protected]</a></p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="500">
                <box-icon name="rocket"></box-icon>
                  <h3>Open Hours</h3>
                  <p>Monday - Friday</p>
                  <p>9:00AM - 05:00PM</p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

            </div>

          </div>

          <div class="col-lg-6">
            <form action=""  class="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div class="row gy-4">

                <div class="col-md-6">
                  <input type="text" name="name" class="form-control" placeholder="Your Name" onChange={name1} value={name} required/>
                </div>

                <div class="col-md-6 ">
                  <input type="email" class="form-control" name="email" placeholder="Your Email" onChange={email1} value={email} required/>
                </div>

                <div class="col-md-12">
                  <input type="text" class="form-control" name="subject" placeholder="Subject" onChange={subject1} value={subject} required/>
                </div>

                <div class="col-md-12">
                  <textarea class="form-control" name="message" rows="6" placeholder="Message" onChange={message1} value={message} required></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit" onClick={sendData}>Send Message</button>
                </div>

              </div>
            </form>
          </div>
          {/* <!-- End Contact Form --> */}

        </div>

      </div>

    </section>
    <section id="faq" class="faq section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title text-center">
          <h2>Frequently Asked Questions</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" class="collapsed">Feugiat scelerisque varius morbi enim nunc? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" class="collapsed">Dolor sit amet consectetur adipiscing elit? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-3" class="collapse" data-bs-parent=".faq-list">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" class="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-4" class="collapse" data-bs-parent=".faq-list">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="500">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" class="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </section>
    {/* <!-- End Frequently Asked Questions Section --> */}
           {/* <!-- Contact Section - Home Page --> */}
    
    {/* <!-- End Contact Section --> */}
    </>
  )
}
