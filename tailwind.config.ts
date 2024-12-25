import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'custom-blue': '#2C14DD',
				'custom-gray':'#50545B',
				'custom-gray-lite':'#7D848D',
				'custom-brown-lite':'#868686',
				'custom-ip':'#FDFDFD',
				'custom-checkbox': '#00b5ff',
				'custom-checkbox-b': '#D9D9D9',
				'custom-black': '#263238',
				'custom-black-lg': '#171717',
				'custom-red': '#FF2D55',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				"custom-sf": ['"SF Pro"', 'Arial', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-header': 'linear-gradient(180deg, #F4F4FF 0%, #F7F7F9 100%)',
                'gradient-sidebar': 'linear-gradient(180deg, rgba(244, 244, 255, 0.66) 0%, #F7F7F9 100%)',
				'gradiant-app-sidebar': 'linear-gradient(180deg, #F4F4FF 54.5%, #F7F7F9 100%)',
				'gradiant-home-card': 'linear-gradient(180deg, rgba(221, 20, 134, 0.05) 0%, rgba(24, 11, 119, 0.05) 100%)',
			},
			boxShadow: {
				'1xl': '0 0 12px 0px rgba(0, 0, 0, 0.4)',
				'3xl': '0 4px 4px 0px rgba(0, 0, 0, 0.25)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
