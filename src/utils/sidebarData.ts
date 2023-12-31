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
    route: "/playlist/PLUcwSypGF88psiobBt1b9uBqMNWobKvFQ",
    icon: laterIcon,
  },
  {
    text: "Cat videos",
    route: "/playlist/PLUcwSypGF88qmfOeNkB5yFQJ_7YrpW3s3",
    icon: listIcon,
  },
]

const channelSubs = [
  {
    name: "Lofi Girl",
    route: "/channel/UCSJ4gkVC6NrvII8umztf0Ow",
    avatar: "https://yt3.googleusercontent.com/gY8H7K-3Eg3olVftRBiqqFe-N5d9Rx90jAsrfQuxDa4m32Wm-kWK6AQJhwchvYLf-H4EjGhCSw=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Traversy Media",
    route: "/channel/UC29ju8bIPH5as8OGnQzwJyA",
    avatar: "https://yt3.googleusercontent.com/ytc/AOPolaT_7mZQjCdmaa3h1bJ-jUspCCfvL_1MNLRWYP-L3A=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Luke Smith",
    route: "/channel/UC2eYFnH61tmytImy1mTYvhA",
    avatar: "https://yt3.googleusercontent.com/WEh3wNCWfxK7vgqVwTRLck3_76wm-pzsVO84gSeHUelk70-6njLXpP3jHTcEqHSjCrkSTtdL_w=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Louis Rossmann",
    route: "/channel/UCl2mFZoRqjw_ELax4Yisf6w",
    avatar: "https://yt3.googleusercontent.com/R3gmOcHjkiO6FMCSoAMSrUkIliuT42oGUiWTgIeauigfTyqPLAv4UxwsXIqFN3s2b3uJ846y-Q=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Ben Eater",
    route: "/channel/UCS0N5baNlQWJCUrhCEo8WlA",
    avatar: "https://yt3.googleusercontent.com/ytc/AOPolaRrY6YUKKlIqyA6h1HVtdQM4IqoT2gc3rabqqYl=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Jack Herrington",
    route: "/channel/UC6vRUjYqDuoUsYsku86Lrsw",
    avatar: "https://yt3.googleusercontent.com/ytc/AOPolaQejEQ1wJXNgJdv_ah_WsXWHBs7if8Y6Z1tKkCOkg=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "3Blue1Brown",
    route: "/channel/UCYO_jab_esuFRV4b17AJtAw",
    avatar: "https://yt3.googleusercontent.com/ytc/AOPolaROW_3OBcak6OYl0JetcvYY8xmEvVJbXVhkxYxbPA=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Tibees",
    route: "/channel/UC52kszkc08-acFOuogFl5jw",
    avatar: "https://yt3.ggpht.com/o4Z1JBn15yRwJi-H0Vb6pj3jsdezVyYXNEO-aQvn5gKcyXJtGMak90CTPufhXmkKUZjFwbJXVA=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    name: "Dave2D",
    route: "/channel/UCVYamHliCI9rw1tHR1xbkfw",
    avatar: "https://yt3.googleusercontent.com/ytc/AOPolaQMSJwwcYJCD71X-_-nANQQmPUSOgJ9gWEah5jPjQ=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    name: "Fireship",
    route: "/channel/UCsBjURrPoezykLs9EqgamOA",
    avatar: "https://yt3.googleusercontent.com/ytc/AOPolaQ2iMmw9cWFFjnwa13nBwtZQbl-AqGYkkiTqNaTLg=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Kevin Powell",
    route: "/channel/UCJZv4d5rbIKd4QHMPkcABCw",
    avatar: "https://yt3.googleusercontent.com/ytc/AOPolaQR_Lnv5b9h4p1LUPilyh96JlxohG9SO5KfEY84IQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "freeCodeCamp",
    route: "/channel/UC8butISFwT-Wl7EV0hUK0BQ",
    avatar: "https://yt3.googleusercontent.com/ytc/AOPolaTs1IEit9EUooQAJkWS4SkpUE7oMDXYrjIgnOk1Kw=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Brodie Robertson",
    route: "/channel/UCld68syR8Wi-GY_n4CaoJGA",
    avatar: "https://yt3.googleusercontent.com/ytc/AOPolaSRYHLmLH21G_0JEncG0N94-t3DXGqxPVLLt10hUw=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Programmers are also Human",
    route: "/channel/UCi8C7TNs2ohrc6hnRQ5Sn2w",
    avatar: "https://yt3.googleusercontent.com/ytc/AOPolaSpCy0r60g0noTkzzovRmF71UuiCTyDshivIdIm=s176-c-k-c0x00ffffff-no-rj",
  }
]

export { navLinks, playlists, channelSubs }