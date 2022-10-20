export default function PostFooter() {
  return (
    <div>
      <h2>Share this:</h2>
      <iframe
        src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fbestseenonfoot.com%2Fposts%2Fecuador-quito-and-cotopaxi%2F&layout=button_count&size=large&width=110&height=28&appId"
        width="110"
        height="28"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
      <h2>More Posts!</h2>
      {/* TODO: Comments and add comment */}
    </div>
  );
}
