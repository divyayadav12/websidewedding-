const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.portfolioItem.deleteMany();
  await prisma.service.deleteMany();

  const portfolio = [
    { category: "Wedding", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop", title: "Royal Palace Wedding", location: "Udaipur, India" },
    { category: "Pre Wedding", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop", title: "Sunset Romance", location: "Santorini, Greece" },
    { category: "Destination", image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop", title: "Beach Front Vows", location: "Maldives" },
    { category: "Haldi", image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop", title: "Vibrant Haldi", location: "Jaipur, India" },
    { category: "Reception", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", title: "Elegant Reception", location: "New York, USA" },
    { category: "Cinematic", image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070&auto=format&fit=crop", title: "Cinematic Tale", location: "Lake Como, Italy" },
  ];

  for (const item of portfolio) {
    await prisma.portfolioItem.create({ data: item });
  }

  const services = [
    { title: "Wedding Photography", startingPrice: "$3,000", description: "Timeless, elegant photography capturing every beautiful moment of your special day.", icon: "Camera" },
    { title: "Cinematic Film", startingPrice: "$4,500", description: "A beautifully crafted 10-15 minute cinematic film telling your unique love story.", icon: "Video" },
    { title: "Pre Wedding Shoot", startingPrice: "$1,500", description: "A romantic photoshoot at a location of your choice before the big day.", icon: "Heart" },
    { title: "Drone Coverage", startingPrice: "$800", description: "Breathtaking aerial shots of your venue and event.", icon: "Plane" },
  ];

  for (const service of services) {
    await prisma.service.create({ data: service });
  }

  console.log('Seeded database successfully');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
