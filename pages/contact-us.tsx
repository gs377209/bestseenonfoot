import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";

export default function About() {
  const titleText = `Best Seen on Foot | About Us`;

  return (
    <>
      <Layout>
        <Head>
          <title>{titleText}</title>
        </Head>
        <Container>
          <div className="page-title">
            <h1>Contact Us</h1>
          </div>

          <div className="single-post">
            <div className="post-content">
              <article>
                <p>Hi There,</p>
                <p>
                  We are looking forward to hearing from you. Please feel free
                  to get in touch via the form below, we will get back to you as
                  soon as possible.
                </p>
                <p>Best Seen On Foot</p>
                <div id="contact-form-8">
                  <form
                    action="https://www.bestseenonfoot.com/contact-us/#contact-form-8"
                    method="post"
                    className="contact-form commentsblock"
                  >
                    <div className="grunion-field-wrap grunion-field-name-wrap">
                      <label
                        htmlFor="g8-name"
                        className="grunion-field-label name"
                      >
                        Name<span>(required)</span>
                      </label>
                      <input
                        type="text"
                        name="g8-name"
                        id="g8-name"
                        value=""
                        className="name"
                        required
                        aria-required="true"
                      />
                    </div>

                    <div className="grunion-field-wrap grunion-field-email-wrap">
                      <label
                        htmlFor="g8-email"
                        className="grunion-field-label email"
                      >
                        Email<span>(required)</span>
                      </label>
                      <input
                        type="email"
                        name="g8-email"
                        id="g8-email"
                        value=""
                        className="email"
                        required
                        aria-required="true"
                      />
                    </div>

                    <div className="grunion-field-wrap grunion-field-textarea-wrap">
                      <label
                        htmlFor="contact-form-comment-g8-message"
                        className="grunion-field-label textarea"
                      >
                        Message<span>(required)</span>
                      </label>
                      <textarea
                        name="g8-message"
                        id="contact-form-comment-g8-message"
                        rows={20}
                        className="textarea"
                        required
                        aria-required="true"
                      ></textarea>
                    </div>
                    <p className="contact-submit">
                      <button type="submit" className="pushbutton-wide">
                        Submit
                      </button>{" "}
                      <input type="hidden" name="contact-form-id" value="8" />
                      <input
                        type="hidden"
                        name="action"
                        value="grunion-contact-form"
                      />
                      <input
                        type="hidden"
                        name="contact-form-hash"
                        value="5608272955ba472a9280b2369430e1e0665ed617"
                      />
                    </p>
                    <p style={{ display: "none !important;" }}>
                      <label>
                        &#916;
                        <textarea
                          name="ak_hp_textarea"
                          cols={45}
                          rows={8}
                          maxLength={100}
                        ></textarea>
                      </label>
                      <input
                        type="hidden"
                        id="ak_js_1"
                        name="ak_js"
                        value="144"
                      />
                    </p>
                  </form>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
