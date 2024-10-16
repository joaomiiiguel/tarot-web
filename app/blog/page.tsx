"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

import { convertDate } from "@/hooks/converteData";
import { DeckBanner } from "@/components/deck-banner";

export interface PostType {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  date: string;
  yoast_head_json: {
    og_site_name: string;
    author: string;
    og_image: {
      url: string;
    }[];
  };
}

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  return (
    <div className="bg-primary bg-opacity-20 w-11/12 lg:w-2/3  mx-auto text-center mb-10 p-10">
      <h1 className="text-3xl font-bold uppercase">{post.title.rendered}</h1>
      <div
        style={{
          position: "relative",
          height: "400px",
          marginTop: "35px",
        }}
      >
        <Image
          fill
          alt={post.yoast_head_json.og_site_name}
          src={post.yoast_head_json.og_image[0].url}
          style={{
            objectFit: "cover", // cover, contain, none
          }}
        />
      </div>
      <div className="flex w-full flex-row items-center justify-between mt-2 mb-6">
        <p className="text-sm font-medium">
          Postado em: {convertDate(post.date)}
        </p>
        <p className="text-sm font-medium">
          Autor: {post.yoast_head_json.author}
        </p>
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        className="text-justify"
      />
      <Link href={post.link} target="blank">
        <Button className="w-full font-semibold mt-10" color="primary">
          Ler mais
        </Button>
      </Link>
    </div>
  );
}

export default function BlogPage() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Substitua pela URL do seu WordPress
    const apiUrl = "https://guiatantrica.com.br/wp-json/wp/v2/posts?per_page=6";

    const fetchPosts = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar os posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-screen">
      <DeckBanner height={20} title={"Blog"} />
      <section className="container mx-auto px-4 py-12">
        {loading ? (
          <div>Carregando...</div>
        ) : (
          posts.map((post, index) => <Post key={index} post={post} />)
        )}
      </section>
    </div>
  );
}
