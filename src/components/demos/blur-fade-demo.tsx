"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkCard } from "@/components/_components/WorkingCard";
import { creationTopic, works } from "@/utils/data";
import { useState, useEffect } from 'react';

interface CreatorProfile {
  name: string;
  img: string;
}

interface CreationTopic {
  topic: string;
}

interface Work {
  title: string;
  link: string;
  description: string;
  imageUrl: string;
  createrDetails: CreatorProfile;
  value: string;
}

const shuffleArray = (array: Work[]): Work[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export function BlurFadeDemo(): JSX.Element {
  const [shuffledWorks, setShuffledWorks] = useState<Work[]>([]);

  useEffect(() => {
    setShuffledWorks(shuffleArray(works));
  }, []);

  return (
    <Tabs defaultValue="all" className="mt-4 md:mt-8">
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        {creationTopic.map((topic: CreationTopic) => (
          <TabsTrigger key={topic.topic} value={topic.topic}>
            {topic.topic
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="all">
        <section className="grid md:grid-cols-3 gap-8 justify-items-center py-10">
          {shuffledWorks.map((work: Work, idx: number) => (
            <WorkCard key={work.title} {...work} idx={idx} />
          ))}
        </section>
      </TabsContent>

      {creationTopic.map((topic: CreationTopic) => (
        <TabsContent key={topic.topic} value={topic.topic}>
          <section className="grid md:grid-cols-3 gap-8 justify-items-center py-10">
            {shuffledWorks
              .filter((work: Work) => work.value === topic.topic)
              .map((work: Work, idx: number) => (
                <WorkCard key={work.title} {...work} idx={idx} />
              ))}
          </section>
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default BlurFadeDemo;