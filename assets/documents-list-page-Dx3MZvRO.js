import{Y as t,c as s,b as n,o,X as u,J as a,a as r,G as i}from"./index-Tg2gwYyA.js";import{L as l}from"./tooltip-CESEqMCU-8RhwUbZ3.js";const c=[{id:1,userId:1,title:"Lorem Ipsum Dolor Sit Amet",subtitle:"Acme Publishing",content:`# Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae semper orci.

## Getting Started

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

## Usage

Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.`},{id:2,userId:1,title:"Consectetur Adipiscing Elit",subtitle:"FooBar Media",content:`# Overview

Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Installation

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Configuration

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`},{id:3,userId:1,title:"Sed Do Eiusmod Tempor",subtitle:"Dolor Labs",content:`# Quickstart

Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Commands

- \`npm install\`
- \`npm run build\`
- \`npm start\`

## Contributing

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},{id:4,userId:1,title:"Incididunt Ut Labore",subtitle:"Lorem Studio",content:`# About

Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.

## Features

1. Feature one
2. Feature two
3. Feature three

## License

Distributed under the MIT License.`},{id:5,userId:1,title:"Et Dolore Magna Aliqua",subtitle:"Ipsum Works",content:`# Summary

Et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.

## Requirements

- Requirement A
- Requirement B
- Requirement C

## Support

Contact support@ipsumworks.com for assistance.`},{id:6,userId:1,title:"Ut Enim Ad Minim Veniam",subtitle:"Minim Press",content:`# Introduction

Ut enim ad minim veniam, quis nostrud exercitation ullamco.

## Examples

\`\`\`bash
echo "Hello, world!"
\`\`\`

## Notes

Laboris nisi ut aliquip ex ea commodo consequat.`},{id:7,userId:1,title:"Quis Nostrud Exercitation",subtitle:"Nostrud Co.",content:`# Overview

Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.

## Setup

1. Clone the repo
2. Install dependencies
3. Run the application

## FAQ

- **Q:** Lorem ipsum?
  **A:** Dolor sit amet.`},{id:8,userId:1,title:"Ullamco Laboris Nisi Ut",subtitle:"Ullamco Publishing",content:`# Getting Started

Ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Guide

Follow these steps to get up and running quickly.

## Troubleshooting

If you encounter issues, check the logs or open an issue.`},{id:9,userId:1,title:"Aliquip Ex Ea Commodo",subtitle:"Ea Solutions",content:`# Introduction

Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.

## Quick Reference

- Option 1
- Option 2
- Option 3

## Feedback

Please provide feedback via our online form.`},{id:10,userId:1,title:"Consequat Duis Aute Irure",subtitle:"Consequat Press",content:`# Welcome

Consequat duis aute irure dolor in reprehenderit in voluptate velit esse.

## Highlights

- Highlight 1
- Highlight 2
- Highlight 3

## Contact

Email us at contact@consequatpress.com.`}],d=()=>t({class:"flex items-center justify-between mb-6 py-2"},[t({class:"flex flex-auto justify-between items-center space-x-4"},[s({class:"text-2xl font-semibold"},"Documents"),n({variant:"withIcon",class:"primary",onClick:()=>console.log("New document clicked"),icon:o.circlePlus},"New document")])]),m=e=>a({href:`/directory/user/${e.userId}/documents/document/${e.id}`},[l({class:"flex flex-col items-center justify-center h-72",margin:"m-2",padding:"p-0",hover:!0},[r({size:"lg"},o.document.text)]),t({class:"p-4 flex flex-col space-y-1"},[i({class:"text-sm font-medium truncate"},e.title),i({class:"text-xs text-muted-foreground truncate"},e.subtitle),i({class:"text-sm font-semibold"},e.price)])]),p=e=>t({class:"mb-6"},[new u({cache:"documents",class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6",key:"id",items:e||[],role:"list",rowItem:m})]),x=()=>t({class:"flex flex-col w-full mx-auto max-w-[1400px]"},[d(),p(c)]);export{x as DocumentsListPage,x as default};
