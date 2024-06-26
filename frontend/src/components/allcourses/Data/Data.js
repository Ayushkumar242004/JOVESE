// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";
  
  // Analytics Cards imports
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
  import { keyboard } from "@testing-library/user-event/dist/keyboard";
  
  // Recent Card Imports
  import img1 from "../imgs/img1.png";
  import img2 from "../imgs/img2.png";
  import img3 from "../imgs/img3.png";
  
  // Sidebar Data
  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilClipboardAlt,
      heading: "Refer And Earn",
    },
    // {
    //   icon: UilUsersAlt,
    //   heading: "Certification",
    // },
    // {
    //   icon: UilPackage,
    //   heading: 'Upgrade Program'
    // },
    
  ];
  
  // Analytics Cards Data
  export const cardsData = [
    {
      title: "Total Refferals",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "10",
      png: UilUsdSquare,
      series: [
        {
          name: "Total Refferals",
          data: [1, 0, 2, 1, 4, 0, 2],
        },
      ],
    },
    {
      title: "Total Earnings",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: " ₹270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Total Earnings",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Wallet Balance",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: " ₹4,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  
  // Recent Update Card Data
  export const UpdatesData = [
    {
      img: img1,
      name: "Step 1",
      noti: "Give your code to friends",
      // time: "25 seconds ago",
    },
    {
      img: img2,
      name: "Step 2",
      noti: "Purchase the course.",
      // time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Step 3",
      noti: "In a short time , you will be redirected to your course.",
      // time: "2 hours ago",
    },
  ];
  