"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Time Alfa",
      logo: GalleryVerticalEnd,
      plan: "descrição",
    },
    {
      name: "Time Beta",
      logo: AudioWaveform,
      plan: "descrição",
    },
    {
      name: "Time Gama",
      logo: Command,
      plan: "descrição",
    },
  ],
  navMain: [
    {
      title: "Meu Time",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Gerenciar times",
          url: "#",
        },
        {
          title: "Criar novo time",
          url: "/teams/new",
        },
        {
          title: "Excluir time",
          url: "#",
        },
      ],
    },
    {
      title: "Pokédex",
      url: "/pokedex",
      icon: Bot,
      items: [
        {
          title: "Seus pokémons",
          url: "#",
        },
        {
          title: "Todos os pokémons",
          url: "/pokedex",
        },
      ],
    },
    {
      title: "Ajuda",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Sobre",
          url: "#",
        },
        {
          title: "FAQ",
          url: "#",
        },
        {
          title: "Contato",
          url: "#",
        },
      ],
    },
    {
      title: "Configurações",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Geral",
          url: "#",
        },
        {
          title: "Times",
          url: "#",
        },
        {
          title: "Perfil",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
