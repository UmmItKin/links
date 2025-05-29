export interface UserData {
  name: string;
  bio: string;
  mail_address: string;
  imageIcon: string;
  repo: string;
  umami_share_url: string;
  gpg_key: string;
  wallpaper: string;
}

export interface SocialButton {
  icon: string;
  url: string;
}

export const userData: UserData = {
  name: "@UmmIt",
  bio: "Cyber Security Student / Arch Linux User / Open Source Lover",
  mail_address: "hi@ummit.dev",
  imageIcon: "https://short.ummit.dev/cutecuteai-icon-1",
  repo: "https://short.ummit.dev/links-repo",
  umami_share_url: "https://short.ummit.dev/links-umami",
  gpg_key: "https://links.ummit.dev/info/UmmIt.gpg",
  wallpaper: "https://short.ummit.dev/ai-socute-1"
};

export const socialButtons: SocialButton[] = [
  {
    icon: "mail",
    url: `mailto:${userData.mail_address}`
  },
  {
    icon: "umami",
    url: `${userData.umami_share_url}`
  }
]; 