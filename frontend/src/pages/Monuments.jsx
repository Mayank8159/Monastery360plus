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
      "Situated in North Sikkim, Phodong Monastery is an important center of the Kagyu sect and one of the region’s most celebrated religious institutions. Originally built in the early 18th century by Chogyal Gyurmed Namgyal, it was later rebuilt in 1977 but continues to retain its traditional charm and spiritual significance. The monastery is particularly renowned for its vivid murals that depict Buddhist deities, legends, and teachings in striking detail, offering both artistic beauty and cultural depth. Each year, Phodong comes alive during its vibrant Cham dance festival, when monks in elaborate masks and costumes perform sacred dances symbolizing the triumph of good over evil. The serene setting, surrounded by lush forests and mountain views, further enhances the monastery’s spiritual aura, making it not only a site of devotion but also a major attraction for tourists seeking to experience the living traditions of Sikkimese Buddhism.",
    image:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTIFp7_XAGL5jaf8K5eSqn_Ptw9jq0gs7n6FNYFKeH_D57ItPEdkRzG8ni7cx0TxpYvfDS44TPTZcHmJ7UKyEt6_uQM6Dt0XKUilBYSqC7YrhNST3g",
  },
  sangaChoeling: {
    name: "Sanga Choeling Monastery",
    description:
      "Perched on a ridge above Pelling and reached by a scenic uphill trek through pine forests, Sanga Choeling Monastery is one of the oldest monasteries in Sikkim, founded in the 17th century by Lama Lhatsun Chempo. Dedicated to the Nyingma sect of Tibetan Buddhism, the monastery is steeped in history and spiritual significance, making it a revered destination for both pilgrims and travelers. Its quiet location, away from the bustle of towns, offers a serene retreat where visitors can immerse themselves in meditation and admire the traditional architecture adorned with Buddhist symbols and prayer flags fluttering in the mountain breeze. The short trek to the monastery not only rewards visitors with stunning views of the Himalayan landscape, including Kanchenjunga, but also with an authentic experience of Sikkim’s deep-rooted spiritual heritage.",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwjwy6E7hkg-3EkYaYUZ8UMmPk66jGyBx5nY9PljgeKKuL-MRIVIRUfa4UnkfR",
  },
  tashiding: {
    name: "Tashiding Monastery",
    description:
      "Nestled atop a hill between the Rathong and Rangeet rivers, Tashiding Monastery is one of the holiest Buddhist sites in Sikkim, revered for its spiritual purity and centuries-old traditions. Founded in the 17th century by Ngadak Sempa Chempo, a disciple of Guru Padmasambhava, the monastery holds immense religious significance as it is believed that prayers offered here cleanse devotees of all sins. The highlight of Tashiding’s spiritual calendar is the Bhumchu Festival, celebrated annually, during which a sacred vessel of holy water is ceremonially opened and interpreted as an omen for the coming year. The monastery’s chortens, fluttering prayer flags, and panoramic Himalayan views create an atmosphere of profound peace, attracting both pilgrims seeking blessings and travelers drawn by its cultural richness and scenic beauty.",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQdtHbPEbW8KlGGiSLXcVWszdtaSJHQEnn9NY3MwQsP2ekdtEmw8UiW3pE--tmF9enbWOQhfjucGHP41AdI-gdCf9FnieW0Mse2-QC84MFibhlvcgQ",
  },
  kartok: {
    name: "Kartok Monastery",
    description:
      "Located in the picturesque village of Yuksom in West Sikkim, Kartok Monastery is a serene and spiritually significant site named after one of the three esteemed lamas who consecrated the first Chogyal (king) of Sikkim in the 17th century. Though smaller in scale compared to some of Sikkim’s grand monasteries, Kartok holds deep historical and cultural importance as part of the sacred landscape of Yuksom, which is also regarded as the birthplace of Sikkim’s Buddhist kingdom. Surrounded by tranquil lakes, prayer wheels, and fluttering flags, the monastery exudes peace and offers visitors a chance to reflect in its calm, meditative environment. Its proximity to other important heritage sites in Yuksom makes Kartok a meaningful stop for pilgrims and travelers seeking to connect with the origins of Sikkim’s spiritual and political history.",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzNu89tEhJ8Y6Jb4HPrjrZE9lOgAGEVOiSI4_vebWg4R22kqbSMsWI3AZZW8u1",
  },
  lachen: {
    name: "Lachen Monastery",
    description:
      "Nestled in the pristine landscapes of Sikkim, Lachen Monastery stands as a beacon of serenity and profound spiritual heritage. Our platform, Monastery360+, brings this sacred site to life through an immersive digital experience. Step into its hallowed halls via our **360°/3D virtual tours**, where every intricate mural and ancient manuscript is meticulously captured. Our **AI-driven audio guides**, powered by localized NLP models, narrate the rich history and cultural significance of the monastery in multiple languages, offering personalized context for every visitor. Beyond just a tour, we are committed to sustainable preservation, using AI to digitally restore delicate manuscripts and murals. This initiative transforms cultural tourism, providing a unique, eco-friendly way to explore and connect with heritage, ensuring that the legacy of places like Lachen Monastery is accessible to all, anytime, anywhere.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvVDCUvf8jL2JWoNRT9jVonDs3b9Isfcyvt_bcTTrLuTTldzDTJdJLPIyBRYl",
  },
  lachung: {
    name: "Lachung Monastery",
    description:
      "Nestled in the breathtaking Yumthang Valley, Lachung Monastery is a testament to the rich Buddhist traditions of Sikkim. Our platform, Monastery360+, transports this spiritual sanctuary into the digital realm, offering a truly immersive experience. Through our **360°/3D virtual tours**, visitors can explore the monastery's vibrant murals and sacred artifacts from anywhere in the world. The experience is enhanced by our **AI-driven audio guides**, which use cutting-edge NLP technology to provide historical and cultural context in multiple languages. Our commitment extends to preservation, with AI tools dedicated to the digital restoration of delicate manuscripts and artworks. Monastery360+ transforms how we connect with heritage, ensuring that the legacy of revered sites like Lachung Monastery is not only preserved but also made accessible and sustainable for future generations.",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS8s-WnqtDOA-HjH7hTaXGHjOuMfj3jhN6xf98HbJYa5TwA-k4OB5iENUvWLi7KBdPnd_2Fb-vBFd_FWEFdG5YYwVJczHUfXhqecu0ezxKrHVvun4U",
  },
  ralang: {
    name: "Ralang Monastery",
    description:
      "Rising majestically in the heart of Sikkim, Ralang Monastery is a living testament to the Kagyupa school of Tibetan Buddhism. Our platform, Monastery360+, extends its spiritual grandeur to a global audience through a state-of-the-art digital experience. With our **360°/3D virtual tours**, we meticulously capture the monastery's sacred art, from its detailed mandalas to its towering prayer wheels. Our **AI-driven audio guides** offer a deep and personal connection to the site's history, providing contextual narratives that are both informative and captivating. The project also focuses on the long-term preservation of its cultural treasures, utilizing AI for the digital restoration of ancient manuscripts and murals. Monastery360+ is not merely a virtual tour; it is a sustainable solution for heritage conservation, ensuring that the legacy and spiritual essence of Ralang Monastery endure for generations to come.",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTcf_4k-d0xyfqSlUqFNBakMdi09_A9bkPp6A6YOk8PbfIsZsW0Ja4BDMH2SggX",
  },
  bon: {
    name: "Bon Monastery (Khamdong)",
    description:
      "Bon Monastery (Khamdong) is a significant center for the ancient Bon religion, a faith that existed in Tibet before the rise of Buddhism. Located in the serene landscapes of Sikkim, it serves as one of only two Bon monasteries in India. The monastery's architecture reflects a unique blend of Indo-Tibetan styles, and its interior is adorned with fascinating paintings of Bon deities and other spiritual figures. It functions not only as a place of worship but also as an institution dedicated to preserving the teachings and culture of the Bon tradition. The peaceful environment, combined with the rhythmic chanting of mantras and the beat of drums, provides a deeply spiritual experience for visitors. The monastery also plays a crucial role in the local community, hosting festivals and rituals that celebrate the Bon heritage, making it a vital link to Sikkim's diverse religious tapestry.",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRm6RYamNC_sMA-5ZBJm0faSj961c4fJdOxM6enYfrdsxFCooT3bZ-Ers0FiRpG",
  },
  doling: {
    name: "Doling Monastery",
    description:
      "A small but important monastery near Ravangla with historical significance. It offers a peaceful retreat and beautiful views of the surrounding hills. The monastery is known for its serene atmosphere and traditional Buddhist architecture, making it a tranquil spot for meditation and reflection. Visitors can explore its modest yet charming structures, adorned with prayer flags and intricate woodwork. Doling Monastery also serves as a cultural hub for the local community, hosting religious ceremonies and festivals that showcase Sikkim's rich Buddhist heritage. Its location amidst lush greenery and rolling hills provides a picturesque setting, making it a worthwhile visit for those seeking both spiritual solace and natural beauty. The monastery's peaceful ambiance, combined with its cultural significance, makes it a hidden gem in Sikkim's array of spiritual sites.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3iYAOWc2TDro4Sny1CR5QHv-mYgDi1_Mem9wd1GprVt6Vs9h0XiG2VRioSCDp",
  },
  yangyang: {
    name: "Yangyang Monastery",
    description:
      "A lesser-known monastery in South Sikkim, serving as a peaceful retreat. It is known for its tranquil environment and traditional Buddhist practices. The monastery is a place where monks engage in meditation, prayer, and the study of Buddhist scriptures, maintaining the spiritual traditions of the region. Visitors to Yangyang Monastery can experience the serene ambiance, surrounded by lush greenery and scenic landscapes that enhance the sense of peace and contemplation. The monastery also plays a role in the local community, hosting religious ceremonies and festivals that reflect Sikkim's rich cultural heritage. Its remote location makes it an ideal spot for those seeking solitude and a deeper connection with nature and spirituality. Yangyang Monastery, though small, offers a meaningful experience for pilgrims and travelers alike, highlighting the enduring presence of Buddhism in Sikkim.",
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