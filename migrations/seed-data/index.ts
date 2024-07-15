import { createOrReplace, defineMigration } from "sanity/migrate";

const POSTS = [
  { title: "Top 10 Scenic Trail Runs Around the World" },
  { title: "How to Train for Your First Ultra Trail Marathon" },
  { title: "Essential Gear for Every Trail Runner" },
  { title: "Nutrition Tips for Long-Distance Trail Running" },
  { title: "Exploring Hidden Trails: Off the Beaten Path Adventures" },
  { title: "The Benefits of Trail Running for Mental Health" },
  { title: "Trail Running Safety: How to Prepare and What to Carry" },
  { title: "Best Trail Running Shoes for Different Terrains" },
  { title: "Overcoming Common Injuries in Trail Running" },
  { title: "Trail Running vs. Road Running: Key Differences and Benefits" },
  { title: "Building Endurance: Training Plans for Trail Runners" },
  { title: "Top 5 Mountain Trail Runs You Must Try" },
  { title: "Trail Running in All Seasons: How to Adapt" },
  { title: "How to Improve Your Trail Running Speed and Stamina" },
  { title: "Trail Running for Beginners: A Comprehensive Guide" },
  { title: "The History and Evolution of Trail Running" },
  { title: "Trail Running Communities: Finding Your Tribe" },
  { title: "Eco-Friendly Trail Running: Leave No Trace Principles" },
  { title: "Mindful Running: Embracing the Journey Over the Destination" },
  { title: "Trail Running Events and Races to Watch in 2024" },
];

function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

export default defineMigration({
  title: "seed-data",
  documentTypes: [],

  async *migrate() {
    for (let index = 0; index < POSTS.length; index++) {
      const post = POSTS[index];

      yield createOrReplace({
        _type: "post",
        _id: `post-${index}`,
        title: post.title,
        slug: { current: slugify(post.title) },
      });
    }
  },
});
