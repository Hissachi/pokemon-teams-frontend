import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Bot, PlusCircle, Shield } from "lucide-react"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Centro Pokémon
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Meu Time</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            {/* Card Pokédex - Ocupa 1 coluna */}
            <Link href="/pokedex" className="group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 aspect-video rounded-xl p-6 flex flex-col justify-between transition-all hover:shadow-lg hover:scale-[1.02] h-full">
                <div className="flex justify-between items-start">
                  <Bot className="h-10 w-10 text-white/90" />
                  <span className="text-xs font-medium text-white/70">EXPLORAR</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Pokédex</h3>
                  <p className="text-sm text-white/80 mt-1">
                    Descubra todos os Pokémon disponíveis
                  </p>
                </div>
              </div>
            </Link>

            {/* Card Criar Time - Ocupa 1 coluna */}
            <Link href="/teams/new" className="group">
              <div className="bg-gradient-to-br from-red-500 to-red-700 aspect-video rounded-xl p-6 flex flex-col justify-between transition-all hover:shadow-lg hover:scale-[1.02] h-full">
                <div className="flex justify-between items-start">
                  <PlusCircle className="h-10 w-10 text-white/90" />
                  <span className="text-xs font-medium text-white/70">CRIAR</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Novo Time</h3>
                  <p className="text-sm text-white/80 mt-1">
                    Monte seu time com até 5 Pokémon
                  </p>
                </div>
              </div>
            </Link>

            {/* Card Tipos Pokémon - Ocupa 2 colunas */}
            <div className="group relative aspect-video rounded-xl overflow-hidden md:col-span-2">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542779283-429940ce8336?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent" />
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                <Shield className="h-10 w-10 text-purple-300 mb-2" />
                <h3 className="text-2xl font-bold text-white">Domine os Tipos</h3>
                <p className="text-sm text-white/80 mt-2 max-w-md">
                  Aprenda sobre vantagens e desvantagens dos tipos Pokémon
                </p>
                <button className="mt-4 px-4 py-2 bg-purple-600 rounded-md text-white font-medium hover:bg-purple-700 transition-colors">
                  Ver Guia Completo
                </button>
              </div>
            </div>
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}