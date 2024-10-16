"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";

import { PostType } from "@/app/blog/page";

export const BlogSection = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    // Substitua pela URL do seu WordPress
    const apiUrl = "https://guiatantrica.com.br/wp-json/wp/v2/posts?per_page=4";

    const fetchPosts = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar os posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-center justify-between">
        <p className="text-2xl font-bold">Blog</p>
        <Link href={"/blog"}>Ver mais</Link>
      </div>
      <div className="md:grid md:grid-cols-2 gap-5 flex flex-col ">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col lg:flex-row gap-5 bg-primary rounded p-5"
          >
            <div
              className="w-full lg:w-1/2 h-fit"
              style={{
                position: "relative",
                height: "100%",
                minHeight: "250px",
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
            <div className="flex w-full lg:w-1/2 flex-col gap-4 text-secondary ">
              <h1 className="text-2xl font-extrabold">{post.title.rendered}</h1>
              <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              <Link href={post.link} target="blank">
                <Button className="w-full font-semibold mt-5" color="secondary">
                  Ler mais
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
