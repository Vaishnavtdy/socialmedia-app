import {
  avatar1,
  avatar2,
  avatar3,
  flower,
  guy,
  jenny,
  robert,
} from "../assets/images";
import { Jenni, cody, esther, miriam, wade } from "../assets/images/Story";

export const TobeFollowed = [
  {
    name: "Wade",
    userName: "@wade",
    image: avatar1,
    status: 0,
  },
  {
    name: "Esther",
    userName: "@esther",
    image: avatar2,
    status: 2,
  },
  {
    name: "Brooklyn",
    userName: "@brooklyn",
    image: avatar3,
    status: 1,
  },
];

export const RecentRequests = [
  {
    name: "Jenny",
    userName: "@jenny",
    image: jenny,
    time: "3 hours ago",
    status: 0,
  },
  {
    name: "Guy",
    userName: "@guy",
    image: guy,
    time: "4 hours ago",
    status: 0,
  },
  {
    name: "Robert",
    userName: "@robert",
    image: robert,
    time: "8 hours ago",
    status: 1,
  },
];

export const StoryDetails = [
  {
    name: "Wade Warren",
    image: wade,
  },
  {
    name: "Esther Howard",
    image: esther,
  },
  {
    name: "Jenny Wilson",
    image: Jenni,
  },
  {
    name: "Cody Fisher",
    image: cody,
  },
  {
    name: "Miriam Cold",
    image: miriam,
  },
];

export const PostsDetails = [
  {
    name: "Miriam",
    userName: "@miriam",
    location: false,
    content:
      "A private and protected community that values its users and is exclusive to you by invitation only. A private and protected community that values its users and is exclusive to you by invitation only...",
    image: false,
    likes: "3.2k",
    comments: "1.5k",
    shares: "1645",
  },
  {
    name: "Miriam",
    userName: "@miriam",
    location: "London",
    content: "How to know when you've had too much of a good thing.",
    image: flower,
    likes: "3.2k",
    comments: "1.5k",
    shares: "1645",
  },
];
