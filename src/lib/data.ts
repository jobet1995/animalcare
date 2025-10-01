import type { Animal, Event, BlogPost, Testimonial } from "./types";

export const animals: Animal[] = [
  {
    id: "1",
    name: "Buddy",
    species: "Dog",
    breed: "Golden Retriever",
    age: "2 years",
    size: "Large",
    shortDescription: "A friendly and energetic Golden Retriever.",
    description:
      "Buddy is a happy-go-lucky Golden Retriever who loves to play fetch and go for long walks. He is great with kids and other dogs. He is house-trained and knows basic commands. He is looking for a family that can give him plenty of exercise and love.",
    healthInfo: "Vaccinated, neutered, and microchipped.",
    personality: ["Friendly", "Energetic", "Playful", "Good with kids"],
    adoptionStatus: "Available",
    image: "animal-1",
    gallery: ["animal-1", "animal-gallery-1", "animal-gallery-2"],
  },
  {
    id: "2",
    name: "Lucy",
    species: "Cat",
    breed: "Siamese",
    age: "1 year",
    size: "Medium",
    shortDescription: "A vocal and affectionate Siamese cat.",
    description:
      'Lucy is a beautiful Siamese with striking blue eyes. She loves to "talk" and will follow you around the house for attention. She enjoys cuddling on the couch and chasing laser pointers. She would prefer to be the only cat in the home.',
    healthInfo: "Vaccinated and spayed.",
    personality: ["Affectionate", "Vocal", "Playful"],
    adoptionStatus: "Available",
    image: "animal-2",
    gallery: ["animal-2", "animal-gallery-3", "animal-gallery-4"],
  },
  {
    id: "3",
    name: "Rocky",
    species: "Dog",
    breed: "German Shepherd",
    age: "3 years",
    size: "Large",
    shortDescription: "A loyal and intelligent German Shepherd.",
    description:
      "Rocky is a smart and loyal companion. He is very trainable and eager to please. He needs an experienced owner who can provide him with structure and plenty of mental stimulation. He would excel at obedience or agility training.",
    healthInfo: "Vaccinated, neutered, and microchipped.",
    personality: ["Loyal", "Intelligent", "Protective", "Active"],
    adoptionStatus: "Available",
    image: "animal-3",
  },
  {
    id: "4",
    name: "Misty",
    species: "Cat",
    breed: "Domestic Shorthair",
    age: "4 years",
    size: "Medium",
    shortDescription: "A calm and sweet-natured lap cat.",
    description:
      "Misty is a gentle soul who is looking for a quiet home. She loves to be petted and will spend hours purring in your lap. She is a bit shy at first but warms up quickly. She gets along well with other calm cats.",
    healthInfo: "Vaccinated and spayed.",
    personality: ["Calm", "Sweet", "Shy"],
    adoptionStatus: "Available",
    image: "animal-4",
  },
  {
    id: "5",
    name: "Charlie",
    species: "Dog",
    breed: "Beagle",
    age: "5 years",
    size: "Medium",
    shortDescription: "A curious and friendly Beagle.",
    description:
      "Charlie is a classic Beagle with a nose that leads him on adventures. He loves to sniff around in the yard and go for walks. He is very friendly with people and other dogs. He can be a bit vocal, as Beagles are!",
    healthInfo: "Vaccinated, neutered, and microchipped.",
    personality: ["Curious", "Friendly", "Food-motivated"],
    adoptionStatus: "Pending",
    image: "animal-5",
  },
  {
    id: "6",
    name: "Simba",
    species: "Cat",
    breed: "Maine Coon",
    age: "2 years",
    size: "Large",
    shortDescription: "A gentle giant with a fluffy coat.",
    description:
      "Simba is a majestic Maine Coon with a big heart. He is very gentle and gets along with everyone, including dogs. He has a beautiful, long coat that requires regular grooming. He is a very relaxed and easy-going cat.",
    healthInfo: "Vaccinated and neutered.",
    personality: ["Gentle", "Friendly", "Relaxed"],
    adoptionStatus: "Adopted",
    image: "animal-6",
  },
];

