"use client";
import { SelfImprovementRounded } from "@mui/icons-material";
import { Chip, Theme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import HeaderDivider from "../ui/HeaderDivider";
import * as skillsIcons from "../../assets/icons/index";
import Image from "next/image";
import { SystemStyleObject } from "@mui/system";
import { ResponsiveStyleValue } from "@mui/system/styleFunctionSx";

const otherSkills = [
  {
    name: "redux",
    icon: skillsIcons.ReduxIcon,
    color: "#9900ff",
  },
  {
    name: "react native",
    icon: skillsIcons.reactIcon,
    color: "#0059ff",
  },
  {
    name: "materialUi",
    icon: skillsIcons.MaterialUiIcon,
    color: "#0087ff",
  },
  {
    name: "tailwindCss",
    icon: skillsIcons.TailwindCssIcon,
    color: "#00bbff",
  },
  {
    name: "vite",
    icon: skillsIcons.ViteIcon,
    color: "#9090ff",
  },
  {
    name: "typescript",
    icon: skillsIcons.TypescriptIcon,
    color: "#444444",
  },
  {
    name: "webpack",
    icon: skillsIcons.WebpackIcon,
    color: "#444466",
  },
  {
    name: "socket.io",
    icon: skillsIcons.SocketIoIcon,
    color: "#aaaaaa",
  },
  {
    name: "express",
    icon: skillsIcons.ExpressJsIcon,
    color: "#aaaaaa",
  },
  {
    name: "jwt",
    icon: skillsIcons.JwtIcon,
    color: "#ffcd00",
  },
  {
    name: "TRPC",
    icon: skillsIcons.TRPCIcon,
    color: "#0055cc",
  },
  {
    name: "prisma",
    icon: skillsIcons.PrismaIcon,
    color: "#acff00",
  },
  {
    name: "mongodb",
    icon: skillsIcons.MongodbIcon,
    color: "#00cf55",
  },
  {
    name: "mySQL",
    icon: skillsIcons.MySQL,
    color: "#0088ff",
  },
  {
    name: "postgresql",
    icon: skillsIcons.PostgresqlIcon,
    color: "#0099ff",
  },
  {
    name: "redis",
    icon: skillsIcons.RedisIcon,
    color: "#ff5130",
  },
];

const AboutMeOtherSkills = () => {
  return (
    <Grid container>
      <Grid sx={{ width: 1, mt: 1 }}>
        <HeaderDivider
          color="primary.dark"
          animation={false}
          // @ts-ignore
          icon={<SelfImprovementRounded color="text.primary" />}
        >
          سایر مهارت ها
        </HeaderDivider>
        <Grid container>
          {otherSkills.map((skill) => (
            <Grid sm={2} md={2} lg={3} mt={5}>
              <Chip
                label={skill.name}
                sx={{
                  bgcolor: skill.color,
                  color: "text.primary",
                }}
                icon={
                  <Image
                    src={skill.icon.src}
                    alt={skill.name}
                    width={50}
                    height={50}
                  />
                }
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutMeOtherSkills;