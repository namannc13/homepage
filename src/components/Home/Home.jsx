import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sections } from "@/utils/data";
import Tab from "./Tab/Tab";

export default function Home() {
  const [activeTag, setActiveTag] = useState("socials"); // State to track active tag

  const handleTabChange = (tag) => {
    setActiveTag(tag); // Update active tag state when tab is changed
  };
  
  return (
    <div className="mt-2">
      <Tabs defaultValue="socials" className="w-full">
        <TabsList>
            <TabsTrigger
              value="socials"
              onClick={() => handleTabChange("socials")} // Handle tab click
            >
              Socials
            </TabsTrigger>
            <TabsTrigger
            value="study"
              onClick={() => handleTabChange("study")} // Handle tab click
            >
              Study
            </TabsTrigger>
            <TabsTrigger
            value="college"
              onClick={() => handleTabChange("college")} // Handle tab click
            >
              College
            </TabsTrigger>
        </TabsList>
        {sections.map((section) => (
          <TabsContent key={section.tag} value={section.tag}>
            {/* Render content for the active tag */}
            {section.tag === activeTag && (
              <Tab
                name={section.name}
                username={section.username}
                avatar={section.avatar}
                landing_page_link={section.landing_page_link}
                profile_link={section.profile_link}
              />
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
