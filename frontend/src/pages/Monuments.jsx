import React, { useState } from "react";
import { Landmark } from "lucide-react";

const monumentsData = {
  pemayangtse: {
    name: "Pemayangtse Monastery",
    description:
      "Built in 1705, Pemayangtse is one of the oldest and most revered monasteries in Sikkim. It offers panoramic views of the Himalayas and houses ancient sculptures and murals.",
    image: "/pemayangtse-monastery.jpg",
  },
  rabdentse: {
    name: "Rabdentse Ruins",
    description:
      "Rabdentse was the second capital of Sikkim until 1814. The ruins overlook a serene valley and are surrounded by dense forest, offering a glimpse into Sikkim’s royal past.",
    image: "/rabdentse-ruins.jpg",
  },
  // Add more monuments as needed
};

export default function MonumentsPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#3C2A21] text-[#F5F0EB] font-serif">
      {/* 🗺️ Map Box */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-auto p-4">
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-white/10 backdrop-blur-md shadow-lg">
          <img
            src="/assets/map.jpg"
            alt="Sikkim Map"
            className="w-full h-full object-contain"
          />

          {/* Monastery Icons */}
          <button
            className="absolute top-[30%] left-[40%] w-6 h-6 bg-[#F4E1D2] rounded-full hover:scale-110 transition"
            onClick={() => setSelected("pemayangtse")}
            title="Pemayangtse"
          />
          <button
            className="absolute top-[60%] left-[55%] w-6 h-6 bg-[#F4E1D2] rounded-full hover:scale-110 transition"
            onClick={() => setSelected("rabdentse")}
            title="Rabdentse"
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
            <>
              <div className="flex flex-col items-center mb-4">
                <Landmark size={80} color="#F4E1D2" className="mr-3 mb-4" />
                <p className="text-lg text-[#F5F0EB]/60">
                  Click a monastery icon on the map to learn more about its
                  history and significance.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
