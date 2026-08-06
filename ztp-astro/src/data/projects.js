export const projects = [
  {
    slug: 'home-storage-server',
    title: 'Home Storage Server',
    desc: 'A home storage server running TrueNAS CE for SMB and network location shares.',
    status: 'live',
    tags: ['networking', 'SMB', 'TrueNAS'],
    body: `
      <h3>Introduction</h3>
      <p>Welcome to my first home lab project! This has been one of my favorite builds because it's something I still use today. It started as a way to learn more about network storage, but it quickly became a reliable part of my home network. I hope you enjoy reading about the build process as much as I enjoyed putting it together.</p>

      <h3>Project description</h3>
      <p>A home storage server, also known as a NAS (Network Attached Storage), is a dedicated computer connected to your home network that stores digital files, backups and media. Think of it as your own private cloud that you control.</p>

      <h3>Hardware and software used</h3>
      <p><strong>Software</strong></p>
      <ul>
        <li>TrueNAS Community Edition (CE)</li>
      </ul>
      <p><strong>Hardware</strong></p>
      <ul>
        <li>HP EliteDesk 800 G5
          <ul>
            <li>Intel Celeron G3930T</li>
            <li>16 GB DDR4 SODIMM RAM</li>
          </ul>
        </li>
        <li>CENMATE 2-Bay HDD Enclosure</li>
        <li>2 × Western Digital Ultrastar DC HA210 (2 TB SATA HDD)</li>
        <li>Custom 3D-printed 10-inch rack</li>
      </ul>

      <h3>Purpose</h3>
      <p>The goal of this project was to build an inexpensive and reliable storage server for my home network. I wanted a place to store important files, backups and shared folders while also gaining hands-on experience with TrueNAS and ZFS. I also wanted a system that I could expand and improve over time.</p>

      <h3>Build process</h3>
      <p><strong>Step 1: Purchasing the hardware</strong></p>
      <p>The first step was gathering all of the hardware. I chose the CENMATE two-bay DAS enclosure because it was simple to set up and supported USB 3.0 speeds. While USB isn't the fastest option for a NAS, it fit my budget and has worked well for my needs.</p>
      <p>For storage, I searched ServerPartDeals for enterprise hard drives and found a pair of Western Digital Ultrastar drives that offered a good balance of reliability, performance and price.</p>
      <p class="caption">Figure 1. Completed HP EliteDesk NAS mounted in my custom 10-inch rack.</p>

      <p><strong>Step 2: Teardown and inspection</strong></p>
      <p>Since these HP EliteDesk systems were purchased used, I wasn't sure what condition they were in. After removing the top cover, I inspected the system for any obvious damage. Everything looked clean, so I removed the CPU cooler and checked the processor.</p>
      <p>The thermal paste had completely dried out, so I cleaned both the CPU and heatsink with isopropyl alcohol before applying fresh thermal paste. While everything was apart, I also cleaned dust from the heatsink and cooling fan.</p>
      <p>After reassembling the system, I powered it on. The internal drive had already been wiped, so the BIOS simply prompted me to install an operating system.</p>
      <p class="caption">Figure 2. Replacing the dried thermal paste during the rebuild.</p>

      <p><strong>Step 3: Choosing an operating system</strong></p>
      <p>I decided to use TrueNAS Community Edition (CE) for this project. I had previously experimented with OpenMediaVault and enjoyed using it, but I wanted something with more enterprise features. TrueNAS offered everything I was looking for, including native ZFS support, snapshots and a polished web interface, all at no cost.</p>

      <p><strong>Step 4: Installing TrueNAS</strong></p>
      <p>I downloaded the latest TrueNAS CE ISO and copied it to my Ventoy bootable USB drive. After booting the HP EliteDesk from the USB drive through the BIOS, the installation process was quick and straightforward. Once installation finished, the system restarted successfully and displayed the IP address for accessing the TrueNAS web interface. From there, the rest of the configuration was completed through the browser.</p>

      <p><strong>Step 5: Initial configuration</strong></p>
      <p>Once inside the TrueNAS web interface, I configured the storage pool using the two Ultrastar drives and created the datasets that would store my files.</p>
      <p class="caption">Figure 3. TrueNAS dashboard setup.</p>
      <p class="caption">Figure 4. TrueNAS web interface showing the configured storage pool.</p>
      <p>I also enabled SMB sharing so my Windows devices could easily access the server over my home network. After testing file transfers between multiple devices, everything worked exactly as expected.</p>

      <h3>Recap</h3>
      <p>This project gave me hands-on experience with TrueNAS, ZFS and SMB sharing, and turned into a storage server I still rely on today.</p>
    `,
    images: ['/images/10in_Rack.jpg', '/images/TrueNAS_Dashboard.png', '/images/TrueNas_Drives.png'],
  },
  {
    slug: 'home-network-segmentation',
    title: 'Home Network Segmentation',
    desc: 'Splitting a flat home network into VLANs for IoT, guest and trusted devices.',
    status: 'queued',
    tags: ['networking'],
    body: `A more detailed write-up of the Home Network Segmentation project goes here once it's underway.`,
    images: [],
  },
  {
    slug: 'azure-lab-environment',
    title: 'Azure Lab Environment',
    desc: 'A sandbox subscription for practicing Azure administration end to end.',
    status: 'progress',
    tags: ['azure', 'cloud'],
    body: `A more detailed write-up of the Azure Lab Environment project goes here. What's been set up so far, what's being practiced, and lessons learned along the way.`,
    images: [],
  },
];

export function statusLabel(status) {
  if (status === 'live') return 'Live';
  if (status === 'progress') return 'In progress';
  if (status === 'queued') return 'Queued';
  return 'Planning';
}
