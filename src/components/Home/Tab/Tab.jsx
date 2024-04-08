import {
  GithubLogo,
  TwitterLogo,
  YoutubeLogo,
  PinterestLogo,
  InstagramLogo,
  TwitchLogo,
  RedditLogo,
  Trash,
  Keyboard,
  Mailbox,
  Code,
  Cat,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export default function Tab({
  name,
  username,
  platform,
  landing_page_link,
  profile_link,
}) {
  const handleVisitLandingPage = () => {
    window.location.href = landing_page_link;
  };

  const handleVisitProfilePage = () => {
    window.location.href = profile_link;
  };

  let platformComponent;

  switch (platform) {
    case "github":
      platformComponent = <GithubLogo size={24} weight="duotone" />;
      break;

    case "twitter":
      platformComponent = <TwitterLogo size={24} weight="duotone" />;
      break;

    case "youtube":
      platformComponent = <YoutubeLogo size={24} weight="duotone" />;
      break;

    case "pinterest":
      platformComponent = <PinterestLogo size={24} weight="duotone" />;
      break;

    case "instagram":
      platformComponent = <InstagramLogo size={24} weight="duotone" />;
      break;

    case "twitch":
      platformComponent = <TwitchLogo size={24} weight="duotone" />;
      break;

    case "reddit":
      platformComponent = <RedditLogo size={24} weight="duotone" />;
      break;

    case "chalkpad":
      platformComponent = <Trash size={24} weight="duotone" />;
      break;

    case "monkeytype":
      platformComponent = <Keyboard size={24} weight="duotone" />;
      break;

    case "gmail":
      platformComponent = <Mailbox size={24} weight="duotone" />;
      break;

    case "leetcode":
      platformComponent = <Code size={24} weight="duotone" />;
      break;

    case "neetcode":
      platformComponent = <Code size={24} weight="duotone" />;
      break;

    case "hianime":
      platformComponent = <Cat size={24} weight="duotone" />;
      break;

    default:
      platformComponent = null;
      break;
  }

  return (
    <div className="flex flex-col items-center space-x-1 rounded-md shadow-md p-2 mt-6 bg-background ">
      <div className="w-full flex justify-center items-center">
        {platformComponent}
        <h1 className="px-2 text-sm sm:text-md font-semibold text-muted-foreground hover:cursor-pointer hover:text-foreground">
          {name}
        </h1>
      </div>
      <div className="w-full flex mt-4 gap-4">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={handleVisitLandingPage}
        >
          Visit Landing Page
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={handleVisitProfilePage}
        >
          View Profile Page
        </Button>
      </div>
    </div>
  );
}
