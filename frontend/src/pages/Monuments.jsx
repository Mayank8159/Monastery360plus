import React, { useState } from "react";
import { Landmark, MapPin } from "lucide-react";

const monumentsData = {
  rumtek: {
    name: "Rumtek Monastery",
    description:
      "Nestled on a hilltop overlooking Gangtok, Rumtek Monastery is the largest and most significant monastery in Sikkim, serving as the spiritual seat of the Karmapa, the head of the Kagyu sect of Tibetan Buddhism. Renowned for its grand architecture, golden stupa, and intricate murals depicting Buddhist teachings, the monastery is both a center of deep spiritual practice and a cultural landmark that attracts thousands of pilgrims and visitors each year. Beyond its sacred halls, Rumtek also functions as a vibrant hub for Buddhist learning, meditation, and rituals, preserving centuries-old traditions while opening its doors to global seekers who come to experience its serene atmosphere and spiritual legacy.",
    image:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR9oo3B4ZPozgrH2fxVGqbxHU_UtQ14gNHwJN4ds0jYv3GY_KzMoyotnCUS1OU2UW0jHCX9IPoFr48YUV-XP7sqfn3O8fS__POJXlKd0VQJg-0Wl-0",
  },
  enchey: {
    name: "Enchey Monastery",
    description:
      "Perched on a scenic ridge with panoramic views of Gangtok, Enchey Monastery is a 200-year-old sacred site deeply associated with Guru Padmasambhava, the revered Buddhist master credited with spreading Tantric Buddhism across the Himalayas. Built in the early 19th century, this serene monastery is adorned with vibrant murals, fluttering prayer flags, and traditional Bhutanese-style architecture that reflects Sikkim’s rich spiritual heritage. Enchey, meaning “the solitary temple,” continues to be a place of meditation and devotion, hosting colorful festivals like the annual Cham dance, where masked monks perform sacred rituals symbolizing the triumph of good over evil. Its peaceful ambiance, coupled with its cultural significance, makes it a must-visit spiritual haven for pilgrims and travelers alike.",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS8u3hcbX8q6zIsLVoVLzJ1tNIwneyLCiBR3l5Lp_TUaqk_j4feeq0061UrPdL4VBw0S9kBaAC6nqW7MHv11DPoFoyHwhpgZkz3zYbxplXq1RRkZ14",
  },
  pemayangtse: {
    name: "Pemayangtse Monastery",
    description:
      "Founded in 1705, Pemayangtse Monastery is one of the oldest and most revered monasteries in Sikkim, holding a central place in the state’s spiritual and cultural history. Perched on a hilltop near Pelling, it commands breathtaking panoramic views of the majestic Himalayas, including the towering Kanchenjunga. The monastery is renowned for its exquisite collection of ancient sculptures, thangkas, and murals that narrate Buddhist legends with intricate artistry. As the principal seat of the Nyingma sect, Pemayangtse was originally established to house only “pure monks,” symbolizing its deep religious sanctity. One of its most unique treasures is the seven-tiered wooden model of the heavenly palace, Sangtok Palri, meticulously carved by a single lama. Each year, the monastery comes alive during the vibrant Cham dances, when masked monks perform ritualistic dances that embody the triumph of good over evil. With its blend of spirituality, heritage, and natural beauty, Pemayangtse offers visitors a profound journey into the soul of Sikkim’s Buddhist traditions.",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQlXpSxFuvyz6_xkYVu1q5qTEZDQ-FpMwYoxPc4gHMAD8HW89_EucTxu3LbiGtCMthgOj-s_AJ777CIWMPCk_Nnb2JOGCakK1k-3ijl_4rZC96Oj-A",
  },
  rabdentse: {
    name: "Rabdentse Ruins",
    description:
      "The Rabdentse Ruins, once the second capital of Sikkim until 1814, stand today as a remarkable testament to the kingdom’s royal past. Located near Pelling, this historic site overlooks a tranquil valley with sweeping views of the Kanchenjunga range, making it both culturally significant and scenically captivating. The remnants of chortens, palace walls, and stone pathways whisper stories of Sikkim’s former rulers, who governed from here for over a century. Surrounded by lush forests and accessible through a peaceful nature trail, Rabdentse offers visitors a unique blend of history, spirituality, and natural beauty. Now maintained as an archaeological site, it provides a rare opportunity to step back in time and experience the grandeur and legacy of Sikkim’s early monarchy amidst serene Himalayan surroundings.",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQls6GC5De-K9vnSyp7i-e3-mKXQZbBQRcmZk8YoQu4B0SHI3EI4B8L9_R5W0ISLcchMHBrc9mr_MQNYEBXQUWOOthxDzndnEpvnN4pNNFGOLTzHCY",
  },
  lingdum: {
    name: "Lingdum (Ranka) Monastery",
    description:
      "Set against a backdrop of rolling hills and dense forests, Lingdum Monastery, also known as Ranka Monastery, is one of the most visually stunning and tranquil Buddhist sites near Gangtok. Built in traditional Tibetan style, its grand golden-roofed structure, intricately painted walls, and expansive courtyards create an atmosphere of peace and devotion. The monastery belongs to the Zurmang Kagyu lineage and serves as an important center of learning for young monks, who can often be seen engaged in prayer, debate, and ritual practice. Visitors are drawn not only by the monastery’s architectural beauty but also by the serene environment, prayer halls adorned with vibrant murals, and the rhythmic chants that echo through its sacred halls. A popular destination for both pilgrims and tourists, Lingdum offers a perfect blend of spirituality, cultural richness, and scenic charm, making it a must-visit spot in East Sikkim.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrYMY-mxrg1sfwOWslWpYMWbZx_UQ7Ry4dL6uaB16de7tC7F6p57KTqb9UH5ge",
  },
  phodong: {
    name: "Phodong Monastery",
    description:
      "An important Kagyu monastery, Phodong is famous for its murals and annual Cham dance festival.",
    image:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTIFp7_XAGL5jaf8K5eSqn_Ptw9jq0gs7n6FNYFKeH_D57ItPEdkRzG8ni7cx0TxpYvfDS44TPTZcHmJ7UKyEt6_uQM6Dt0XKUilBYSqC7YrhNST3g",
  },
  sangaChoeling: {
    name: "Sanga Choeling Monastery",
    description:
      "Located near Pemayangtse, Sanga Choeling is one of the oldest monasteries in Sikkim, accessible via a short trek.",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwjwy6E7hkg-3EkYaYUZ8UMmPk66jGyBx5nY9PljgeKKuL-MRIVIRUfa4UnkfR",
  },
  tashiding: {
    name: "Tashiding Monastery",
    description:
      "Renowned for the Bhumchu festival, Tashiding is believed to cleanse devotees of all sins.",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQdtHbPEbW8KlGGiSLXcVWszdtaSJHQEnn9NY3MwQsP2ekdtEmw8UiW3pE--tmF9enbWOQhfjucGHP41AdI-gdCf9FnieW0Mse2-QC84MFibhlvcgQ",
  },
  kartok: {
    name: "Kartok Monastery",
    description:
      "Located in Yuksom, Kartok is small but holds great spiritual importance.",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzNu89tEhJ8Y6Jb4HPrjrZE9lOgAGEVOiSI4_vebWg4R22kqbSMsWI3AZZW8u1",
  },
  lachen: {
    name: "Lachen Monastery",
    description:
      "Built in 1858, this monastery is the spiritual center for the Lachenpas and gateway to Gurudongmar Lake.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvVDCUvf8jL2JWoNRT9jVonDs3b9Isfcyvt_bcTTrLuTTldzDTJdJLPIyBRYl",
  },
  lachung: {
    name: "Lachung Monastery",
    description:
      "Located near Yumthang Valley, this monastery is central to the cultural life of Lachung village.",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS8s-WnqtDOA-HjH7hTaXGHjOuMfj3jhN6xf98HbJYa5TwA-k4OB5iENUvWLi7KBdPnd_2Fb-vBFd_FWEFdG5YYwVJczHUfXhqecu0ezxKrHVvun4U",
  },
  ralang: {
    name: "Ralang Monastery",
    description:
      "A major Kagyu monastery near Ravangla, known for its grand Kagyed Chaam festival with vibrant mask dances.",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTcf_4k-d0xyfqSlUqFNBakMdi09_A9bkPp6A6YOk8PbfIsZsW0Ja4BDMH2SggX",
  },
  bon: {
    name: "Bon Monastery (Khamdong)",
    description:
      "The only Bon monastery in Sikkim, dedicated to the pre-Buddhist Bon tradition of Tibet.",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRm6RYamNC_sMA-5ZBJm0faSj961c4fJdOxM6enYfrdsxFCooT3bZ-Ers0FiRpG",
  },
  doling: {
    name: "Doling Monastery",
    description:
      "A small but important monastery near Ravangla with historical significance.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3iYAOWc2TDro4Sny1CR5QHv-mYgDi1_Mem9wd1GprVt6Vs9h0XiG2VRioSCDp",
  },
  yangyang: {
    name: "Yangyang Monastery",
    description:
      "A lesser-known monastery in South Sikkim, serving as a peaceful retreat.",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHqrZJO4vr-IihN1U10fbzdgcRAr33NaaQp1-GqKvGAPawXbiITZSPFNxX3_AJ",
  },
};

