import { BASE_URL } from "@/lib/constants";

export default function SubscribeForm() {
  return (
    <aside
      id="blog_subscription-3"
      className="widget widget_blog_subscription jetpack_subscription_widget"
    >
      <h5 className="widget-title">Subscribe to Future Posts!</h5>
      <div className="wp-block-jetpack-subscriptions__container">
        <form
          action="#"
          method="post"
          accept-charset="utf-8"
          id="subscribe-blog-blog_subscription-3"
        >
          <p id="subscribe-email">
            <label
              id="jetpack-subscribe-label"
              className="screen-reader-text"
              htmlFor="subscribe-field-blog_subscription-3"
            >
              Email Address{" "}
            </label>
            <input
              type="email"
              name="email"
              required
              value=""
              id="subscribe-field-blog_subscription-3"
              placeholder="Email Address"
            />
          </p>

          <p id="subscribe-submit">
            <input type="hidden" name="action" value="subscribe" />
            <input
              type="hidden"
              name="source"
              value={`${BASE_URL}/2018/10/11/ecuador-quito-and-cotopaxi/`}
            />
            <input type="hidden" name="sub-type" value="widget" />
            <input
              type="hidden"
              name="redirect_fragment"
              value="subscribe-blog-blog_subscription-3"
            />
            <button
              type="submit"
              className="wp-block-button__link"
              name="jetpack_subscriptions_widget"
            >
              Subscribe{" "}
            </button>
          </p>
        </form>
      </div>
    </aside>
  );
}
