import React from "react";
import HeaderCreator from "./components/organisms/HeaderCreator";


export const AvaArray = [
  "http://localhost:1337/uploads/ava24_1_aab4edc594.svg",
  "http://localhost:1337/uploads/ava24_2_662290c107.svg",
  "http://localhost:1337/uploads/ava24_3_3212ec06f0.svg",
  "http://localhost:1337/uploads/ava24_4_3259c339a9.svg",
  "http://localhost:1337/uploads/ava24_5_962c197334.svg",
  "http://localhost:1337/uploads/ava24_6_e2f062e229.svg",
  "http://localhost:1337/uploads/ava24_7_851fdbfefb.svg",
  "http://localhost:1337/uploads/ava24_8_4b8f1ef358.svg",
  "http://localhost:1337/uploads/ava24_9_0abd663893.svg",
  "http://localhost:1337/uploads/ava24_10_d16c18cd18.svg"
];

export const VideoUserArray = [
  "http://localhost:1337/uploads/video1_main_e8a595b0ab.webp",
  "http://localhost:1337/uploads/video2_main_f9bdb703bb.webp",
  "http://localhost:1337/uploads/video3_main_4b38f2e61d.webp",
  "http://localhost:1337/uploads/video4_main_0dc2dc9c07.webp",
  "http://localhost:1337/uploads/video5_main_c4903af30d.webp",
  "http://localhost:1337/uploads/video6_main_30306bdaaa.webp",
  "http://localhost:1337/uploads/video7_main_433f386350.webp",
  "http://localhost:1337/uploads/video8_main_17550f140e.webp",
  "http://localhost:1337/uploads/video9_main_52dd68251b.webp",
]

export const EleonaraPena = {
  video: [
    "http://localhost:1337/uploads/video1_main_e8a595b0ab.webp",
    "http://localhost:1337/uploads/video2_main_f9bdb703bb.webp",
    "http://localhost:1337/uploads/video3_main_4b38f2e61d.webp",
    "http://localhost:1337/uploads/video4_main_0dc2dc9c07.webp",
    "http://localhost:1337/uploads/video5_main_c4903af30d.webp",
    "http://localhost:1337/uploads/video6_main_30306bdaaa.webp",
    "http://localhost:1337/uploads/video7_main_433f386350.webp",
    "http://localhost:1337/uploads/video8_main_17550f140e.webp",
    "http://localhost:1337/uploads/video9_main_52dd68251b.webp",
  ],
  ava: "http://localhost:1337/uploads/ava24_2_662290c107.svg",
  bigVideo: 'http://localhost:1337/uploads/video_player_5c0bce28e8.webp',
  ava40: 'http://localhost:1337/uploads/ava40_eleonara_Pena_6d740e724c.svg'
}

export const RobertFox = {
  video: [
    "http://localhost:1337/uploads/video1_main_e8a595b0ab.webp",
    "http://localhost:1337/uploads/video2_main_f9bdb703bb.webp",
    "http://localhost:1337/uploads/video3_main_4b38f2e61d.webp",
    "http://localhost:1337/uploads/video4_main_0dc2dc9c07.webp",
    "http://localhost:1337/uploads/video5_main_c4903af30d.webp",
    "http://localhost:1337/uploads/video6_main_30306bdaaa.webp",
    "http://localhost:1337/uploads/video7_main_433f386350.webp",
    "http://localhost:1337/uploads/video8_main_17550f140e.webp",
    "http://localhost:1337/uploads/video9_main_52dd68251b.webp",
  ],
  ava: "http://localhost:1337/uploads/ava24_3_3212ec06f0.svg",
}

export const Icones = {
  greenBird: "http://localhost:1337/uploads/green_bird_f79abeef99.svg",
  bucket: "http://localhost:1337/uploads/Trash_1e26f8015b.svg",
  dots: "http://localhost:1337/uploads/dots_a29bc83356.svg",
  orangeDots: "http://localhost:1337/uploads/orange_dots_5ed11d0a15.svg",
  uploadLogo: "http://localhost:1337/uploads/upload_logo_5ce3b34e53.svg",
  addFile: "http://localhost:1337/uploads/add_File_85c60d717f.svg",
  arrowDown: "http://localhost:1337/uploads/Arrow_down_66cfb82a8d.svg",
  question: "http://localhost:1337/uploads/question_d479bc24a3.svg",
  success: "http://localhost:1337/uploads/success_dcdd469bce.svg",
  search: "http://localhost:1337/uploads/Search_input_0ef97368b8.svg",
  close: "http://localhost:1337/uploads/Close_5533c351fb.svg",
  approved: "http://localhost:1337/uploads/aproved_8769dabf9f.svg",
  edit: "http://localhost:1337/uploads/Edit_20x20_ec3decd7af.svg",
  diamond: "http://localhost:1337/uploads/Diamond_20x20_8ce22f2803.svg",
  logOut: "http://localhost:1337/uploads/Log_out_20x20_ff1ba3ce09.svg",
  avaEmpty: "http://localhost:1337/uploads/ava_empty_5182dede9e.svg",
  logo: "http://localhost:1337/uploads/logo_ef5f778a28.svg",
  like: "http://localhost:1337/uploads/like_7b171e13e7.svg",
  dislike: "http://localhost:1337/uploads/dislike_3dd75f9c8c.svg"
}
export const Preview = {
  previewVimeo: "http://localhost:1337/uploads/vimeo_player_e4351298da.webp"
}


// export const postVideoDefault = () => {
//   const videoArray = [Video1,Video2,Video3,Video4,Video5,Video6,Video7,Video8]
//   //data-request---------------------------------------------------------------
//   const [formData, setFormData] = useState(null);
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       for (const video of videoArray) {
//         const formDataServer = new FormData();
//         formDataServer.append("files", video);

//         const response = await axios.post(
//           "http://localhost:1337/api/upload",
//           formDataServer
//         );

//         if (response.status === 200) {
//           const videoItem = response.data[0].id;
//           console.log(videoItem);

//           const requestData = {
//             data: {
//               videos: videoItem,
//             },
//           };

//           const profileResponse = await axios.post(
//             "http://localhost:1337/api/Maksyms",
//             requestData
//           );
//         } else {
//           console.error("Upload video failed");
//         }
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   handleSubmit()
// }

