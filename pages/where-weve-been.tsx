import Container from "../components/container";
import Head from "next/head";

export default function About() {
  const titleText = `Best Seen on Foot | About Us`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Container>
        <div className="page-title">
          <h1>Privacy Policy</h1>
        </div>

        <div className="single-post">
          <div className="post-content">
            <article>
              <h2>Who we are</h2>

              <p>Our website address is https://www.bestseenonfoot.com.</p>

              <h2>What personal data we collect and why we collect it</h2>

              <h3>Comments</h3>

              <p>
                When visitors leave comments on the site we collect the data
                shown in the comments form, and also the visitor’s IP address
                and browser user agent string to help spam detection.
              </p>

              <p>
                An anonymized string created from your email address (also
                called a hash) may be provided to the Gravatar service to see if
                you are using it. The Gravatar service privacy policy is
                available here: https://automattic.com/privacy/. After approval
                of your comment, your profile picture is visible to the public
                in the context of your comment.
              </p>

              <h3>Media</h3>

              <p>
                If you upload images to the website, you should avoid uploading
                images with embedded location data (EXIF GPS) included. Visitors
                to the website can download and extract any location data from
                images on the website.
              </p>

              <h3>Contact forms</h3>

              <p>
                We keep contact form submissions for as long as needed for
                customer service purposes, but we do not use the information
                submitted through them for marketing purposes
              </p>

              <h3>Cookies</h3>

              <p>
                If you leave a comment on our site you may opt-in to saving your
                name, email address and website in cookies. These are for your
                convenience so that you do not have to fill in your details
                again when you leave another comment. These cookies will last
                for one year.
              </p>

              <p>
                If you have an account and you log in to this site, we will set
                a temporary cookie to determine if your browser accepts cookies.
                This cookie contains no personal data and is discarded when you
                close your browser.
              </p>

              <p>
                When you log in, we will also set up several cookies to save
                your login information and your screen display choices. Login
                cookies last for two days, and screen options cookies last for a
                year. If you select &#8220;Remember Me&#8221;, your login will
                persist for two weeks. If you log out of your account, the login
                cookies will be removed.
              </p>

              <p>
                If you edit or publish an article, an additional cookie will be
                saved in your browser. This cookie includes no personal data and
                simply indicates the post ID of the article you just edited. It
                expires after 1 day.
              </p>

              <p>
                We also have a few other tracking cookies related to social
                media sites like Facebook and Instagram. There are also some
                site statistics, advertising, and tracking cookies being run by
                Google.
              </p>

              <p>
                You can always use browser tools to delete and block cookies.{" "}
                <a
                  rel="noopener noreferrer"
                  href="http://optout.networkadvertising.org/"
                  target="_blank"
                >
                  NAI Opt Out
                </a>{" "}
                or{" "}
                <a
                  rel="noopener noreferrer"
                  href="http://optout.aboutads.info/"
                  target="_blank"
                >
                  DDA Opt Out
                </a>{" "}
                are also good ways to clean up a lot of tracking and advertising
                cookies on your browser.
              </p>

              <h3>Embedded content from other websites</h3>

              <p>
                Articles on this site may include embedded content (e.g. videos,
                images, articles, etc.). Embedded content from other websites
                behaves in the exact same way as if the visitor has visited the
                other website.
              </p>

              <p>
                These websites may collect data about you, use cookies, embed
                additional third-party tracking, and monitor your interaction
                with that embedded content, including tracking your interaction
                with the embedded content if you have an account and are logged
                in to that website.
              </p>

              <h2>How long we retain your data</h2>

              <p>
                If you leave a comment, the comment and its metadata are
                retained indefinitely. This is so we can recognize and approve
                any follow-up comments automatically instead of holding them in
                a moderation queue.
              </p>

              <p>
                For users that register on our website (if any), we also store
                the personal information they provide in their user profile. All
                users can see, edit, or delete their personal information at any
                time (except they cannot change their username). Website
                administrators can also see and edit that information.
              </p>

              <h2>What rights you have over your data</h2>

              <p>
                If you have an account on this site or have left comments, you
                can request to receive an exported file of the personal data we
                hold about you, including any data you have provided to us. You
                can also request that we erase any personal data we hold about
                you. This does not include any data we are obliged to keep for
                administrative, legal, or security purposes.
              </p>

              <h2>Where we send your data</h2>

              <p>
                Visitor comments may be checked through an automated spam
                detection service.
              </p>

              <h2>Akismet</h2>

              <p>
                We collect information about visitors who comment on Sites that
                use our Akismet anti-spam service. The information we collect
                depends on how the User sets up Akismet for the Site, but
                typically includes the commenter&#8217;s IP address, user agent,
                referrer, and Site URL (along with other information directly
                provided by the commenter such as their name, username, email
                address, and the comment itself).
              </p>

              <h2>Really Simple SSL</h2>

              <p>
                Really Simple SSL and Really Simple SSL add-ons do not process
                any personal identifiable information, so the GDPR does not
                apply to these plugins or usage of these plugins on your
                website. You can find our privacy policy
                <a
                  rel="noreferrer noopener"
                  href="https://really-simple-ssl.com/privacy-statement/"
                  target="_blank"
                >
                  here
                </a>
                .
              </p>

              <h2>WP Travel Engine</h2>

              <p>
                We collect information about your name and email during
                subscription. This information may include but is not limited
                to, your name, email address and any other details that might be
                requested from you for the purpose of subscribing your email.
                <br />
                Handling this data also allows us to:
              </p>

              <ul>
                <li>Send you important account/order/service information.</li>
                <li>Respond to your queries or complaints.</li>
                <li>
                  Set up and administer your account, provide technical and/or
                  customer support, and to verify your identity.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </Container>
    </>
  );
}
