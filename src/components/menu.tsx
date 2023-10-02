import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ExternalLinkIcon, SettingsIcon, UserCircle2Icon } from "lucide-react";

export function Menu() {
  return (
    <Menubar className="rounded-none border-b border-none justify-end px-2 lg:px-4 py-10">
      <MenubarMenu>
        <MenubarTrigger>
          <SettingsIcon />
        </MenubarTrigger>

      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hidden md:block">
          <UserCircle2Icon />
        </MenubarTrigger>
        <MenubarContent forceMount>
          {/* <MenubarLabel inset>Switch Account</MenubarLabel> */}
          {/* <MenubarSeparator /> */}
          {/* <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup> */}
          {/* <MenubarSeparator /> */}
          <MenubarItem inset>
            Account
            <ExternalLinkIcon size={16} className="ml-auto" />
          </MenubarItem>
          <MenubarItem inset>Profile</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Log out</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
