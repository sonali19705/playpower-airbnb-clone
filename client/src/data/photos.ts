export interface Photo {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export const photos: Photo[] = [
  {
    id: 1,
    src: "/images/living-room-1.png",
    alt: "Living room",
    category: "Living room 1",
  },
  {
    id: 2,
    src: "/images/living-room-2.png",
    alt: "Living room",
    category: "Living room 2",
  },
  {
    id: 3,
    src: "/images/full-kitchen.png",
    alt: "Full kitchen",
    category: "Full kitchen",
  },
  {
    id: 4,
    src: "/images/bedroom.png",
    alt: "Bedroom",
    category: "Bedroom",
  },
  {
    id: 5,
    src: "/images/full-bathroom.png",
    alt: "Full bathroom",
    category: "Full bathroom",
  },
  {
    id: 6,
    src: "/images/gym.png",
    alt: "Gym",
    category: "Gym",
  },
  {
    id: 7,
    src: "/images/exterior.png",
    alt: "Exterior",
    category: "Exterior",
  },
  {
    id: 8,
    src: "/images/pool.png",
    alt: "Pool",
    category: "Pool",
  },
  {
    id: 9,
    src: "/images/additional-01.png",
    alt: "Additional property photo",
    category: "Additional photos",
  },
  {
    id: 10,
    src: "/images/additional-02.png",
    alt: "Additional property photo",
    category: "Additional photos",
  },
  {
    id: 11,
    src: "/images/additional-03.png",
    alt: "Additional property photo",
    category: "Additional photos",
  },
  {
    id: 12,
    src: "/images/additional-04.png",
    alt: "Additional property photo",
    category: "Additional photos",
  },
];