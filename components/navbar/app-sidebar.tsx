import {
  Calendar,
  Home,


  Users,
 
  Phone,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,

  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type MenuItem = {
  title: string;
  url: string;
  icon?: React.ComponentType<{ className?: string }>;
  cName: string; // For custom class names
};

const menuItems: MenuItem[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
    cName: "nav-text",
  },
  {
    title: "Properties",
    url: "/properties",
    icon: Calendar, // Replace with an appropriate icon
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    url: "/contact",
    icon: Phone,
    cName: "nav-text",
  },
  {
    title: "Philosophy",
    url: "/philosophy",
    icon: Users,
    cName: "nav-text",
  },


];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-black rounded-sm">
        <SidebarGroup>
          <SidebarGroupContent className="mt-4">
            <SidebarMenu className="space-y-2 text-white ">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="" asChild>
                    <a
                      href={item.url}
                      className={`flex items-center space-x-2 text-lg font-mono ${item.cName}`}
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span className="text-lg">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
