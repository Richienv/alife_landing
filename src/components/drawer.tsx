import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";

export default function drawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger>
        <IoMenuSharp className="text-2xl" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="px-6">
          <div className="">
            <Link
              href="/"
              title="brand-logo"
              className="relative mr-6 flex items-center space-x-2"
            >
              <Icons.logo className="w-auto h-[40px]" />
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </Link>
          </div>
          <nav>
            <ul className="mt-7 text-left">
              {siteConfig.header
                .filter(item => item.label !== "Solutions") // Remove "Solutions" from the list
                .map((item, index) => (
                  <li key={index} className="my-3">
                    {item.trigger ? (
                      <span className="font-semibold">{item.trigger}</span>
                    ) : (
                      <Link href={item.href || ""} className="font-semibold">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
            </ul>
          </nav>
        </DrawerHeader>
        <DrawerFooter>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "default" })}
          >
            Contact
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
