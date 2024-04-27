import Link from "next/link";
import Title from "./Title";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiRedux,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandNodejs } from "react-icons/tb";
import { DiFirebase } from "react-icons/di";

const Projects = () => {
  const projects = [
    {
      title: "Travel Admin",
      tech: [
        SiJavascript,
        SiReact,
        TbBrandNodejs,
        SiMongodb,
        SiExpress,
        SiTailwindcss,
      ],
      Link: "https://traveladmin.netlify.app/",
      cover: "/traveladmin.png",
      background: "bg-indigo-500",
    },
    {
      title: "Calendely",
      tech: [SiReact, SiHtml5, SiJavascript, DiFirebase],
      Link: "https://calendly-cyan.vercel.app/",
      cover: "/calendely.png",
      background: "bg-pink-500",
    },
    {
      title: "E-commerce",
      tech: [SiReact, SiRedux, TbBrandNextjs, SiTailwindcss],
      Link: "https://e-commerce-weld-one.vercel.app/",
      cover: "/ecommerce.png",
      background: "bg-cyan-500",
    },
    // {
    //   title: "Food Vista Order Shoes Online",
    //   tech: [SiHtml5, SiCss3, SiTailwindcss, SiJavascript],
    //   Link: "https://foot-vista.vercel.app/",
    //   cover: "/FootVistaThumbnail.png",
    //   background: "bg-green-500",
    // },
    // {
    //   title: "React Admin Dashboard",
    //   tech: [SiTypescript, SiReact, SiTailwindcss],
    //   Link: "https://react-admin-dashboard-pink.vercel.app/",
    //   cover: "/ReactAdminPannel@ChetanKesare.png",
    //   background: "bg-fuchsia-500",
    // },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((elem, index) => {
          return (
            <Link href={elem.Link} key={index}>
              <div className={cn("p-5 rounded-md", elem.background)}>
                <DirectionAwareHover
                  imageUrl={elem.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{elem.title}</h1>
                    <div className="flex items-center gap-5">
                      {elem.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
