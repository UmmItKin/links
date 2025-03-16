import React from 'react';
import { FaLaptop, FaKeyboard, FaDesktop, FaHeadphones, FaServer } from 'react-icons/fa';
import { IoHardwareChip } from 'react-icons/io5';
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { DiLinux } from "react-icons/di";

function Gear() {
  const gearCategories = [
    {
      title: "Desktop (Triple Boot with three GNU/Linux)",
      icon: <FaLaptop className="text-myPink1 text-2xl" />,
      items: [
        { name: "Motherboard", value: "Gigabyte B760M GAMING X" },
        { name: "CPU", value: "Intel i5-13600K" },
        { name: "GPU", value: "Sapphire RX 6650 XT 8GB" },
        { name: "GPU-2", value: "PowerColor RX 6600 8GB" },
        { name: "RAM", value: "ADATA XPG 64GB" },
        { name: "NVMe SSD", value: "Kingston KC3000 2TB" },
        { name: "SATA SSD", value: "Toshiba MG08 4TB" },
        { name: "Power Supply", value: "ADATA 850W Gold" },
        { name: "Case", value: "GIGABYTE C200" },
        { name: "Cooler", value: "Thermalright Aqua Elite 240" },
        { name: "Fans", value: "Thermalright TL-C12C x3" },
        { name: "Operating System", value: "GNU/Linux" },
        { name: "Distribution", value: "Arch Linux / Gentoo / NixOS" },
        { name: "Dynamic Window Manager", value: "Hyprland" },
        { name: "Desktop Environment", value: "KDE Plasma" },
      ]
    },
    {
      title: "Laptop (Dual Boot with two GNU/Linux)",
      icon: <FaLaptop className="text-myPink1 text-2xl" />,
      items: [
        { name: "Device", value: "HP Pavilion Aero 13 (Ryzen 7, Sky Blue)" },
        { name: "CPU", value: "AMD Ryzen 7-8840U Processor" },
        { name: "iGPU", value: "AMD Radeon Graphics" },
        { name: "RAM", value: "On-Board 16GB LPDDR5x" },
        { name: "NVMe SSD", value: "1TB PCIe NVMe M.2 SSD" },
        { name: "Opearting System", value: "GNU/Linux" },
        { name: "Distribution", value: "Arch Linux / Kali Linux" },
        { name: "Dynamic Window Manager", value: "Hyprland" },
        { name: "Desktop Environment", value: "KDE Plasma" },
      ]
    },
    {
      title: "Peripherals",
      icon: <FaKeyboard className="text-myPink1 text-2xl" />,
      items: [
        { name: "Keyboard", value: "MSI GK20 Gaming Keyboard" },
        { name: "Mouse", value: "Logitech G502 X Wired Gaming Mouse - Black" },
        { name: "Chair", value: "Cooler Master CALIBER X2 - Grey "},
      ]
    },
    {
      title: "Homelab",
      icon: <FaServer className="text-myPink1 text-2xl" />,
      items: [
        { name: "Server", value: "Raspberry Pi 4B" },
        { name: "RAM", value: "8GB LPDDR4-3200 SDRAM" },
        { name: "Storage", value: "microSD 128GB" },
        { name: "OS", value: "OpenWrt" },
      ]
    },
    {
      title: "Mobile Devices",
      icon: <HiMiniDevicePhoneMobile className="text-myPink1 text-2xl" />,
      items: [
        { name: "Device", value: "Googel Pixel 6a" },
        { name: "RAM", value: "8GB" },
        { name: "Storage", value: "128GB" },
        { name: "OS", value: "Graphene OS" },
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
                <div key={itemIndex} className="flex items-center">
                  <IoHardwareChip className="text-myPink1 mr-2" />
                  <span className="font-medium mr-2">{item.name}:</span>
                  <span className="text-gray-300">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gear;
