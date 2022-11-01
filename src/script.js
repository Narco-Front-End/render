const usersArray = [
  {
    name: 'Leslie Lowe',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/344.jpg',
    position: 'Internal Metrics Liaison',
  },
  {
    name: 'Dr. Cynthia Johnson',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/141.jpg',
    position: 'National Configuration Strategist',
  },
  {
    name: 'Kathryn Vandervort',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/118.jpg',
    position: 'Direct Communications Developer',
  },
  {
    name: 'Martin Gleichner',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1023.jpg',
    position: 'Legacy Branding Designer',
  },
  {
    name: 'Guillermo Predovic',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/449.jpg',
    position: 'Legacy Tactics Designer',
  },
  {
    name: 'Diane Boehm',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/453.jpg',
    position: 'Investor Response Supervisor',
  },
  {
    name: 'Mr. Marlon Rath',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/386.jpg',
    position: 'Principal Web Liaison',
  },
  {
    name: 'Nancy Labadie',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1148.jpg',
    position: 'Lead Applications Producer',
  },
  {
    name: 'Jenna Harber',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/648.jpg',
    position: 'Future Intranet Associate',
  },
  {
    name: 'Alison Bradtke III',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/293.jpg',
    position: 'Product Operations Strategist',
  },
  {
    name: 'Donna Gorczany',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/33.jpg',
    position: 'Investor Security Facilitator',
  },
  {
    name: 'Miguel Batz',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1079.jpg',
    position: 'Future Usability Manager',
  },
  {
    name: 'Gina Lindgren',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/909.jpg',
    position: 'National Usability Technician',
  },
  {
    name: 'Agnes Schinner',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/896.jpg',
    position: 'Central Assurance Consultant',
  },
  {
    name: 'Colleen Bernier',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    position: 'Forward Intranet Manager',
  },
  {
    name: 'Wendell Bogisich',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/676.jpg',
    position: 'Investor Interactions Engineer',
  },
  {
    name: 'Myrtle Walter',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/904.jpg',
    position: 'Legacy Security Engineer',
  },
  {
    name: 'Lauren Smitham',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/442.jpg',
    position: 'National Marketing Officer',
  },
  {
    name: 'Ryan Farrell',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/585.jpg',
    position: 'Internal Branding Liaison',
  },
  {
    name: 'Alexandra Kling',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1119.jpg',
    position: 'International Intranet Representative',
  },
  {
    name: 'Vernon Ondricka',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/541.jpg',
    position: 'Human Interactions Architect',
  },
  {
    name: 'Sonja Keebler III',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/362.jpg',
    position: 'International Factors Executive',
  },
  {
    name: 'Ms. Kristy Towne',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/979.jpg',
    position: 'Chief Directives Architect',
  },
  {
    name: 'Ramona Aufderhar Jr.',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/93.jpg',
    position: 'Direct Tactics Technician',
  },
  {
    name: 'Joan Rowe',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/662.jpg',
    position: 'Internal Directives Producer',
  },
  {
    name: 'Casey Schmidt',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1041.jpg',
    position: 'Product Operations Coordinator',
  },
  {
    name: 'Jackie Brown',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/597.jpg',
    position: 'Internal Factors Officer',
  },
  {
    name: 'Shelia Skiles',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
    position: 'Chief Implementation Liaison',
  },
  {
    name: 'Jean Kunde',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/746.jpg',
    position: 'Product Accountability Administrator',
  },
  {
    name: 'Barbara Schamberger',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/874.jpg',
    position: 'Dynamic Assurance Facilitator',
  },
  {
    name: 'Mrs. Darrel Baumbach',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/517.jpg',
    position: 'Forward Data Technician',
  },
  {
    name: 'Katrina Hammes',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/165.jpg',
    position: 'Global Division Specialist',
  },
  {
    name: 'Mercedes Haley',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/655.jpg',
    position: 'Human Security Consultant',
  },
  {
    name: 'Marta Veum PhD',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/78.jpg',
    position: 'Lead Creative Facilitator',
  },
  {
    name: 'Bert Cummings',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1042.jpg',
    position: 'Future Division Associate',
  },
  {
    name: 'Rene Hagenes',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1176.jpg',
    position: 'Human Data Agent',
  },
  {
    name: 'Nora Batz',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/299.jpg',
    position: 'Future Brand Engineer',
  },
  {
    name: 'Dolores Beer',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/160.jpg',
    position: 'Senior Assurance Associate',
  },
  {
    name: 'Lori Ortiz',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/377.jpg',
    position: 'Customer Intranet Director',
  },
  {
    name: 'Alfred Kunze',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1237.jpg',
    position: 'District Infrastructure Liaison',
  },
];
const list = document.querySelector('.list');
const element = document.createElement('li');

window.addEventListener('DOMContentLoaded', function () {
  const addElements = usersArray.map((array, index) => {
    return `<li>
<img src=${array.photo} alt="">
<p>${array.name}</p>
<p>${array.position}</p>
</li>
  `;
  });
  list.innerHTML = addElements;
});
