import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// General Pages
import Home from "./pages/home/Home";
import User from "./pages/user/User"
import Blogs from "./pages/blog/Blog";
import NoPage from "./pages/no_page/NoPage";
import Login from './pages/login/Login';

// Utility Parents
import Rephraser from './pages/rephraser/Rephraser';
import Article from './pages/article_generation/Article'
import Fewshots from './pages/complete_with_fewshots/Fewshots'
import Instructions from './pages/complete_with_instructions/Instructions'
import Finetunes from './pages/complete_with_finetunes/Finetunes'

// Utility Children
import Paraphraser from "./pages/rephraser/paraphraser/Paraphraser"

import Intro from "./pages/article_generation/intro/Intro"
import Outline from "./pages/article_generation/outline/Outline"
import OutlineContent from "./pages/article_generation/outline_content/OutlineContent"

import FewShotsRephraser from "./pages/complete_with_fewshots/rephrase/Rephraser"
import FewShotsSummeriser from "./pages/complete_with_fewshots/summariser/Summariser"
import FewShotsEmailWriter from "./pages/complete_with_fewshots/email_writer/EmailWriter"
import FewShotsTagline from "./pages/complete_with_fewshots/tagline/Tagline"
import FewShotsBlogpostOutline from "./pages/complete_with_fewshots/blogpost_outline/BlogpostOutline"
import FewShotsBlogspostHashtag from "./pages/complete_with_fewshots/blogpost_hashtag/BlogspostHashtag"
import FewShotsHeadline from "./pages/complete_with_fewshots/headline/Headline"
import FewShotsProductDescription from "./pages/complete_with_fewshots/product_description/ProductDescription"
import FewShotsCreativeStory from "./pages/complete_with_fewshots/creative_story/CreativeStory"
import FewShotsPoem from "./pages/complete_with_fewshots/poem/Poem"
import FewShotsExpander from "./pages/complete_with_fewshots/sentence_expander/SentenceExpander"

import InstructionsRephraser from "./pages/complete_with_instructions/rephrase/Rephraser"
import InstructionsSummeriser from "./pages/complete_with_instructions/summariser/Summariser"
import InstructionsEmailWriter from "./pages/complete_with_instructions/email_writer/EmailWriter"
import InstructionsTagline from "./pages/complete_with_instructions/tagline/Tagline"
import InstructionsBlogpostOutline from "./pages/complete_with_instructions/blogpost_outline/BlogpostOutline"
import InstructionsBlogspostHashtag from "./pages/complete_with_instructions/blogpost_hashtag/BlogspostHashtag"
import InstructionsHeadline from "./pages/complete_with_instructions/headline/Headline"
import InstructionsProductDescription from "./pages/complete_with_instructions/product_description/ProductDescription"
import InstructionsCreativeStory from "./pages/complete_with_instructions/creative_story/CreativeStory"
import InstructionsPoem from "./pages/complete_with_instructions/poem/Poem"
import InstructionsExpander from "./pages/complete_with_instructions/sentence_expander/SentenceExpander"

import FinetunesRephraser from "./pages/complete_with_finetunes/rephrase/Rephraser"
import FinetunesSummeriser from "./pages/complete_with_finetunes/summariser/Summariser"
import FinetunesEmailWriter from "./pages/complete_with_finetunes/email_writer/EmailWriter"
import FinetunesTagline from "./pages/complete_with_finetunes/tagline/Tagline"
import FinetunesBlogpostOutline from "./pages/complete_with_finetunes/blogpost_outline/BlogpostOutline"
import FinetunesBlogspostHashtag from "./pages/complete_with_finetunes/blogpost_hashtag/BlogspostHashtag"
import FinetunesHeadline from "./pages/complete_with_finetunes/headline/Headline"
import FinetunesProductDescription from "./pages/complete_with_finetunes/product_description/ProductDescription"
import FinetunesCreativeStory from "./pages/complete_with_finetunes/creative_story/CreativeStory"
import FinetunesPoem from "./pages/complete_with_finetunes/poem/Poem"
import FinetunesExpander from "./pages/complete_with_finetunes/sentence_expander/SentenceExpander"

// Root level
import './index.css'

// window.Three = require('Three');

