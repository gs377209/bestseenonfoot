"use client";

import {
  EmailShare,
  FacebookShare,
  GabShare,
  HatenaShare,
  InstapaperShare,
  LineShare,
  LinkedinShare,
  LiveJournalShare,
  MailruShare,
  PinterestShare,
  PocketShare,
  RedditShare,
  TelegramShare,
  TumblrShare,
  VKShareShare,
  ViberShare,
  WeiboShare,
  WhatsappShare,
  WorkplaceShare,
} from "react-share-lite";

interface Props {
  shareURL: string;
}

export default function ShareButtons({ shareURL }: Props) {
  return (
    <div className="mb-5 grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8 2xl:grid-cols-12">
      <FacebookShare url={shareURL} />
      <LinkedinShare url={shareURL} />
      <WhatsappShare url={shareURL} />

      <EmailShare url={shareURL} />
      <GabShare url={shareURL} />
      <HatenaShare url={shareURL} />
      <InstapaperShare url={shareURL} />
      <LineShare url={shareURL} />
      <LiveJournalShare url={shareURL} />
      <MailruShare url={shareURL} />
      <PinterestShare url={shareURL} media="Best Seen on Foot Post" />
      <PocketShare url={shareURL} />
      <RedditShare url={shareURL} />
      <TelegramShare url={shareURL} />
      <TumblrShare url={shareURL} />
      <ViberShare url={shareURL} />
      <VKShareShare url={shareURL} />
      <WeiboShare url={shareURL} />
      <WorkplaceShare url={shareURL} />
    </div>
  );
}
