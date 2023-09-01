import HomeLayout from "@/app/components/layout/home/homeLayout";
import { categoryData } from "@/app/mockData/index";
export default function Home() {
  return <HomeLayout categoryData={categoryData} />;
}
