export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  description: string;
  specs: { label: string; value: string }[];
  storeUrl: string;
};

export type Review = {
  id: string;
  productId: string;
  author: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
};

export type AdminComment = {
  id: string;
  productName: string;
  author: string;
  excerpt: string;
  date: string;
  status: "pending" | "approved" | "rejected";
};

export type Feedback = {
  id: string;
  user: string;
  subject: string;
  message: string;
  date: string;
};

export const categories = ["Semua", "Laptop", "Smartphone", "Tablet", "Aksesoris"];

export const products: Product[] = [
  {
    id: "1",
    slug: "thinkpad-x1-carbon-gen-11",
    name: "ThinkPad X1 Carbon Gen 11",
    category: "Laptop",
    price: 26_500_000,
    rating: 4.8,
    reviewCount: 124,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac893cfc?w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
    ],
    description:
      "Ultrabook bisnis premium dengan chassis carbon fiber, layar 14 inci WUXGA, dan daya tahan baterai hingga 12 jam untuk produktivitas sehari penuh.",
    specs: [
      { label: "Processor", value: "Intel Core i7-1365U" },
      { label: "RAM", value: "16 GB LPDDR5" },
      { label: "Storage", value: "512 GB NVMe SSD" },
      { label: "Layar", value: '14" WUXGA IPS' },
      { label: "Berat", value: "1.12 kg" },
    ],
    storeUrl: "#",
  },
  {
    id: "2",
    slug: "iphone-15-pro",
    name: "iPhone 15 Pro",
    category: "Smartphone",
    price: 19_999_000,
    rating: 4.9,
    reviewCount: 312,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    ],
    description:
      "Flagship Apple dengan chip A17 Pro, kamera 48MP, dan desain titanium untuk performa mobile terbaik.",
    specs: [
      { label: "Chip", value: "Apple A17 Pro" },
      { label: "Layar", value: '6.1" Super Retina XDR' },
      { label: "Storage", value: "256 GB" },
      { label: "Kamera", value: "48 MP triple" },
    ],
    storeUrl: "#",
  },
  {
    id: "3",
    slug: "samsung-galaxy-tab-s9",
    name: "Samsung Galaxy Tab S9",
    category: "Tablet",
    price: 12_499_000,
    rating: 4.6,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    ],
    description:
      "Tablet Android premium dengan layar AMOLED 11 inci dan dukungan S Pen untuk kreativitas dan produktivitas.",
    specs: [
      { label: "Processor", value: "Snapdragon 8 Gen 2" },
      { label: "RAM", value: "8 GB" },
      { label: "Layar", value: '11" Dynamic AMOLED 2X' },
    ],
    storeUrl: "#",
  },
  {
    id: "4",
    slug: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5",
    category: "Aksesoris",
    price: 5_299_000,
    rating: 4.7,
    reviewCount: 201,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80",
    ],
    description:
      "Headphone noise cancelling terbaik dengan audio Hi-Res dan kenyamanan untuk pemakaian lama.",
    specs: [
      { label: "Driver", value: "30 mm" },
      { label: "ANC", value: "Dual Processor V2" },
      { label: "Baterai", value: "Hingga 30 jam" },
    ],
    storeUrl: "#",
  },
  {
    id: "5",
    slug: "asus-rog-zephyrus-g14",
    name: "ASUS ROG Zephyrus G14",
    category: "Laptop",
    price: 22_750_000,
    rating: 4.5,
    reviewCount: 67,
    image: "https://images.unsplash.com/photo-1603302576837-37561b0e4a76?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603302576837-37561b0e4a76?w=800&q=80",
    ],
    description: "Laptop gaming compact dengan GPU RTX dan layar 120Hz untuk gaming dan editing.",
    specs: [
      { label: "Processor", value: "AMD Ryzen 9 7940HS" },
      { label: "GPU", value: "NVIDIA RTX 4060" },
      { label: "RAM", value: "16 GB DDR5" },
    ],
    storeUrl: "#",
  },
  {
    id: "6",
    slug: "google-pixel-8-pro",
    name: "Google Pixel 8 Pro",
    category: "Smartphone",
    price: 14_999_000,
    rating: 4.4,
    reviewCount: 98,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80",
    ],
    description: "Smartphone dengan kamera AI Google Tensor G3 dan update Android terpanjang.",
    specs: [
      { label: "Chip", value: "Google Tensor G3" },
      { label: "Layar", value: '6.7" LTPO OLED' },
      { label: "Storage", value: "128 GB" },
    ],
    storeUrl: "#",
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "1",
    author: "Andi Pratama",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andi",
    date: "12 Mar 2026",
    rating: 5,
    comment:
      "Build quality luar biasa, keyboard enak untuk mengetik seharian. Baterai tahan lama untuk meeting online.",
  },
  {
    id: "r2",
    productId: "1",
    author: "Siti Rahma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti",
    date: "8 Mar 2026",
    rating: 4,
    comment: "Performa cepat, hanya saja harganya cukup premium untuk ukuran layar 14 inci.",
  },
  {
    id: "r3",
    productId: "1",
    author: "Budi Santoso",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi",
    date: "1 Mar 2026",
    rating: 5,
    comment: "Pilihan terbaik untuk kerja hybrid. Ringan dibawa ke kantor maupun kafe.",
  },
];

export const adminComments: AdminComment[] = [
  {
    id: "c1",
    productName: "ThinkPad X1 Carbon Gen 11",
    author: "Rina W.",
    excerpt: "Apakah varian RAM 32GB sudah tersedia di Indonesia?",
    date: "30 Sep 2026",
    status: "pending",
  },
  {
    id: "c2",
    productName: "iPhone 15 Pro",
    author: "Doni K.",
    excerpt: "Review jujur: panas sedikit saat gaming berat.",
    date: "29 Sep 2026",
    status: "pending",
  },
  {
    id: "c3",
    productName: "Sony WH-1000XM5",
    author: "Maya L.",
    excerpt: "ANC-nya benar-benar menutup suara kereta dengan baik.",
    date: "28 Sep 2026",
    status: "approved",
  },
];

export const feedbackList: Feedback[] = [
  {
    id: "f1",
    user: "Eko H.",
    subject: "Saran fitur bandingkan produk",
    message: "Bisa tambahkan bandingkan hingga 4 produk sekaligus?",
    date: "30 Sep 2026",
  },
  {
    id: "f2",
    user: "Lia P.",
    subject: "Bug pencarian",
    message: "Ketika filter kategori Tablet, pagination tidak reset.",
    date: "27 Sep 2026",
  },
];

export function formatIdr(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getReviewsForProduct(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId);
}

export function ratingDistribution(productId: string): Record<number, number> {
  const productReviews = getReviewsForProduct(productId);
  const dist: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  for (const r of productReviews) {
    dist[r.rating] = (dist[r.rating] ?? 0) + 1;
  }
  return dist;
}
