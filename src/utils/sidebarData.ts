import homeIcon from '../components/icons/home.svg?raw';
import fireIcon from '../components/icons/fire.svg?raw';
import subIcon from '../components/icons/subscriptions.svg?raw';
import libIcon from '../components/icons/library.svg?raw';
import histIcon from '../components/icons/history.svg?raw';
import vidIcon from '../components/icons/videos.svg?raw';
import laterIcon from '../components/icons/schedule.svg?raw';
import listIcon from '../components/icons/playlist.svg?raw';

const navLinks = [
  {
    text: "Home",
    route: "/",
    icon: homeIcon
  },
  {
    text: "Trending",
    route: "/feed/trending",
    icon: fireIcon
  },
  {
    text: "Subscriptions",
    route: "/feed/subscriptions",
    icon: subIcon
  }
]

const playlists = [
  {
    text: "Library",
    route: "/feed/library",
    icon: libIcon,
  },
  {
    text: "History",
    route: "/feed/history",
    icon: histIcon,
  },
  {
    text: "Your videos",
    route: "/feed/your-videos",
    icon: vidIcon,
  },
  {
    text: "Watch later",
    route: "/playlist?list=WL",
    icon: laterIcon,
  },
  {
    text: "Cat videos",
    route: "/playlist?list=catvideos",
    icon: listIcon,
  },
]

const channelSubs = [
  {
    name: "Lofi Girl",
    route: "/channel/",
    avatar: "https://yt3.googleusercontent.com/gY8H7K-3Eg3olVftRBiqqFe-N5d9Rx90jAsrfQuxDa4m32Wm-kWK6AQJhwchvYLf-H4EjGhCSw=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Traversy Media",
    route: "/channel/",
    avatar: "https://yt3.googleusercontent.com/ytc/AOPolaT_7mZQjCdmaa3h1bJ-jUspCCfvL_1MNLRWYP-L3A=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Luke Smith",
    route: "/channel/",
    avatar: "https://yt3.googleusercontent.com/WEh3wNCWfxK7vgqVwTRLck3_76wm-pzsVO84gSeHUelk70-6njLXpP3jHTcEqHSjCrkSTtdL_w=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Louis Rossmann",
    route: "/channel/",
    avatar: "https://yt3.googleusercontent.com/R3gmOcHjkiO6FMCSoAMSrUkIliuT42oGUiWTgIeauigfTyqPLAv4UxwsXIqFN3s2b3uJ846y-Q=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Ben Eater",
    route: "/channel/",
    avatar: "https://yt3.googleusercontent.com/ytc/AOPolaRrY6YUKKlIqyA6h1HVtdQM4IqoT2gc3rabqqYl=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Jack Herrington",
    route: "/channel/",
    avatar: "https://yt3.googleusercontent.com/ytc/AOPolaQejEQ1wJXNgJdv_ah_WsXWHBs7if8Y6Z1tKkCOkg=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "3Blue1Brown",
    route: "/channel/",
    avatar: "https://yt3.googleusercontent.com/ytc/AOPolaROW_3OBcak6OYl0JetcvYY8xmEvVJbXVhkxYxbPA=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Fireship",
    route: "/channel/",
    avatar: "https://yt3.googleusercontent.com/ytc/AOPolaQ2iMmw9cWFFjnwa13nBwtZQbl-AqGYkkiTqNaTLg=s176-c-k-c0x00ffffff-no-rj",
  },
]

export { navLinks, playlists, channelSubs }