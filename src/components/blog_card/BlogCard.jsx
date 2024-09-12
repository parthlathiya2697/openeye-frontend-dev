import React from 'react';
import "./BlogCard.scss"

const BlogCard = () => {
	return (
		<div className="BlogCard">

			<div className="blogcard_img_holder">
				<img src="https://images.unsplash.com/photo-1640102953836-5651f5d6b240?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80" alt="Blog image" />
			</div>

			<h3 className="blogcard_title">Learn Microinteraction</h3>
			<span className="blogcard_time">Monday Jan 20, 2020</span>
			<p className="blogcard_description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra turpis, non cursus ex accumsan at.
			</p>

			<div className="blogcard_options">
				<span>
					Read Full Blog
				</span>

				<button className="blogcard_btn">Blog</button>
			</div>
		</div>
	);
}

export default BlogCard;
