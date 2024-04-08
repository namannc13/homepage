import { GithubLogo, TwitterLogo, YoutubeLogo, PinterestLogo, InstagramLogo, TwitchLogo, RedditLogo, Trash, Keyboard, Mailbox, Code, Cat } from "@phosphor-icons/react";

export default function Tab2({ name, platform, landing_page_link }) {
  const handleVisitPage = () => {
    window.location.href = landing_page_link;
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
    <div
      className="w-full rounded-md border bg-card text-card-foreground shadow mt-2 p-2 hover:cursor-pointer hover:bg-muted flex flex-row items-center justify-between"
      onClick={handleVisitPage}
    >
      {platformComponent}

      <h1 className="px-2 text-md font-semibold text-muted-foreground hover:cursor-pointer hover:text-foreground">
        {name}
      </h1>
    </div>
  );
}
