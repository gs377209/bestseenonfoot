"use client";

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  GabIcon,
  GabShareButton,
  HatenaIcon,
  HatenaShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalIcon,
  LivejournalShareButton,
  MailruIcon,
  MailruShareButton,
  PinterestIcon,
  PinterestShareButton,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  VKIcon,
  VKShareButton,
  ViberIcon,
  ViberShareButton,
  WeiboIcon,
  WeiboShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceIcon,
  WorkplaceShareButton,
} from "next-share";

interface Props {
  shareURL: string;
}

export default function ShareButtons({ shareURL }: Props) {
  return (
    <div className="mb-5 grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8 2xl:grid-cols-12">
      <FacebookShareButton url={shareURL}>
        <FacebookIcon />
      </FacebookShareButton>
      <LinkedinShareButton url={shareURL}>
        <LinkedinIcon />
      </LinkedinShareButton>
      <WhatsappShareButton url={shareURL}>
        <WhatsappIcon />
      </WhatsappShareButton>
      <EmailShareButton url={shareURL}>
        <EmailIcon />
      </EmailShareButton>
      <GabShareButton url={shareURL}>
        <GabIcon />
      </GabShareButton>
      <HatenaShareButton url={shareURL}>
        <HatenaIcon />
      </HatenaShareButton>
      <InstapaperShareButton url={shareURL}>
        <InstapaperIcon />
      </InstapaperShareButton>
      <LineShareButton url={shareURL}>
        <LineIcon />
      </LineShareButton>
      <LivejournalShareButton url={shareURL}>
        <LivejournalIcon />
      </LivejournalShareButton>
      <MailruShareButton url={shareURL}>
        <MailruIcon />
      </MailruShareButton>
      <PinterestShareButton url={shareURL} media="Best Seen on Foot Post">
        <PinterestIcon />
      </PinterestShareButton>
      <PocketShareButton url={shareURL}>
        <PocketIcon />
      </PocketShareButton>
      <RedditShareButton url={shareURL}>
        <RedditIcon />
      </RedditShareButton>
      <TelegramShareButton url={shareURL}>
        <TelegramIcon />
      </TelegramShareButton>
      <TumblrShareButton url={shareURL}>
        <TumblrIcon />
      </TumblrShareButton>
      <ViberShareButton url={shareURL}>
        <ViberIcon />
      </ViberShareButton>
      <VKShareButton url={shareURL}>
        <VKIcon />
      </VKShareButton>
      <WeiboShareButton url={shareURL}>
        <WeiboIcon />
      </WeiboShareButton>
      <WorkplaceShareButton url={shareURL}>
        <WorkplaceIcon />
      </WorkplaceShareButton>
    </div>
  );
}
