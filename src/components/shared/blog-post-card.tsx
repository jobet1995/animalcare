"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "../ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  const image = PlaceHolderImages.find((p) => p.id === post.image);

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      className="h-full"
    >
      <Card className="overflow-hidden flex flex-col h-full">
        <Link href={`/blog/${post.id}`} className="flex flex-col flex-grow">
          <CardHeader className="p-0">
            <div className="relative aspect-[16/9] w-full">
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
              )}
            </div>
          </CardHeader>
          <CardContent className="p-4 flex-grow">
            <Badge variant="secondary" className="mb-2">
              {post.category}
            </Badge>
            <CardTitle className="text-xl font-bold mb-2">
              {post.title}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {post.author} • {post.date}
            </CardDescription>
            <p className="mt-3 text-sm line-clamp-3">{post.shortDescription}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0 mt-auto">
            <div className="flex items-center font-semibold text-primary">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </CardFooter>
        </Link>
      </Card>
    </motion.div>
  );
}