export const events: Event[] = [
  {
    id: "1",
    title: "Weekend Adoption Fair",
    date: "Saturday, August 10, 2024",
    location: "Central Park",
    description:
      "Join us for our biggest adoption event of the summer! Dozens of adorable dogs and cats will be waiting to meet you.",
    type: "Adoption Drive",
    image: "event-1",
  },
  {
    id: "2",
    title: "Paws for a Cause Gala",
    date: "Friday, September 20, 2024",
    location: "The Grand Ballroom",
    description:
      "An elegant evening of dining, dancing, and silent auctions to support our shelter. All proceeds go to our medical fund.",
    type: "Fundraiser",
    image: "event-2",
  },
  {
    id: "3",
    title: "Shelter Spruce-Up Day",
    date: "Sunday, October 5, 2024",
    location: "AnimalKind Shelter",
    description:
      "Lend a hand as we clean, organize, and improve our shelter facilities for our furry residents. All skill levels welcome!",
    type: "Volunteer Day",
    image: "event-3",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Bringing Your New Dog Home",
    author: "Jane Doe, Adoption Specialist",
    date: "July 15, 2024",
    category: "Training",
    shortDescription:
      "The first few days with your new companion are crucial. Here are some tips to make the transition smooth for everyone.",
    content:
      "Bringing a new dog home is an exciting time, but it can also be stressful for both you and your new pet. The key is to be prepared. Before your dog arrives, make sure you have all the essentials: a crate, food and water bowls, a leash, a collar with ID tags, and some toys. When you bring your dog home, give them a quiet space to decompress. Show them their crate and where their food and water are. Take them out frequently for potty breaks. Introduce them to other family members and pets slowly and under supervision. The first few days are all about establishing a routine and building trust. Be patient, be consistent, and shower your new friend with love.",
    image: "blog-1",
  },
  {
    id: "2",
    title: "Why Adopting a Senior Pet is So Rewarding",
    author: "John Smith, Shelter Director",
    date: "June 28, 2024",
    category: "Adoption",
    shortDescription:
      "Puppies and kittens are cute, but senior pets have so much love to give. Discover the joys of adopting an older animal.",
    content:
      "Many people overlook senior pets in shelters, but they have so much to offer. Older pets are often already house-trained and have outgrown destructive puppy or kitten behaviors. Their personalities are already developed, so what you see is what you get. They are also incredibly grateful for a second chance at a loving home. Adopting a senior pet can be one of the most rewarding experiences. You are not just getting a pet; you are saving a life and gaining a loving, grateful companion for their golden years.",
    image: "blog-2",
  },
  {
    id: "3",
    title: "Our Community Makes the Difference",
    author: "The AnimalKind Team",
    date: "June 5, 2024",
    category: "Community",
    shortDescription:
      "A heartfelt thank you to our volunteers, donors, and supporters who make our life-saving work possible every day.",
    content:
      "We are constantly amazed by the generosity of our community. From the dedicated volunteers who walk dogs and socialize cats, to the donors who provide critical funding for medical care, to the families who open their homes to our animals – you are the reason we can continue our mission. Every adoption, every donation, every hour of volunteered time makes a huge impact. Thank you for being a part of the AnimalKind family and for helping us save lives.",
    image: "blog-3",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "The Miller Family",
    story:
      "We adopted our dog, Daisy, from AnimalKind last year, and she has brought so much joy into our lives. The staff was so helpful and made the process a breeze. We're so grateful!",
    image: "testimonial-1",
  },
  {
    id: "2",
    name: "Mark T.",
    story:
      "I wasn't sure about adopting an older cat, but finding my companion, Leo, was the best decision I've ever made. He's the most loving and calm cat. Thank you, AnimalKind, for matching us.",
    image: "testimonial-2",
  },
  {
    id: "3",
    name: "Sarah P.",
    story:
      "Volunteering at AnimalKind has been such a rewarding experience. The team is passionate, and you can see how much they care for every single animal. It feels great to be a part of it.",
    image: "testimonial-3",
  },
];
