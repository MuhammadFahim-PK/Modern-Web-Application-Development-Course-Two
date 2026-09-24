# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

##   Important Command for Installation

    #   For create React Project

        npm create vite@latest my-react-app

    #   create simple project with Vite
        
        npm create vite@latest my-project

    #   GSAP Add in project environment
    
        npm install gsap    

    #  Swiper Slider Add in project environment
    
        npm install swiper

    #   Bootstrap Add in project environment

        npm i bootstrap@5.3.8

    #   Bootstrap Add in project environment by Vite

        npm i --save bootstrap @popperjs/core
        npm i --save-dev sass

    #   Twilwind CSS Add in project with Vite

        npm install tailwindcss @tailwindcss/vite

    #   React Icon Add in project

        npm i react-icons
    
    #   Configure the Vite plugin - Add the @tailwindcss/vite plugin to your Vite configuration.

        import { defineConfig } from 'vite'
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
            plugins: [
                tailwindcss(),
            ],
        })

