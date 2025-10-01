"use client";

import Image from "next/image";
import Link from "next/link";
import type { Animal } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

type AnimalCardProps = {
  animal: Animal;
};

export function AnimalCard({ animal }: AnimalCardProps) {
  const image = PlaceHolderImages.find((p) => p.id === animal.image);

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <Link
          href={`/animals/${animal.id}`}
          className="flex flex-col flex-grow"
        >
          <CardHeader className="p-0">
            <div className="relative aspect-[4/3] w-full">
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={animal.name}
                  fill
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
              )}
              {animal.adoptionStatus !== "Available" && (
                <Badge
                  variant={
                    animal.adoptionStatus === "Adopted"
                      ? "secondary"
                      : "default"
                  }
                  className="absolute top-2 right-2 bg-primary/80 text-primary-foreground backdrop-blur-sm"
                >
                  {animal.adoptionStatus}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-4 flex-grow">
            <CardTitle className="text-xl font-bold mb-2">
              {animal.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{animal.breed}</p>
            <p className="text-sm text-muted-foreground">{animal.age}</p>
            <p className="mt-2 text-sm line-clamp-2">
              {animal.shortDescription}
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0 mt-auto">
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <div>Adopt Me</div>
            </Button>
          </CardFooter>
        </Link>
      </Card>
    </motion.div>
  );
}
