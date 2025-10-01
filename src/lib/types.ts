export type Animal = {
  id: string;
  name: string;
  species: "Dog" | "Cat" | "Other";
  breed: string;
  age: string;
  size: "Small" | "Medium" | "Large";
  description: string;
  shortDescription: string;
  healthInfo: string;
  personality: string[];
  adoptionStatus: "Available" | "Pending" | "Adopted";
  image: string;
  gallery?: string[];
};

export type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: "Adoption Drive" | "Fundraiser" | "Volunteer Day";
  image: string;
};

export type BlogPost = {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  content: string;
  shortDescription: string;
  image: string;
};

export type Testimonial = {
  id: string;
  name: string;
  story: string;
  image: string;
};
