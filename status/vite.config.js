import { fileURLToPath, URL } from 'node:url'
import path from "path";
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
	return defineConfig({
		base: process.env.VITE_BASE,
		plugins: [
			vue(),
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		}
	});
};
