import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  content: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Bishnu Bk",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/delivery-man.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "John Doe",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/images/delivery-man.jpg",
    rating: 4,
  },
  // Add more testimonials as needed
];

export default function TestimonialCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-8 p-8">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="testimonial-bg rounded-3xl p-8 text-white relative "
        >
          <h2 className="text-2xl font-bold mb-4">TESTIMONIAL</h2>
          <div className="flex items-start mb-4">
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s profile`}
              className="rounded-full border-2 w-16 h-16 border-red-500 object-cover"
            />

            <p className="text-sm pl-16">{testimonial.content}</p>
          </div>
          <div className="bg-white text-black py-1 px-3 rounded-full inline-block">
            {testimonial.name}
          </div>
          <div className="flex mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < testimonial.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
