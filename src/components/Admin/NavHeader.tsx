import { LogOut, ChevronDown } from "lucide-react";
import { ProfilePic } from "@/src/assets";
import styles from "../../styles";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import { useAuth } from "@/src/hooks/useAuth";

const NavHeader = ({ title }: any) => {
  const { user, logout }: any = useAuth();
  return (
    <div className="flex items-center justify-between ">
      <div>
        <h1
          className={`${styles.heading3} leading-normal font-semibold tracking-wide font-nunito`}
        >
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-2 lg:gap-3">
        <div>
          <img
            src={ProfilePic}
            alt="user profile picture"
            className="w-[35px] h-[35px] rounded-full"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="bg-blue-100 flex items-center gap-4 py-2 px-4 rounded-lg text-blue-700 cursor-pointer">
              <p className="font-bold text-sm">{user?.email}</p>
              <ChevronDown className="h-4 w-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div
                className="text-red-700 hover:font-bold cursor-pointer flex items-center"
                onClick={() => logout()}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <p>Log out</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavHeader;
