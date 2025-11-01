import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context: any) {
	const blog = await getCollection("posts");
        return rss({
                title: "Mosi & Lake Safaris Field Notes",
                description: "Stories and planning insights from our Zambia and Malawi self-drive routes",
		site: context.site,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			// Compute RSS link from post `slug`
			link: `/blog/${post.slug}/`,
		})),
	});
}
