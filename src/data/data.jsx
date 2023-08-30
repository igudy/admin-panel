import User1 from "../assets/user1.png";
import User2 from "../assets/user2.png";
import User3 from "../assets/user3.png";
import ArrowUp from "../assets/arrowUp.png";
import ArrowDown from "../assets/arrowDown.png";

export const customers = [
  {
    id: 1,
    name: "Registered Customers",
    image: User3,
    number: "720.2k",
    arrow: ArrowUp,
    description: "Compared to 699k last week",
    percentage: "2.9%",
  },
  {
    id: 2,
    name: "Active Customers",
    image: User2,
    number: "645.7k",
    arrow: ArrowUp,
    description: "Compared to 699k last week",
    percentage: "2.9%",
  },
  {
    id: 3,
    name: "Active Customers",
    image: User1,
    number: "645.7k",
    arrow: ArrowUp,
    description: "Compared to 699k last week",
    percentage: "2.9%",
  },
  {
    id: 4,
    name: "Active Customers",
    image: User3,
    number: "319k",
    arrow: ArrowDown,
    description: "Compared to 699k last week",
    percentage: "2.9%",
  },
];

export const topCustomers = [
  {
    id: 1,
    initials: "O",
    name: "Olamide Olagunju",
  },
  {
    id: 2,
    initials: "P",
    name: "Precious Isioma",
  },
  {
    id: 1,
    initials: "T",
    name: "Tunda Olagunju",
  },
  {
    id: 1,
    initials: "H",
    name: "Olamide Olagunju",
  },
];

export const lineChartData = [
  {
    time: "12am",
    k: "1k",
    category: "Personal_subscribers",
    count: 4000,
  },
  {
    time: "12am",
    k: "1k",
    category: "Business_subscribers",
    count: 2400,
  },
  {
    time: "3am",
    k: "5k",
    category: "Personal_subscribers",
    count: 3000,
  },
  {
    time: "3am",
    k: "5k",
    category: "Business_subscribers",
    count: 1398,
  },
  // Add more data points for other times and "k" values
];

export const genderData = [
  { name: "Male", value: 400 },
  { name: "Female", value: 300 },
];