export default function MonumentsPage() {
  const [selected, setSelected] = useState(null); // Corrected for JavaScript environment

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#3C2A21] text-[#F5F0EB] font-serif">
      {/* 🗺️ Map Box */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-auto p-4">
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-white/10 backdrop-blur-md shadow-lg">
          <img
            src="/map12.jpg"
            alt="Sikkim Map"
            className="w-full h-full object-contain"
          />

          {/* MapPins for each monastery – positions adjusted */}
          <MapPin
            className="absolute top-[10%] left-[50%] w-6 h-6 text-red-500 cursor-pointer hover:scale-110 transition" /* 25% - 15% = 10% */
            onClick={() => setSelected("rumtek")}
            title="Rumtek"
          />
          <MapPin
            className="absolute top-[15%] left-[40%] w-6 h-6 text-red-500 cursor-pointer hover:scale-110 transition" /* 30% - 15% = 15% */
            onClick={() => setSelected("pemayangtse")}
            title="Pemayangtse"
          />
          <MapPin
            className="absolute top-[45%] left-[55%] w-6 h-6 text-red-500 cursor-pointer hover:scale-110 transition" /* 60% - 15% = 45% */
            onClick={() => setSelected("rabdentse")}
            title="Rabdentse"
          />
          <MapPin
            className="absolute top-[13%] left-[45%] w-6 h-6 text-red-500 cursor-pointer hover:scale-110 transition" /* 28% - 15% = 13% */
            onClick={() => setSelected("lingdum")}
            title="Lingdum"
          />
          <MapPin
            className="absolute top-[20%] left-[43%] w-6 h-6 text-red-500 cursor-pointer hover:scale-110 transition" /* 35% - 15% = 20% */
            onClick={() => setSelected("enchey")}
            title="Enchey"
          />
          <MapPin
            className="absolute top-[17%] left-[47%] w-6 h-6 text-red-500 cursor-pointer hover:scale-110 transition" /* 32% - 15% = 17% */
            onClick={() => setSelected("phodong")}
            title="Phodong"
          />
          <MapPin
            className="absolute top-[45%] left-[40%] w-6 h-6 text-red-500 cursor-pointer hover:scale-110 transition" /* 60% - 15% = 45% */
            onClick={() => setSelected("sangaChoeling")}
            title="Sanga Choeling"
          />
          <MapPin
            className="absolute top-[55%] left-[45%] w-6 h-6 text-red-500 cursor-pointer hover:scale-110 transition" /* 70% - 15% = 55% */
            onClick={() => setSelected("tashiding")}
            title="Tashiding"
          />
          <MapPin
            className="absolute top-[60%] left-[50%] w-6 h-6 text-red-500 cursor-pointer hover:scale-110 transition" /* 75% - 15% = 60% */
            onClick={() => setSelected("kartok")}
            title="Kartok"
          />
          <MapPin
            className="absolute top-[70%] left-[55%] w-6 h-6 text-red-500 cursor-pointer hover:scale-110 transition" /* 85% - 15% = 70% */
            onClick={() => setSelected("ralang")}
            title="Ralang"
          />
          <MapPin
            className="absolute top-[65%] left-[40%] w-6 h-6 text-red-500 cursor-pointer hover:scale-110 transition" /* 80% - 15% = 65% */
            onClick={() => setSelected("doling")}
            title="Doling"
          />
          <MapPin
            className="absolute top-[67%] left-[45%] w-6 h-6 text-red-500 cursor-pointer hover:scale-110 transition" /* 82% - 15% = 67% */
            onClick={() => setSelected("bon")}
            title="Bon (Khamdong)"
          />
          <MapPin
            className="absolute top-[63%] left-[60%] w-6 h-6 text-red-500 cursor-pointer hover:scale-110 transition" /* 78% - 15% = 63% */
            onClick={() => setSelected("yangyang")}
            title="Yangyang"
          />
          <MapPin
            className="absolute top-[75%] left-[50%] w-6 h-6 text-red-500 cursor-pointer hover:scale-110 transition" /* 90% - 15% = 75% */
            onClick={() => setSelected("lachung")}
            title="Lachung"
          />
          <MapPin
            className="absolute top-[73%] left-[45%] w-6 h-6 text-red-500 cursor-pointer hover:scale-110 transition" /* 88% - 15% = 73% */
            onClick={() => setSelected("lachen")}
            title="Lachen"
          />
        </div>
      </div>

      {/* 📜 Info Box */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-start">
        <div className="w-full bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
          {selected ? (
            <>
              <h2 className="text-3xl font-bold mb-4">
                {monumentsData[selected].name}
              </h2>
              <img
                src={monumentsData[selected].image}
                alt={monumentsData[selected].name}
                className="rounded-md mb-4 w-full h-64 object-cover"
              />
              <p className="text-lg text-[#F5F0EB]/80">
                {monumentsData[selected].description}
              </p>
            </>
          ) : (
            <div className="flex flex-col items-center mb-4">
              <Landmark size={80} color="#F4E1D2" className="mr-3 mb-4" />
              <p className="text-lg text-[#F5F0EB]/60">
                Click a monastery icon on the map to learn more about its history
                and significance.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};