export const userData = {
  name: "UmmIt{ArchUser}",
  bio: "Cyber Security Student / Arch Linux User / Open Source Lover",
  mail_address: "hi@ummit.dev",
  imagePaths: {
    on: "/cute-2.jpg",
    off: "/cute.jpg"
  },
  repo: "https://github.com/UmmItC/Links",
  umami_share_url: "https://cloud.umami.is/share/mLbSeRhkcLXWcdPZ/links.ummit.dev",
  gpg_key: "https://links.ummit.dev/info/UmmIt.gpg",
  wallpaper: "https://github.com/UmmItC/wallpaper/blob/master/%E6%8E%A8%E3%81%97%E3%81%AE%E5%AD%90/%E5%B0%8F%E6%84%9B/1355637.jpeg?raw=true",
};

export const socialButtons = [
  {
    icon: "mail",
    url: `mailto:${userData.mail_address}`
  },
  {
    icon: "umami",
    url: `${userData.umami_share_url}`
  }
]; 