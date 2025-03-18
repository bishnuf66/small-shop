import ExploreProducts from "../compoenents/non-authenticated/ExploreProducts";
import HomeBanner from "../compoenents/non-authenticated/HomeBanner";
import Deals from "../compoenents/non-authenticated/Deals";
import TestimonialCards from "../compoenents/non-authenticated/Testimonials";

function Homepage() {
  return (
    <div>
      <HomeBanner />
      <ExploreProducts />
      <Deals />
      <TestimonialCards />
    </div>
  );
}

export default Homepage;
