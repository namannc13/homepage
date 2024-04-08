import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sections } from "@/utils/data";
import Tab from "./Tab/Tab";
import Tab2 from "./Tab2/Tab2";

export default function Home({ mode }) {
  const [activeTag, setActiveTag] = useState("socials");

  const handleTabChange = (tag) => {
    setActiveTag(tag);
  };

  const filteredSections = sections.filter(section => section.tag === activeTag);

  return (
    <div className="mt-2">
      <Tabs defaultValue="socials" className="w-full">
        <TabsList>
          <TabsTrigger
            value="socials"
            onClick={() => handleTabChange("socials")}
          >
            Socials
          </TabsTrigger>
          <TabsTrigger value="norm" onClick={() => handleTabChange("norm")}>
            Norm
          </TabsTrigger>
          <TabsTrigger value="study" onClick={() => handleTabChange("study")}>
            Study
          </TabsTrigger>
          <TabsTrigger value="anime" onClick={() => handleTabChange("anime")}>
            Anime
          </TabsTrigger>
        </TabsList>
        {mode === "a" &&
          sections.map((section) => (
            <TabsContent key={section.name} value={section.tag}>
              <Tab
                name={section.name}
                username={section.username}
                avatar={section.avatar}
                landing_page_link={section.landing_page_link}
                profile_link={section.profile_link}
              />
            </TabsContent>
          ))}
        {mode === "b" && (
          <div className="grid grid-cols-3 gap-4">
            {filteredSections.map((section) => (
              <TabsContent
                key={section.name}
                value={section.tag}
                className="flex justify-between"
              >
                <Tab2 name={section.name} avatar={section.avatar} landing_page_link={section.landing_page_link}/>
              </TabsContent>
            ))}
          </div>
        )}
      </Tabs>
    </div>
  );
}