// General Components
import Header from "./components/header/Header"
import Applications from './pages/applications/Applications';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Header />}>
              
              {/* General Routes */}
              <Route index element={<Home />} />                                {/* default root path */}
              <Route path="home" element={<Home />} />
              <Route path="user" element={<User />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="applications" element={<Applications />} />
              <Route path="login" element={<Login />} />
              
              {/* Utility Parents */}
              <Route path="rephraser" element={<Rephraser />} />
              <Route path="article_generation" element={<Article />} />
              <Route path="fewshots" element={<Fewshots />} />
              <Route path="instructions" element={<Instructions/>} />
              <Route path="finetunes" element={<Finetunes/>} />

              {/* Utility Children */}
              {/* Rephraser */}
              <Route path= "paraphraser" element= {<Paraphraser/>} />

              {/* Article Generation */}
              <Route path= "article_intro" element= {<Intro/>} />
              <Route path= "article_outline" element= {<Outline/>} />
              <Route path= "article_outline_content" element= {<OutlineContent/>} />
              
              {/* Complete with Fewshots */}
              <Route path= "fewshots_rephrase" element= {<FewShotsRephraser/>} />
              <Route path= "fewshots_summariser" element= {<FewShotsSummeriser/>} />
              <Route path= "fewshots_email_writer" element= {<FewShotsEmailWriter/>} />
              <Route path= "fewshots_tagline" element= {<FewShotsTagline/>} />
              <Route path= "fewshots_blogpost_outline" element= {<FewShotsBlogpostOutline/>} />
              <Route path= "fewshots_blogpost_hashtag" element= {<FewShotsBlogspostHashtag/>} />
              <Route path= "fewshots_headline" element= {<FewShotsHeadline/>} />
              <Route path= "fewshots_product_description" element= {<FewShotsProductDescription/>} />
              <Route path= "fewshots_creative_story" element= {<FewShotsCreativeStory/>} />
              <Route path= "fewshots_poem" element= {<FewShotsPoem/>} />
              <Route path= "fewshots_sentence_expander" element= {<FewShotsExpander/>} />

              {/* Complete with Instructions */}
              <Route path= "instructions_rephrase" element= {<InstructionsRephraser/>} />
              <Route path= "instructions_summariser" element= {<InstructionsSummeriser/>} />
              <Route path= "instructions_email_writer" element= {<InstructionsEmailWriter/>} />
              <Route path= "instructions_tagline" element= {<InstructionsTagline/>} />
              <Route path= "instructions_blogpost_outline" element= {<InstructionsBlogpostOutline/>} />
              <Route path= "instructions_blogpost_hashtag" element= {<InstructionsBlogspostHashtag/>} />
              <Route path= "instructions_headline" element= {<InstructionsHeadline/>} />
              <Route path= "instructions_product_description" element= {<InstructionsProductDescription/>} />
              <Route path= "instructions_creative_story" element= {<InstructionsCreativeStory/>} />
              <Route path= "instructions_poem" element= {<InstructionsPoem/>} />
              <Route path= "instructions_sentence_expander" element= {<InstructionsExpander/>} />

              {/* Complete with Finetunes */}
              <Route path= "finetunes_rephrase" element= {<FinetunesRephraser/>} />
              <Route path= "finetunes_summariser" element= {<FinetunesSummeriser/>} />
              <Route path= "finetunes_email_writer" element= {<FinetunesEmailWriter/>} />
              <Route path= "finetunes_tagline" element= {<FinetunesTagline/>} />
              <Route path= "finetunes_blogpost_outline" element= {<FinetunesBlogpostOutline/>} />
              <Route path= "finetunes_blogpost_hashtag" element= {<FinetunesBlogspostHashtag/>} />
              <Route path= "finetunes_headline" element= {<FinetunesHeadline/>} />
              <Route path= "finetunes_product_description" element= {<FinetunesProductDescription/>} />
              <Route path= "finetunes_creative_story" element= {<FinetunesCreativeStory/>} />
              <Route path= "finetunes_poem" element= {<FinetunesPoem/>} />
              <Route path= "finetunes_sentence_expander" element= {<FinetunesExpander/>} />

          <Route path="*" element={<NoPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
    
    </React.StrictMode>
);