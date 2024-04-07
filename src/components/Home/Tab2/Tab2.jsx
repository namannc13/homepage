import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Tab2({ name, avatar, landing_page_link }) {
  const handleVisitPage = () => {
    window.location.href = landing_page_link;
  };

  return (
    <div
      className=" w-full rounded-md border bg-card text-card-foreground shadow mt-2 p-2 hover:cursor-pointer hover:bg-muted flex flex-row items-center justify-between"
      onClick={handleVisitPage}
    >
      <Avatar className="h-8 w-8">
        <AvatarImage src={avatar} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="px-2 text-md font-semibold text-muted-foreground hover:cursor-pointer hover:text-foreground">
        {name}
      </h1>
    </div>
  );
}
