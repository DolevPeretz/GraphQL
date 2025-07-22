import { FormEvent, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  const { toast } = useToast();
  const [text, setText] = useState(userName);

  const handelSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") {
      toast({ description: "plase enter a valid userName" });
      console.log("please enter name");
      return;
    }
    setUserName(text);
  };
  return (
    <form
      onSubmit={handelSearch}
      className="flex items-center gap-x-2 w-full lg:w-1/3 mb-8"
    >
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        type="text"
        id="search"
        value={text}
        placeholder="search Gihthub users..."
        onChange={(e) => setText(e.target.value)}
        className="flex-grow bg-background"
      />
      <Button type="submit">Search</Button>
    </form>
  );
};
export default SearchForm;
