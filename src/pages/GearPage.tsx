import React from 'react';
import { FaLaptop, FaKeyboard, FaDesktop, FaServer, FaMemory, FaMicrochip, FaHdd, FaPowerOff, FaFan, FaLinux, FaChair, FaMouse, FaHeadphones } from 'react-icons/fa';
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { DiLinux } from "react-icons/di";
import { BsMotherboard, BsGpuCard } from "react-icons/bs";
import { BiSolidCog } from "react-icons/bi";
import { PiDesktopTowerDuotone } from "react-icons/pi";

interface GearItem {
  name: string;
  value: string;
  icon: React.ReactNode;
}

interface GearCategory {
  title: string;
  icon: React.ReactNode;
  items: GearItem[];
}

const GearPage: React.FC = () => {
  const gearCategories: GearCategory[] = [
    {
      title: "Desktop (Triple Boot with three GNU/Linux)",
      icon: <FaDesktop className="text-myPink1 text-2xl" />,
      items: [
        { name: "Motherboard", value: "Gigabyte B760M GAMING X", icon: <BsMotherboard className="text-myPink1 text-lg" /> },
        { name: "CPU", value: "Intel i5-13600K", icon: <FaMicrochip className="text-myPink1 text-lg" /> },
        { name: "GPU", value: "Sapphire RX 6650 XT 8GB", icon: <BsGpuCard className="text-myPink1 text-lg" /> },
        { name: "GPU-2", value: "PowerColor RX 6600 8GB", icon: <BsGpuCard className="text-myPink1 text-lg" /> },
        { name: "RAM", value: "ADATA XPG 64GB", icon: <FaMemory className="text-myPink1 text-lg" /> },
        { name: "NVMe SSD", value: "Kingston KC3000 2TB", icon: <FaHdd className="text-myPink1 text-lg" /> },
        { name: "SATA SSD", value: "Toshiba MG08 4TB", icon: <FaHdd className="text-myPink1 text-lg" /> },
        { name: "Power Supply", value: "ADATA 850W Gold", icon: <FaPowerOff className="text-myPink1 text-lg" /> },
        { name: "Case", value: "GIGABYTE C200", icon: <PiDesktopTowerDuotone className="text-myPink1 text-lg" /> },
        { name: "Cooler", value: "Thermalright Aqua Elite 240", icon: <FaFan className="text-myPink1 text-lg" /> },
        { name: "Fans", value: "Thermalright TL-C12C x3", icon: <FaFan className="text-myPink1 text-lg" /> },
        { name: "Operating System", value: "GNU/Linux", icon: <FaLinux className="text-myPink1 text-lg" /> },
        { name: "Distribution", value: "Arch Linux / Gentoo / NixOS", icon: <DiLinux className="text-myPink1 text-lg" /> },
        { name: "Dynamic Window Manager", value: "Hyprland", icon: <BiSolidCog className="text-myPink1 text-lg" /> },
        { name: "Desktop Environment", value: "KDE Plasma", icon: <BiSolidCog className="text-myPink1 text-lg" /> },
      ]
    },
    {
      title: "Laptop (Dual Boot with two GNU/Linux)",
      icon: <FaLaptop className="text-myPink1 text-2xl" />,
      items: [
        { name: "Device", value: "HP Pavilion Aero 13 (Ryzen 7, Sky Blue)", icon: <FaLaptop className="text-myPink1 text-lg" /> },
        { name: "CPU", value: "AMD Ryzen 7-8840U Processor", icon: <FaMicrochip className="text-myPink1 text-lg" /> },
        { name: "iGPU", value: "AMD Radeon Graphics", icon: <BsGpuCard className="text-myPink1 text-lg" /> },
        { name: "RAM", value: "On-Board 16GB LPDDR5x", icon: <FaMemory className="text-myPink1 text-lg" /> },
        { name: "NVMe SSD", value: "1TB PCIe NVMe M.2 SSD", icon: <FaHdd className="text-myPink1 text-lg" /> },
        { name: "Opearting System", value: "GNU/Linux", icon: <FaLinux className="text-myPink1 text-lg" /> },
        { name: "Distribution", value: "Arch Linux / Kali Linux", icon: <DiLinux className="text-myPink1 text-lg" /> },
        { name: "Dynamic Window Manager", value: "Hyprland", icon: <BiSolidCog className="text-myPink1 text-lg" /> },
        { name: "Desktop Environment", value: "KDE Plasma", icon: <BiSolidCog className="text-myPink1 text-lg" /> },
      ]
    },
    {
      title: "Peripherals",
      icon: <FaKeyboard className="text-myPink1 text-2xl" />,
      items: [
        { name: "Keyboard", value: "MSI GK20 Gaming Keyboard", icon: <FaKeyboard className="text-myPink1 text-lg" /> },
        { name: "Mouse", value: "Logitech G502 X Wired Gaming Mouse - Black", icon: <FaMouse className="text-myPink1 text-lg" /> },
        { name: "Chair", value: "Cooler Master CALIBER X2 - Grey", icon: <FaChair className="text-myPink1 text-lg" /> },
        { name: "Headphones", value: "Pixel Buds Pro 2", icon: <FaHeadphones className="text-myPink1 text-lg" /> },
      ]
    },
    {
      title: "Homelab",
      icon: <FaServer className="text-myPink1 text-2xl" />,
      items: [
        { name: "Server", value: "Raspberry Pi 4B", icon: <FaServer className="text-myPink1 text-lg" /> },
        { name: "RAM", value: "8GB LPDDR4-3200 SDRAM", icon: <FaMemory className="text-myPink1 text-lg" /> },
        { name: "Storage", value: "microSD 128GB", icon: <FaHdd className="text-myPink1 text-lg" /> },
        { name: "OS", value: "OpenWrt", icon: <FaLinux className="text-myPink1 text-lg" /> },
      ]
    },
    {
      title: "Mobile Devices",
      icon: <HiMiniDevicePhoneMobile className="text-myPink1 text-2xl" />,
      items: [
        { name: "Device", value: "Googel Pixel 6A", icon: <HiMiniDevicePhoneMobile className="text-myPink1 text-lg" /> },
        { name: "RAM", value: "8GB", icon: <FaMemory className="text-myPink1 text-lg" /> },
        { name: "Storage", value: "128GB", icon: <FaHdd className="text-myPink1 text-lg" /> },
        { name: "OS", value: "Graphene OS", icon: <FaLinux className="text-myPink1 text-lg" /> },
      ]
    }
  ];

  return (
    <div className="pt-24 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">UmmIt Gears <DiLinux className="text-myPink1 text-4xl inline-block mb-2" /> :)</h1>
      <p className="text-center text-gray-300 mb-8">These are the gears I use for my daily life and work. Without them, I Probably not here :)</p>
      
      <div className="space-y-8">
        {gearCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/30 hover:border-myPink1 transition-all duration-300 hover:shadow-lg hover:shadow-myPink1/20"
          >
            <div className="flex items-center mb-4">
              {category.icon}
              <h2 className="text-2xl font-bold ml-3">{category.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center space-x-2">
                  {item.icon}
                  <span className="font-medium">{item.name}:</span>
                  <span className="text-gray-300">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GearPage;
