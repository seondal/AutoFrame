import { Metadata } from "next";
import { GOOGLE_ADSENSE, GOOGLE_SEARCH, NAVER_SEARCH } from "./env";

export const META_DATA: Metadata = {
  title: {
    default: `Noviwi`,
    template: `Noviwi | %s`,
  },
  description: "노션 동영상 자동 재생 위젯",
  // openGraph: {
  //   title: "title",
  //   description: "description",
  //   images: ["/meta/og.png"],
  // },
  icons: {
    icon: "/meta/favicon.ico",
    apple: "/meta/favicon.ico",
  },
  verification: {
    google: GOOGLE_SEARCH,
  },
  other: {
    "naver-site-verification": NAVER_SEARCH,
    "google-adsense-account": GOOGLE_ADSENSE,
  },
};
