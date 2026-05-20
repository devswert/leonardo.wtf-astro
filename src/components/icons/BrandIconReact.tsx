import GoIcon from "./react/GoIcon";
import JSIcon from "./react/JSIcon";
import TypeScriptIcon from "./react/TypeScriptIcon";
import PythonIcon from "./react/PythonIcon";
import PHPIcon from "./react/PHPIcon";
import DartIcon from "./react/DartIcon";
import LaravelIcon from "./react/LaravelIcon";
import NestjsIcon from "./react/NestjsIcon";
import FlutterIcon from "./react/FlutterIcon";
import TailwindIcon from "./react/TailwindIcon";
import DjangoIcon from "./react/DjangoIcon";
import MongoDBIcon from "./react/MongoDBIcon";
import NodeJsIcon from "./react/NodeJsIcon";
import VueIcon from "./react/VueIcon";
import AngularIcon from "./react/AngularIcon";
import RedisIcon from "./react/RedisIcon";
import PostgreSQLIcon from "./react/PostgreSQLIcon";
import MySQLIcon from "./react/MySQLIcon";
import KafkaIcon from "./react/KafkaIcon";
import DockerIcon from "./react/DockerIcon";
import FigmaIcon from "./react/FigmaIcon";
import KubernetesIcon from "./react/KubernetesIcon";
import AWSIcon from "./react/AWSIcon";
import NginxIcon from "./react/NginxIcon";
import WordPressIcon from "./react/WordPressIcon";
import SCSSIcon from "./react/SCSSIcon";
import CSSIcon from "./react/CSSIcon";
import LinuxIcon from "./react/LinuxIcon";
import CodeigniterIcon from "./react/CodeigniterIcon";
import ShopifyIcon from "./react/ShopifyIcon";
import FirebaseIcon from "./react/FirebaseIcon";
import FastAPIIcon from "./react/FastAPIIcon";
import SupabaseIcon from "./react/SupabaseIcon";
import ReactIcon from "./react/ReactIcon";
import NextJSIcon from "./react/NextJSIcon";
import VercelIcon from "./react/VercelIcon";
import AstroIcon from "./react/AstroIcon";

interface BrandIconReactProps {
  icon: string;
  size: number;
}

export default function BrandIconReact({ icon, size }: BrandIconReactProps) {
  switch (icon) {
    case "go":
      return <GoIcon size={size} />;
    case "js":
      return <JSIcon size={size} />;
    case "typescript":
      return <TypeScriptIcon size={size} />;
    case "python":
      return <PythonIcon size={size} />;
    case "php":
      return <PHPIcon size={size} />;
    case "dart":
      return <DartIcon size={size} />;
    case "laravel":
      return <LaravelIcon size={size} />;
    case "nestjs":
      return <NestjsIcon size={size} />;
    case "flutter":
      return <FlutterIcon size={size} />;
    case "tailwind":
      return <TailwindIcon size={size} />;
    case "django":
      return <DjangoIcon size={size} />;
    case "mongo":
      return <MongoDBIcon size={size} />;
    case "node":
      return <NodeJsIcon size={size} />;
    case "vue":
      return <VueIcon size={size} />;
    case "angular":
      return <AngularIcon size={size} />;
    case "redis":
      return <RedisIcon size={size} />;
    case "postgresql":
      return <PostgreSQLIcon size={size} />;
    case "mysql":
      return <MySQLIcon size={size} />;
    case "kafka":
      return <KafkaIcon size={size} />;
    case "docker":
      return <DockerIcon size={size} />;
    case "figma":
      return <FigmaIcon size={size} />;
    case "k8s":
      return <KubernetesIcon size={size} />;
    case "aws":
      return <AWSIcon size={size} />;
    case "nginx":
      return <NginxIcon size={size} />;
    case "wordpress":
      return <WordPressIcon size={size} />;
    case "scss":
      return <SCSSIcon size={size} />;
    case "css":
      return <CSSIcon size={size} />;
    case "linux":
      return <LinuxIcon size={size} />;
    case "codeigniter":
      return <CodeigniterIcon size={size} />;
    case "shopify":
      return <ShopifyIcon size={size} />;
    case "firebase":
      return <FirebaseIcon size={size} />;
    case "fastapi":
      return <FastAPIIcon size={size} />;
    case "supabase":
      return <SupabaseIcon size={size} />;
    case "react":
      return <ReactIcon size={size} />;
    case "nextjs":
      return <NextJSIcon size={size} />;
    case "vercel":
      return <VercelIcon size={size} />;
    case "astro":
      return <AstroIcon size={size} />;
    default:
      return null;
  }
}
