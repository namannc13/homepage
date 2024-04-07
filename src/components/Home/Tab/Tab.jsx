import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Tab({
  name,
  username,
  avatar,
  landing_page_link,
  profile_link,
}) {
  const handleVisitLandingPage = () => {
    window.location.href = landing_page_link;
  };

  const handleVisitProfilePage = () => {
    window.location.href = profile_link;
  };

  return (
    <div className="flex flex-col items-center space-x-1 rounded-md shadow-md p-2 mt-6 bg-background ">
      <div className="w-full flex justify-center items-center">
        <Avatar className="h-6 w-6">
          <AvatarImage src={avatar} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h1 className="px-2 text-md font-semibold text-muted-foreground hover:cursor-pointer hover:text-foreground">
          {name} - @{username}
        </h1>
      </div>
      <div className="w-full flex mt-4 gap-4">
        <Button variant="outline" size="sm" className="flex-1" onClick={handleVisitLandingPage}>Visit Landing Page</Button>
        <Button variant="outline" size="sm" className="flex-1" onClick={handleVisitProfilePage}>View Profile Page</Button>
      </div>
    </div>
  );
}
